import React from 'react';
import Template from './Template';
import { useState } from 'react';
import { useEffect } from 'react';
import './Template.css';
import axios from 'axios';

function Meme({item,setMeme,setItem}){
    const [form,setForm] = useState({
        template_id:item.id,
        username:"Srishti02",
        password:"Dakshu@6",
        boxes:[],
    })
    const generateMeme=()=>{
        let url = `https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`
        
        form.boxes.map((box,index)=>{
           url+= `&boxes[${index}][text] = ${box.text}`;
           console.log();
        })
        
        fetch(url).then(res=>res.json())
        .then(data=>{
            setItem({...item,url:data.data.url});
        })
    }
    
    return(
        
        <div >
            <img className="final" src={item.url}></img>
            <div >
            {[...Array(item.box_count)].map((_,index)=>(
                <input key={index} className="in" placeholder={`Meme caption ${index+1}`} onChange={(e)=>{
                    const newBox = form.boxes;
                    newBox[index] = {text:e.target.value}
                    setForm({...form,boxes:newBox})
                    generateMeme()
                }}></input>
            ))}
            </div>
            <button className="create" onClick={generateMeme}>Create Meme</button>
     <button className="select" onClick={()=>{
         setMeme(true);
     }}>Choose Template</button>
            </div>
    )
}
function Main() {
    const [meme,setMeme] = useState(false);
    const[template,setTemplate] = useState([]);
    const[item,setItem] = useState({});
    useEffect(()=>{
        async function getData(){
            const res = await axios.get('https://api.imgflip.com/get_memes');
            setTemplate(res.data.data.memes);
            
        }
        getData();
    },[])
    console.log(item);

  return (
    <div className="App">
     <h1>Meme Generator</h1>
     <div className="meme">
        
        {meme ? <Template template={template} setItem={setItem} item={item} setMeme={setMeme}/> : (
            
            <Meme item={item} setMeme={setMeme} setItem={setItem}/>
            
        )}
     </div>


     
    </div>
  );
}

export default Main;
