import React from "react"


function Piece(props){
    return(
        <div class="spacing">
            <h1>{props.title}</h1>
            <h2>{props.SubTitle}</h2>
            <h3>{props.author}</h3>
            <p>{props.date}</p>
        </div>
       
    )
}

export default Piece 