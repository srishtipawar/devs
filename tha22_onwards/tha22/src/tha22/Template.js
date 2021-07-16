import React from 'react';
import { useState, useEffect } from 'react';

import axios from 'axios';
import './Template.css';

function Template({template,setItem,item,setMeme}){
   console.log(template);
    return(
        <div>
            {template.map((it)=>(
                <div key={it.id} className="item">
                    <div style={{backgroundImage:`url(${it.url})`}} onClick={()=>{
                        setItem(it);
                        setMeme(false);
                        console.log(it);
            }} className="img"></div>
                </div>
            ))}
    </div>
    )
    

}

export default Template;
                             