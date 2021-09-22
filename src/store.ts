import {reactive, readonly} from "vue"
import BrowserStorage from '@trapcode/browser-storage'; // Persistent State

// Documentation here https://www.npmjs.com/package/@trapcode/browser-storage
// Initialize
const localStore = BrowserStorage.getLocalStore('techieoriname');

// Enable Encryption
localStore.enableBase64Encryption(import.meta.env.PROD)

const state = reactive({
    title: "Vue TypeScript Tailwindcss Vue-Router Vitejs",
    loggedIn: localStore.getBoolean('loggedIn', false),
})

function UPDATE_LOGGED_IN(loggedIn: boolean) {
    state.loggedIn = loggedIn
    localStore.setBoolean('loggedIn', loggedIn)
}

export default {
    state: readonly(state),
    UPDATE_LOGGED_IN
}
