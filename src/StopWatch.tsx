import React, { useRef, useState } from 'react'
import { start } from 'repl';

const StopWatch = () => {
    const [startTime, setStartTime] = useState <number | null>(null)
    const [ now, setNow ] = useState <number | null> (null);
    const refrenceInterval = useRef<NodeJS.Timeout| null>(null)
    function handleStart() {
        setStartTime(Date.now())
        if(refrenceInterval.current){
            clearInterval(refrenceInterval.current);
        }
        refrenceInterval.current = setInterval(()=>{
            setNow(Date.now())
        }, 10) //in the interval of 10 seconds refrenceInterval now is set to Date.now() using setNow
    }
    function handleStop () {
        if(refrenceInterval.current){

            clearInterval(refrenceInterval.current);
        }
    }

    let timing = 0;
    if(startTime !== null && now !== null) {
        timing = ( now - startTime) / 1000;
    }
  return (
    <div>
        <div>Time Elapsed : {timing.toFixed(3)}</div>
      <button onClick={handleStart}> Start </button>
      <button onClick={handleStop}> Stop </button>
      <button onClick={()=> {
        setStartTime(null)
      }}> Reset </button>
    </div>
  )
}

export default StopWatch
