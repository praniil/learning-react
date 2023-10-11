// import React, { useRef, useState } from 'react'
// //intial value is ignored after the initial render
// const UseRefrence = () => {

//   const myValueRef = useRef('Initial Value');

//   function handleChangeValue () {

//     console.log('current value: ', myValueRef.current)
//     myValueRef.current = "Final Value"

//     forceRerender();
//     //initially myValueRef.current = initial value
//     //later it is ignored and myValueRef.curent is set "final value"
//   }
// //react doesnt re-render your component because react is not aware of whenn you change it because a ref is a plain js object
// //So we used force render
//   function forceRerender () {
//       setForceRender(Math.random())
//   }

//   const [forceRender, setForceRender] = useState<number>();


//   return (
//     <div>
//         <button onClick = {handleChangeValue}>Change Value</button>
//     </div>
//   )
// }

// export default UseRefrence
// useRef it doesnt affect the visual output of the component , so it is percect for stroting information that doesnt affect the visual output of your component
// it is because changing a ref doent trigger a re-render

//click counter
import React, { useState } from 'react'
import { useRef } from 'react'

const UseMemo = () => {
  let ref = useRef(0);
  // const [count, setCount] = useState<number>(0)
  function handleClick () {
    ref.current = ref.current + 1;
    // console.log("ref", ref.current);
    alert(`You clicked me ${ref.current} times`)
    // setCount(count + 1);
    // console.log("count", count);
    // alert(`You clicked me ${count} times`)
  }
  return (
    <div>
      {/* <p> {count} </p>
      <p> {ref.current} </p> */}
      <p> {ref.current} </p>
      <button onClick={handleClick}>click me !</button>
    </div>
  )
}

export default UseMemo
