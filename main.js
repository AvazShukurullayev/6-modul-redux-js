import {createStore} from "redux";

const initialState = 0
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INC":
            return state + 1
        case "DECR":
            return state - 1
        case "RND":
            return action.payload
    }
}

const store = createStore(reducer)
const updateUI = () => {
    document.querySelector("#counter").textContent = String(store.getState())
}

store.subscribe(updateUI) // callback qilib berib qoyvommiz, stateimizni ozgarsa subscribe function ishga tushadi like componentDidUpdate

document.querySelector("#inc").addEventListener("click", () => {
    store.dispatch({type: "INC"})
})

document.querySelector("#decr").addEventListener("click", () => {
    store.dispatch({type: "DECR"})
})

document.querySelector("#rnd").addEventListener("click", () => {
    const randomValue = Math.floor(Math.random() * 100)
    store.dispatch({type: "RND", payload: randomValue})
})