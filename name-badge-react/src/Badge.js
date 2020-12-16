import React from "react"

function Badge(props){
    return(
        <div class="badgeStyleContainer">
            <div class="header">Badge</div>
            <div class="innerboxBadge">
                <div id="left">
                    <h3> First Name: {props.data.firstName} </h3>
                    <h3> Last Name: {props.data.lastName} </h3>
                    <h3> Email Address: {props.data.email} </h3>
                </div>
                <div id="right">
                    <h3> Place of Birth: {props.data.placeOfBirth} </h3>
                    <h3> Phone Number: {props.data.phoneNumber} </h3>
                    <h3> Favorite Food: {props.data.favoriteFood} </h3>
                </div>
            </div>
            <p id="similarTextArea">{props.data.aboutSection}</p>
        </div>
    )    

}























export default Badge