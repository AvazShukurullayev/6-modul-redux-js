import {createStore} from "redux";

// Todo: shu reducer imza asosan toza(clear function) bolishi kere nimadurga qaram bolishi keremas.
//  bu digani biza hoxlagan paytimizda hoxlagan file ga chiqazib yubora olishimiz kere.
//  bu function tashqaridan qandaydur props mi function mi qabul qilishi keremas. har doim clear function bolishi kere.
const initialState = {count: 0, firstName: "Samar", lastName: "Badriddinov"}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INC":
            return {...state, count: state.count + 1}
        case "DECR":
            return {...state, count: state.count - 1}
        case "RND":
            return {...state, count: action.payload}
    }
}

const store = createStore(reducer)
const updateUI = () => {
    document.querySelector("#counter").textContent = String(store.getState().count)
}

store.subscribe(updateUI) // callback qilib berib qoyvommiz, stateimizni ozgarsa subscribe function ishga tushadi like componentDidUpdate

// optimizing actions
const inc = () => ({type: "INC"})
const decr = () => ({type: "DECR"})
const rnd = (value) => ({type: "RND", payload: value})
document.querySelector("#inc").addEventListener("click", () => {
    store.dispatch(inc())
})

document.querySelector("#decr").addEventListener("click", () => {
    store.dispatch(decr())
})

document.querySelector("#rnd").addEventListener("click", () => {
    const randomValue = Math.floor(Math.random() * 100000000000)
    store.dispatch(rnd(randomValue))
})