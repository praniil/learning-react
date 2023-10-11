import React, { useEffect, useState } from 'react'



const RespondingToEvents = () => {
  function handleClick () {
    alert("you clicked me! ")
  }
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
  /* WITHOUT USING ARROW FUNCTION */
  
  // function UpdateTitle () {
  //   document.title = `You clicked ${count} times`;
  // }
  // useEffect(UpdateTitle);
  
  /*USING ARROW FUNCTION  */

  useEffect(() => {       //we pass a function to the useEffect hook
    document.title = `You clicked ${count} times`;
  });
  // the function we pass is our effect 
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
