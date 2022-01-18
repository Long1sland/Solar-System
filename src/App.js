import React from "react";

//Components
import NavBar from "./Components/NavBar";
import Home from "./Home";
//Styles
import { GlobalStyle } from "./GlobalStyles";

//Routing
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

console.log("the entire app re rendered");

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            exact
            path="Solar-System/:planetId/:section"
            element={<Home />}
          ></Route>
          <Route
            exact
            path="/Solar-System"
            element={<Navigate to="/Solar-System/Mercury/overview" />}
          ></Route>
        </Routes>
        <GlobalStyle />
      </BrowserRouter>
    </>
  );
}

export default App;
