import React from 'react';
import './Chess.css';

function Box1(){
    return <div className="b"></div>
}
function Box2(){
    return <div className="w"></div>
}
function Row1(){
    return(
        <div className="row">
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
        <div className="row">
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
            width:320,height:320,border:'15px solid #87511b',boxShadow:6,marginLeft:800,marginTop:-400,
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