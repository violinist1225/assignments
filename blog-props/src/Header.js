import React from "react"
import Navbar from "./Navbar"

function Header(){
    return(
        <div className="headerImage">
            <Navbar />
            <div className="overlay"/>
        </div>
    )
}

//Navbar must be returned inside header component b/c I want it to show up
//inside the header comp. 

export default Header