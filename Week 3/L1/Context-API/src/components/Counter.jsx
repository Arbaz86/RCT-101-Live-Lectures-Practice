import React, { useReducer } from 'react'

// created Counter using useReducer hook

const reducer = (state, action) => {
    console.log(state, action)

    switch (action.type) {
        case "INCREMENT": {
            return state + action.payload;
        }
        case "DECREMENT": {
            return state - action.payload;
        }
        default: {
            return state;
        }

    }
}

export const Counter = () => {

    const [state, dispatch] = useReducer(reducer, 0);

    return (
        <div>
            <h3>Counter:{state}</h3>
            <button onClick={() => dispatch({ type: "INCREMENT", payload: 10 })}>Inc</button>
            <button onClick={() => dispatch({ type: "DECREMENT", payload: 5 })}>Dec</button>
        </div>
    )
}
