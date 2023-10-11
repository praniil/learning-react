import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import PhotoArray from './photosArray';
import DisplayData from './displayData';
import RespondingToEvents from './RespondingToEvents';
import Props from './Props';
import Hooks from './Hooks';
import Todos from './todos';
import UseEffectHook from './UseEffectHook';
import UseEffectWindow from './UseEffectWindow';
import TicTacToe from './tictactoe';
import PhotoGallery from './PhotoGallery';
import UseRefrence from './UseMemo';
import StopWatch from './StopWatch';


function App() {
  let content;
  // const[isLoggedIn, setisLoggedIn] = useState(true);
  // if (isLoggedIn) {
  //   content = <PhotoArray />
  // } else {
  //   content = <DisplayData />
  // }

  // interface userDetails {
  //   name : string;
  //   job : string;
  // }

  // const UserObj = {
  //   name : "Ram",
  //   job : "developer"
  // }


  return (
    <div>
      {/* {content}
      <RespondingToEvents /> */}
      {/* <Props 
        name = "Apple"
        description = "i love apple"
      />  */}

       {/* <Props name = {UserObj.name}
      job = {UserObj.job}/>
       <Hooks />
      <Todos/>
      <UseEffectHook/>
      <UseEffectWindow/>
      <TicTacToe/>
      <PhotoGallery /> */}
      <UseRefrence/>
      <StopWatch/>
    </div>
    

  );
}

export default App;
