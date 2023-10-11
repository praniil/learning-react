import React, { useRef } from 'react'

const Focus = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    function handleFocus () {
        if(inputRef.current){

            inputRef.current.focus();
        }
    }
  return (
    <div>
      <input ref= {inputRef}/>
      <button onClick={handleFocus}>Foucs The Input</button>
    </div>
  )
}

export default Focus
