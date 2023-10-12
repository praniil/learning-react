import React, { useReducer } from 'react'
//useReducer(reducer, initialArg, init?)
//useReducer returns an array of exactly two items
//1. current state initially set to the initial state
//2. dispatch function

function reducer ( state : any , action : any ) {       //reducer function specifies how the state gets updated.
    if(action.type === 'incremented_age') {
        return {    //it has to return the next state
            age : state.age + 1
        }
    }
    throw Error('Unknown action');
}


const UseReducer = () => {
    const[state, dispatch] = useReducer(reducer, {age: 42})
  return (
    <div>
      <button onClick={()=> {
        dispatch({type : 'incremented_age'})
      }}> increse the age </button>
      <p> My age is {state.age} </p>
    </div>
  )
}

export default UseReducer
