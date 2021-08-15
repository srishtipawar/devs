import React from 'react';
import { Media } from 'reactstrap';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay, Button } from 'reactstrap';

function Body(){
    return(
        <div style={{backgroundColor:"black"}}>
        <Card inverse style={{width:400}}>
          <CardImg  height="350" src="https://cdn.images.express.co.uk/img/dynamic/59/590x/Apple-MacBook-Pro-Redesign-1228819.jpg?r=1579105421876" alt="Card image cap" 
          style={{width:400}}/>
          <CardImgOverlay>
          
            <CardText>
              <small className="text-muted">Last updated 3 mins ago</small>
            </CardText>
          </CardImgOverlay>
          
        </Card>
        <p style={{marginLeft:430,marginTop:-300,color:"whitesmoke"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever 
            e the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five 
            centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever 
            e the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five 
            centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

            When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five 
            centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.


        </p>
        <Card body inverse color="black" style={{width:300, height:100,marginTop:100, marginLeft:600,border:"1px solid white"}}>
        <CardTitle tag="h5">Special Title Treatment</CardTitle>
       
        <Button color="secondary">Button</Button>
      </Card>
        
      </div>
    )
}
export default Body;