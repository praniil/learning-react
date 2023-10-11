import React, { useState } from 'react'
import './PhotoGallery.css'
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'

const PhotoGallery = () => {
  const [state, setState] = useState<number>(0);
  const photoArray = [
    {
      url : "https://picsum.photos/200/300"
    },
    {
      url : "https://picsum.photos/200/250"
    },
    {
      url : "https://picsum.photos/250/200"
    },
    {
      url : "https://picsum.photos/300/300"
    },
    {
      url : "https://picsum.photos/250/300"
    }
  ]
  
  function handleLeft() {
    if ( state == 0){
      setState(photoArray.length - 1)
    }
    else{
      setState(state - 1);
    }
  }
  
  function handleRight() {
    if (state == photoArray.length - 1) {
      setState(0);
    }
    else {
      setState(state + 1);
    }
  }

  return (
    <div className = "container">
      <div className='photo'>
        <img src={photoArray[state].url} alt=""  />
      </div>
    {/* Left arrow Button */}
    <div className='arrow'>

    <div className='left' onClick={handleLeft}> <BsChevronCompactLeft /> </div>

    {/* Right arrow Button */}
    <div className='right' onClick={handleRight}> <BsChevronCompactRight/> </div>
    </div>
    </div>
  )
}

export default PhotoGallery
