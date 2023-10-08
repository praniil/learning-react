import React from 'react'

interface User {
    name : string,
    imageUrl : string,
    imageSize : number
}

const user : User = {
    name : "Pranil", 
    imageUrl : "https://i.imgur.com/yXOvdOSs.jpg", 
    imageSize : 90
}

const displayData = () => {
  return (
    <div>
      {user.name}
      <img src = {user.imageUrl}
      // {/* style = {{}} is not a special syntax instead it is just an object {} inside the style{} */ }
      style={{
        width : user.imageSize,
        height : user.imageSize
      }} />
    </div>
  )
}

export default displayData
