import React, { useRef, useState } from 'react'

const StopWatch = () => {
    const [startTime, setStartTime] = useState<number | null>(null)
    const [now, setNow] = useState<number | null>(null)
    const intervalRef = useRef<NodeJS.Timeout | null>(null)

    function handleStart () {
        setStartTime(Date.now())
        setNow(Date.now())
        if(intervalRef.current){
            clearInterval(intervalRef.current);
        }
        intervalRef.current = setInterval(()=> {
            setNow(Date.now());
        }, 10);     //new interval updates the now state every 10 milisecond

    }

    let timing = 0;
    if (startTime != null && now != null) {
        timing = (now - startTime) / 1000;
    }

    function handleStop () {
        if(intervalRef.current){
            clearInterval(intervalRef.current);
        }
        
    }
  return (
    <div>
       <div>TimePassed : {timing.toFixed(3)}</div> 
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>

    </div>
  )
}

export default StopWatch
