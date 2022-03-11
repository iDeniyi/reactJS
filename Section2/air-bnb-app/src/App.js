import React from "react";
import { ReactDOM } from "react"; 
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import lifestyle1 from "./images/lifestyle1.jpg";
import star from "./images/star.png";


function App() {

  const firstName = "Ini"
  const lastName = "Ade"
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Card
        img={lifestyle1}
        rating="5.0"
        reviewCount={6}
        country="France"
        title="mountina top"
        price="136"
      />

      <h1> Hello {firstName} {lastName}</h1>
    </div>


  );
}

export default App;
