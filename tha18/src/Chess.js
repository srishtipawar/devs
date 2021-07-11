import React from 'react';


function Box1(){
    return <div className="b" style={{backgroundColor: "black",
        height: 40,
        width: 40}}></div>
}
function Box2(){
    return <div className="w" style={{backgroundColor: "white",
        height: 40,
        width: 40}}></div>
}
function Row1(){
    return(
        <div className="row" style={{ display: "flex"}}>
    <Box1></Box1>
    <Box2></Box2>
    <Box1></Box1>
    <Box2></Box2>
    <Box1></Box1>
    <Box2></Box2>
    <Box1></Box1>
    <Box2></Box2>
    </div>
    )
}
function Row2(){
    return(
        <div className="row" style={{ display: "flex"}}>
    <Box2></Box2>
    <Box1></Box1>
    <Box2></Box2>
    <Box1></Box1>
    <Box2></Box2>
    <Box1></Box1>
    <Box2></Box2>
    <Box1></Box1>
    </div>
    )
}
function Chess(){

    return(
        <div className="main" style={{
            width:320,height:320,border:'15px solid #87511b',boxShadow:6,
        }}>
         <Row1></Row1>
         <Row2></Row2>
         <Row1></Row1>
         <Row2></Row2>
         <Row1></Row1>
         <Row2></Row2>
         <Row1></Row1>
         <Row2></Row2>

        </div>
    )

}
export default Chess;