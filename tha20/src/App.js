import React from 'react';
import  './Card.css';
import { useState, setState} from 'react';



function App() {

  const [cards,setCards] = useState([ {
    food:"pizza",
    cal:"56",
    id:"1"
  },
    {
      food:"burger",
      cal:"26",
      id:"2"
  },
  {
      food:"momos",
      cal:"16",
      id:"3"
  },
  {
      food:"ice cream",
      cal:"156",
      id:"4"
  },
  {
      food:"brownie",
      cal:"106",
      id:"5"
  },

]);

 
  
  
  return (
    <div id="main">
      {cards.map((card)=>(
        <Card key = {card.id} cards={cards} setCards={setCards} food={card.food} cal={card.cal} id={card.id}/>
      ))}
      
    </div>

  );
}


const Card = props=>
 
   
        <div id="card">
          <span><button onClick={()=>{
            const items = props.cards.filter((card)=>(card.id!=props.id))
            props.setCards(items);
          }}>Remove</button></span>
            <h2>{props.food}</h2>
            <h4>you have consumed {props.cal} calories.</h4>
        </div>

    
    
export default App;
