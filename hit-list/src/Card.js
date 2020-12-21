import React from "react"
import "./Card.css"

function Card(props)
{
    return(
    <div className="container">
        <div style= {{position: "relative"}}>
            <img src={props.image} className="image"></img>
                <h2 className="bottomHeader">{props.name}</h2>
        </div>
    </div>
    )}




export default Card 