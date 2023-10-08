import React from 'react'
import Display from './displayData';
//props := make components reusable
//pass data from one component to another
//props make a component reusabel

//in ts you need interface of props , props are basically an argument to the funciton and it helps to connect different component or increases the usability of component
interface PropsT {
    name : string;
    job : string;
}


const Props : React.FC<PropsT> = (props) => {      //props is simply an argument given to the function
  return (
    <div>
        {/* name : {props.name}
        job : {props.name}  */}
        Job : {props.job}
        Name : {props.name}
    </div>
  )
}

export default Props
