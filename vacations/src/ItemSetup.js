import React from "react"


function ItemSetup(props){
  let weatherColor=" "
  switch(props.timeToGo){
    case "Fall":
      weatherColor = "orange"
      break
    case "Spring":
      weatherColor = "pink"
      break
    case "Winter":
       weatherColor = "gray"
       break
    case "Summer":
      weatherColor = "green"
      break
    default: 
      weatherColor = "white"
      break 
  }

  return (
    <div 
      className="cardFrame" 
      style={{backgroundColor: weatherColor}}
    >
      <h2>{props.place}</h2>
      <h3>{
            props.price < 500 
              ? "$" 
              : props.price < 1000 
                ? "$$" 
                : "$$$"
          }
          {props.price}
      </h3>
      <p>{props.timeToGo}</p>
    </div>
  )
}
        

// TERNARY Operator another way to do conditional instead of switch case....
//backgroundColor: props.timeToGo === 'Spring' ? 'pink' : props.timeToGo === 'Fall' ? 'orange' : props.timeToGo === //'Winter' ? 'gray' : 'green'
//: Means ELSE in ternary statement. 
export default ItemSetup

//backgroundColor: 'pink'
