import React from "react"
import RandomColor from "./RandomColor"
import "./style.css"
import axios from "axios"


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            colors: ""

        }
    }
componentDidMount(){
    axios.get(`http://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
    .then((response) => {
        console.log(response.data)
        this.setState({colors: `#${response.data.new_color}`})
    })
    .catch((error) => {
        console.log("Error")
    }) 
}

render(){
    return(
        <div style={{backgroundColor: "darkBlue"}}>
            <RandomColor  
                randomColor={this.state.colors}
            />
        </div>
    )}

}
  










export default App
