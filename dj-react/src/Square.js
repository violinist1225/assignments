import React from "react"
import "./style.css"
class Square extends React.Component {
    render() {
        console.log(this.props)
        return ( 
        <div className = "oneSquare"
            style = {
                { backgroundColor: this.props.color }
            }>
            </div>
        )
    }
}
export default Square 