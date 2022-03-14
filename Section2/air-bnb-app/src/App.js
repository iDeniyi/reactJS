import React from "react";
import { ReactDOM } from "react"; 
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";


import data from "./data"


function App() {
  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        item={item}
      />
    )
  })
  const firstName = "Ini"
  const lastName = "Ade"
  return (
    <div>
      <Navbar/>
      <Hero/>
      {cards}

      <h1> Hello {firstName} {lastName}</h1>
    </div>


  );
}

export default App;
