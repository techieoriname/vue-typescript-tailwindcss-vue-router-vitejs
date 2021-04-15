import {reactive, readonly} from "vue"

const state = reactive({
    counter: 0
})

const UPDATE_COUNTER = (value: number) => {
    state.counter = value
}

export default {
    state: readonly(state),
    UPDATE_COUNTER
}
