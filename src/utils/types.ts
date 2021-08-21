import {
    NavigationGuardNext,
    RouteLocationNormalized,
    Router,
} from "vue-router";

export type MetaMiddlewareContext = {
    to: RouteLocationNormalized;
    from: RouteLocationNormalized;
    next: NavigationGuardNext;
    router: Router;
    stop: NavigationGuardNext;
};

// Middleware Function
export type MetaMiddlewareFn = (ctx: MetaMiddlewareContext) => any | void;

// Array of middleware functions
export type MetaMiddlewares = MetaMiddlewareFn[];

export type StateCityType = {
    state: string;
    city: string;
};
