import React, { useRef, useState, useEffect} from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import './assets/App.css';
import NavbarPage from './screens/commons/Navbar';
import FooterPage from './screens/commons/Footer';



function App() {

  const [name, setName] =  useState("");
/*
  useEffect(() => {
    fetch("http://localhost:9000/testAPI")
      .then((res) => res.text())
      .then((res) => setName(res));
  }, []);

*/
  return (
    <>
      <NavbarPage />
        <body>
          <Outlet />
        <p> {name} </p>
        </body>
      <FooterPage />
    </>
  );
}



export default App;
