import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import Default from '@/layouts/Default.vue'
import {MetaMiddlewares} from "./utils/types";
import {auth} from "./middlewares/auth";

/** @type {import('vue-router').RouterOptions['routes']} */
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: Default,
        children: [
            {
                path: '',
                name: 'Home',
                component: () => import('@/pages/Home.vue')
            },
            {
                path: '/login',
                name: 'Login',
                component: () => import('@/pages/Login.vue')
            },
            {
                path: '/user',
                name: 'User',
                meta: {
                    middlewares: [auth],
                },
                component: () => import('@/pages/User.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

//Middleware
router.beforeEach((to, from, next) => {
    let middlewares = to.meta.middlewares as MetaMiddlewares;

    // Stop if no middlewares
    if (!middlewares) return next();

    // Convert to array if not
    if (!Array.isArray(middlewares)) middlewares = [middlewares];

    // Holds current index;
    let currentIndex = 0;

    /**
     * Custom Next Function.
     * This is the next function that will be passed to your `meta` middlewares
     */
    const customNext = () => {
        // get the next `meta` middleware
        const nextMiddleware = middlewares[currentIndex + 1];
        currentIndex++;

        // if function run it, else stop and send the default next()
        if (typeof nextMiddleware === "function") {
            return nextMiddleware({
                to,
                from,
                next: customNext,
                router,
                stop: next,
            });
        } else {
            // Else use default next NOT custom.
            return next();
        }
    };

    // Start the meta middlewares cycle.
    middlewares[0]({ to, from, next: customNext, router, stop: next });
});

export default router
