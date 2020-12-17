import React from "react"

function Badge(props){
    return(
        <div class="badgeStyleContainer">
            <div class="header">Badge</div>
            <div class="innerboxBadge">
                <div id="left">
                    <h3> First Name: {props.firstName} </h3>
                    <h3> Last Name: {props.lastName} </h3>
                    <h3> Email Address: {props.email} </h3>
                </div>
                <div id="right">
                    <h3> Place of Birth: {props.placeOfBirth} </h3>
                    <h3> Phone Number: {props.phoneNumber} </h3>
                    <h3> Favorite Food: {props.favoriteFood} </h3>
                </div>
            </div>
            <p id="similarTextArea">{props.aboutSection}</p>
        </div>
    )    

}























export default Badge