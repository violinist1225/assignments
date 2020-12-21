import React from "react"
import Card from "./Card"
import axios from "axios"
import "./Body.css"


class Body extends React.Component {
    constructor() {
        super()
        this.state = {
            targets: []
        }
    }
  componentDidMount(){
      axios.get("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
      .then((response) => {
          this.setState({targets: response.data})
      })
      .catch((error) => {
          console.log("There was an error")
      })

  }
    render(){
        return(
            <div className="cardwrapper">
                {this.state.targets.map((target)=> 
                <Card name={target.name} 
                      image={target.image}
                />)}
            </div>

        )
    }

}



    export default Body 