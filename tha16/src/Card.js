import React from 'react';

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

]

const Card = props=>
    props.list.map(item=>(
        <div>
            <h2>{item.food}</h2>
            <h4>you have consumed {item.cal} calories.</h4>
        </div>
    ))
export default Card;