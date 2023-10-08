import React, { useState } from 'react'

function handleClick () {
  alert("you clicked me! ")
}


const RespondingToEvents = () => {
  const[count , setCount] = useState(0);

  function increase (){
    setCount(count + 1);
  }
  function decrease (){
    if (count > 0){

      setCount(count - 1);
    }
    else{
      setCount(0);
      alert("value cant be negative");
    }
  } 
  
  return (
    <div>
      <button onClick={handleClick}>
        click me 
      </button>
      <div> {count} </div>
      <button onClick={increase}>
        increase
      </button>
      <button onClick={decrease}>
        decrease
      </button>
      
    </div>
  )
}

export default RespondingToEvents
