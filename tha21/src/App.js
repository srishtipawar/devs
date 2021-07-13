import React from 'react';
import  './Card.css';
import { useState, setState} from 'react';
import { makeStyles} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import EditIcon from '@material-ui/icons/Edit';
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 35,
    width:98,
    marginLeft:210,
    marginTop:10,
    padding: '0 30px',
    fontSize:10
  },
});

function App() {

  const [cards,setCards] = useState([{name:"pizza",cals:"100",id:0}]);
  const [food,setFood] = useState('');
  const [cal,setCal] = useState('');
  const [id,setId] = useState(1);
  
  const handleChange = event => {
  
  setFood(event.target.value);
  
};
const handleChange2 = event => {
  setCal(event.target.value);
  
};



  
  return (
    <div className="cont">
    <div id="in">
      <input type="text" id="name"  onChange={handleChange} value={food}></input><input type="text" id="cal" onChange={handleChange2} value={cal}></input>
      
      <button id="add" onClick={
        
        ()=>{
          console.log(id);
          const obj = [...cards,{name:food,cals:cal,id:id}];
          setCards(obj);
            
              

          console.log(cards);
          setFood('');
          setCal('');
          const idx = id+1;
          setId(idx);
        }
       
      }>Add</button>
      
      
    </div>
    <div id="main">
      
    {cards.map((card,index)=>(
      
          <Card key = {index} card={card} cards={cards} setCards={setCards}  />
        ))}
      </div>
    
    </div>

  );
}

const Card = props=>{
  const classes = useStyles();
        const [edit,setEdit] = useState(false);
        const [title,newTitle] = useState(props.card.name);
        const [calo,newCalo] = useState(props.card.cals);
        

        const Edit = (index,name,cals) => {
         
          props.setCards(prevState => {
            return prevState.map((card, i) => {
              if (card.id==props.card.id) return {name , cals};
              return card;
            });
          });
        };
        
          return(
      
        <div id="card">
          {edit ? (
                
    
              <div>
               <TextField id="standard-basic" label="food" type="text" onChange={(e)=>{
                 e.preventDefault();
                 Edit(props.card.id,e.target.value,props.card.cals)
               }} value={props.card.name}/>

                <h4>you have consumed <input style={{width:40}} type="number" rows="1" cols="2" onChange={(e)=>{
                 Edit(props.card.id,props.card.name,e.target.value)
                }} value={props.card.cals}></input> calories.</h4>
                <span>
                <IconButton aria-label="save" style={{marginLeft:240,marginTop:-120,color:"#09107a",position:"absolute",}}>
                  <SaveIcon onClick={()=>{
                    setEdit(false);
                }}/>
                </IconButton>
                </span>
                </div>
          ):(
            <div>
              <IconButton aria-label="edit" style={{marginLeft:210,marginTop:-20,color:"#09107a",position:"absolute",}}>
            <EditIcon  onClick={()=>{
              
              setEdit(true);
             
           
          }}/></IconButton>

          <span>
          <IconButton aria-label="delete" style={{marginLeft:250,marginTop:-20,color:"#db2525",position:"absolute",}}>
            <DeleteIcon onClick={()=>{
            const items = props.cards.filter((card)=>(card.id!=props.card.id))
            props.setCards(items);
          }}/>
          </IconButton>
          </span>

            <h2>{props.card.name}</h2>
            <h4>you have consumed {props.card.cals} calories.</h4>
        </div>
          )
              
        }
            </div>
            
          
          )
        } 
    
export default App;
