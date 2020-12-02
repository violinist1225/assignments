import React from "react"
class Square extends React.Component {
    constructor() {
        super()
        
    }
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