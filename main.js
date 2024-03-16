import {bindActionCreators, createStore} from "redux";
import * as actions from "./actions";
import reducer from "./reducer";

console.log("actions", actions)

const store = createStore(reducer)
const {getState, dispatch, subscribe} = store
const updateUI = () => {
    document.querySelector("#counter").textContent = String(getState().count)
}

subscribe(updateUI) // callback qilib berib qoyvommiz, stateimizni ozgarsa subscribe function ishga tushadi like componentDidUpdate

const {inc, decr, rnd} = bindActionCreators(actions, dispatch) // return object that's why we do destruction

document.querySelector("#inc").addEventListener("click", inc)
document.querySelector("#decr").addEventListener("click", decr)
document.querySelector("#rnd").addEventListener("click", () => {
    const randomValue = Math.floor(Math.random() * 100)
    rnd(randomValue)
})