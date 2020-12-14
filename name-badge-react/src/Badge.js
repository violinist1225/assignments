import React from "react"

function Badge(props){
    return(
        <div class="badgeStyleContainer">
            <div class="header"></div>
            <div class="innerboxBadge">
                <h3> {props.data.firstName} </h3>
                <h3> {props.data.lastName} </h3>
                <h3> {props.data.email} </h3>
                <h3> {props.data.placeOfBirth} </h3>
                <h3> {props.data.phoneNumber} </h3>
                <h3> {props.data.favoriteFood} </h3>
                <h3> {props.data.aboutSection} </h3>
            </div>
        </div>
    )    

}























export default Badge