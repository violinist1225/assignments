import React from "react"
import ItemSetup from "./ItemSetup"
import vacationSpots from "./VacationSpots.js"
import "./style.css"

function App(){
 
  return (
    <div className="container">
        {vacationSpots.map(spot => {
          return <ItemSetup 
                    key={spot.id} 
                    place={spot.place} 
                    price={spot.price} 
                    timeToGo={spot.timeToGo} 
                  />  
        })}
    </div>
  )
}



    

export default App



  return (
      <div className="todo-list">
          {todoItems}
      </div>
        )


export default App