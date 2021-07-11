import React from 'react';
import  './Card.css';



function App() {
  const cards=[
    {
        food:"pizza",
        cal:"56"
    },
    {
        food:"burger",
        cal:"26"
    },
    {
        food:"momos",
        cal:"16"
    },
    {
        food:"ice cream",
        cal:"156"
    },
    {
        food:"brownie",
        cal:"106"
    },
  
  ];
  return (
    <div id="main">
      <Card list = {cards}/>
    </div>

  );
}

const Card = ({list})=>
    list.map(item=>(
        <div id="card">
            <h2>{item.food}</h2>
            <h4>you have consumed {item.cal} calories.</h4>
        </div>
    ))

export default App;
