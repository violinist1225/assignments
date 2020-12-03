import React from "react"   
import Square from "./Square"
import style from "./style.css"

class App extends React.Component {
        constructor() {
                super()
                this.state = {
                    colors: ["white", "white", "white", "white"]
                }
            }
        djp = (e) => {
            this.setState((prevState) =>({colors: ["purple", "purple", prevState.colors[2], prevState.colors[3]] }))
        }
        prof = (e) =>{
            this.setState((prevState) => ({colors: [prevState.colors[0], prevState.colors[1],"blue" , prevState.colors[3]]}) )}
        prof2 = (e) =>{
            this.setState((prevState) => ({colors: [prevState.colors[0], prevState.colors[1], prevState.colors[2], "blue"]} ))}
            dj1 = (e) =>{
              this.setState((prevState) => ({colors: [prevState.colors[0], prevState.colors[1], prevState.colors[2], "red"]} ))}
            dj2 = (e) =>{
              this.setState((prevState) => ({colors: [prevState.colors[0], prevState.colors[1], prevState.colors[2], "yellow"]} ))}
            dj3 = (e) =>{
              this.setState((prevState) => ({colors: [prevState.colors[0], prevState.colors[1], prevState.colors[2], "orange"]} ))}
            dj4 = (e) =>{
              this.setState((prevState) => ({colors: [prevState.colors[0], prevState.colors[1], prevState.colors[2], "gray"]} ))}
        small = (e)=> {
            //change all four squares either black or white. White if the first one is not white. Black if the first square is white.
            this.setState((prevState)=>{
                let color
                if(prevState.colors[0] ==="white"){
                    color = "black"
                }
                else {
                    color = "white"
                }
                return (
                    {colors: [color,color,color,color]}
                )
            }
                )
        } 
        render() {
            return (
                <div className={style.squareContainer}>
                    <div className="fourSquares"> 
                        {this.state.colors.map((color, index) => <Square color={color} key={index}/>)} 
                    </div>  
                        <button onClick={this.small}>Dj Small</button>
                        <button onClick={this.djp}>Dj Party</button>
                        <button onClick={this.prof}>Prof. DJ Left </button>
                        <button onClick={this.prof2}>Prof. DJ Right</button>

                        <button onClick={this.dj1}>Big Time DJ1</button>
                        <button onClick={this.dj2}>Big Time DJ2</button>
                        <button onClick={this.dj3}>Big Time DJ3</button>
                        <button onClick={this.dj4}>Big Time DJ4</button>

                </div>
                    )
                }
            }
 export default App;



