import { MetaMiddlewareContext } from "../utils/types";
import store from "../store";
import { computed } from "vue";

export async function auth({ next, router, stop }: MetaMiddlewareContext) {
    const state = computed(() => store.state).value;
    if (!state.loggedIn) await router.push({ name: "Login" });
    next();
}
