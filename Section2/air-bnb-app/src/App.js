import React from "react";
import { ReactDOM } from "react"; 
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card"


function App() {

  const firstName = "Ini"
  const lastName = "Ade"
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Card/>
      <Contact/>

      <h1> Hello {firstName} {lastName}</h1>
    </div>


  );
}

export default App;
