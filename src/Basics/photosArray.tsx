import React from 'react'

// const name = 'Pranil';
// const element = <h1> hello , {name} </h1>

// function formatName (user : User) {
//   return user.firstName + ' ' + user.lastName;
// }
// interface User {
//   firstName : string;
//   lastName : string;
// }

// const user : User = {
//   firstName : "Pranill",
//   lastName : "Parajuli"
// };

// interface Photo {
//   id : number;
//   url : string;
// }

// const Obj = {
//   1 : {id : 1, url:  "https://picsum.photos/200/300"},  // key : value = 1 = key, {value}
//   2 : {id : 2, url:  "https://picsum.photos/200/300"},
//   3 : {id : 3, url:  "https://picsum.photos/200/300"},
//   4 : {id : 4, url:  "https://picsum.photos/200/300"},
//   5 : {id : 5, url:  "https://picsum.photos/200/300"},

// }

// const arrayPhoto : Photo[] = Object.values(Obj);


// const hipLink = <a href="https://youtube.com"> Click Here </a>
// const image = <img src="https://picsum.photos/200/300" />
interface Photo {
    id: number,
    url: string,
    name: string
}

const photoObject = {
    1: { id: 1, url: "https://picsum.photos/200/300", name: "Breeze" },
    2: { id: 2, url: "https://picsum.photos/200/300", name: "Heaven" },
    3: { id: 3, url: "https://picsum.photos/200/300", name: "Sunset" },
    4: { id: 4, url: "https://picsum.photos/200/300", name: "Split" },
    5: { id: 5, url: "https://picsum.photos/200/300", name: "Fracture" },
}

const photoArray: Photo[] = Object.values(photoObject);

const photosArray = () => {
    return (
        <div>
            {/* Hello, {formatName(user)}
      {hipLink}
      {image} */}

            {photoArray.map((photo) => (
                <div key={photo.id}>
                    {/* each elements should be under a parent . in this case we are using the data of the object with id url and name , so a parent has to be made i.e div is made enclosing both the image and name of photo */}
                    <img key={photo.id} src={photo.url} />
                    <p>{photo.name}</p>
                </div>

            ))}
        </div>
    )
}

export default photosArray
