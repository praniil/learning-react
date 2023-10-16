import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import PhotoArray from './Basics/photosArray';
import DisplayData from './Basics/displayData';
import RespondingToEvents from './Basics/RespondingToEvents';
import Props from './Basics/Props';
import Hooks from './Basics/Hooks';
import Todos from './Todos/todos';
import UseEffectHook from './useEffect/UseEffectHook';
import UseEffectWindow from './useEffect/UseEffectWindow';
import TicTacToe from './tictactoe';
import PhotoGallery from './useRef/PhotoGallery';
import UseRefrence from './useRef/UseMemo';
import StopWatch from './useRef/StopWatch';
import Focus from './useRef/Focus';
import UseReducer from './useReducer/UseReducer';
import SwitchCase from './useReducer/SwitchCase';
import Home from './ShoppingCart/Home';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'
import Cart from './ShoppingCart/cart';



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
      <TicTacToe/> */}
      {/* <UseRefrence/> */}
      {/* <StopWatch/> */}
      {/* <PhotoGallery /> */}
      {/* <Focus /> */}
      {/* <UseReducer /> */}
      {/* <SwitchCase /> */}
      {/* <ImprovedTodolist /> */}
      <BrowserRouter>
      <Routes>
      <Route path = '/Home' element = {<Home/>} />
      <Route path = '/Cart' element = {<Cart/>}/>
      </Routes>
      </BrowserRouter>

    </div>
    

  );
}

export default App;
