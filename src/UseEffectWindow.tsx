import React, {useEffect, useState} from 'react'

const UseEffectWindow = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    function handleResize () {
        setWindowWidth(window.innerWidth)
    }
    useEffect(()=> {
        console.log("setting effect")
        window.addEventListener('resize', handleResize)
        return () => {
            console.log("cleanUp")
            window.removeEventListener('resize', handleResize);
        }
    }, [windowWidth])
  return (
    <div>
      {windowWidth}
    </div>
  )
}

export default UseEffectWindow
