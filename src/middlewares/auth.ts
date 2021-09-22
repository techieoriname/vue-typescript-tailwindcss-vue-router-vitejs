import { computed } from "vue";
import { MetaMiddlewareContext } from "../utils/types";
import store from "../store";

export async function auth({ next, router }: MetaMiddlewareContext) {
    const state = computed(() => store.state).value;
    if (!state.loggedIn) await router.push({ name: "Login" });
    next();
}
