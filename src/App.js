import React from "react";

//Components
import Home from "./Home";
//Styles
import { GlobalStyle } from "./GlobalStyles";

//Routing
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<Home/>}></Route>   
    </Routes>
    <GlobalStyle/>   
    </BrowserRouter>
    </>
  );
}

export default App;
