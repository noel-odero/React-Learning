import { useState, useReducer } from "react";

const ACTIONS = {
    INCREMENT: `increment`,
    DECREMENT: `decrement`
}

function reducer(state, action){
    switch(action.type) {
        case 'increment':
            return { count: state.count + 1}
        case 'decrement':
            return { count: state.count - 1}
        default:
            return state
    }
    // action is passed into dispatch function

}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0})
    // reducer- function that we perfom on our state to return new state
    // dispatch - what we call to update our state
    const [count, setCount] = useState(0);

    function decrement() {
        dispatch({type: 'decrement'})
    }

    function increment(){
        dispatch({type: 'increment' })
    }

    return(
        <>
            <button onClick={decrement}>-</button>
            <span>{state.count}</span>
            <button onClick={increment}>+</button>
        </>
    )
}

export default Counter; 