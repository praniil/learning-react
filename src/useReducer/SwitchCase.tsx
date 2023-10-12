import React, { useReducer } from 'react'

function reducer (state : any, action : any) {
    switch(action.type){
        case 'increase age' : {
            return {
                ...state,
                age : state.age + 1
            }
        }
        case 'change name' : {
            return {
                ...state,
                name : action.nextName,
            }
        }
    }
    throw Error("Unknown action")
}

const SwitchCase = () => {
    const[state, dispatch] = useReducer(reducer, {name : 'Pranil', age: 20})
    function handleClick () {

        dispatch({type : 'increase age'});

    }
    function handleInputChange ( event : any ) {
        dispatch({type : 'change name', 
        nextName : event.target.value
    })
    }
  return (
    <div>
      <button onClick={handleClick}>Increase Age</button>
      <input type="text" placeholder='Enter a name' onChange={handleInputChange} value= {state.name}/>
      <p> My age is {state.age}</p>
      <p> My name is {state.name}</p>
    </div>
  )
}

export default SwitchCase
