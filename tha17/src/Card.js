import React from 'react';


function Card2(){
    return(
        <div
         style={{
             height:400,
            marginLeft:200,
            marginTop:200,
            width:350,
            border: '2px solid red',
            
        }}
        >
            <img src={'https://i.pinimg.com/736x/4d/0b/2b/4d0b2b3c5b990d47b445074c05f5ca51.jpg'}
                style={{
                    height:300,
            // marginLeft:100,
            // marginTop:200,
            width:350,
                }}
            ></img>
            <p style={{
                marginLeft:80,
                fontSize:20,
                
            }}>The meme Card</p>
            </div>

    )
}
export default Card2;