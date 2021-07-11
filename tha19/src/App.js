import React from 'react';
import { useState } from 'react';


const title = 'Srishti';
function App() {
  return (
    <div className='main' style={{marginTop:300,marginLeft:630}}>
      
      <Button /><Button /><Button /><Button />
    </div>
    

  );
}

const Button = ()=>{
  
  const [count,setCount] = useState(0);
  return(
    <button style={{height:40,width:40,borderRadius:6,marginLeft:10}} onClick={()=>{
      setCount(count+1);
    }}>{count}</button>
  )
}
export default App;
