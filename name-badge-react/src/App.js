import React from "react"
import Badge from "./Badge"

//sudo code: 1. Set state (needs each property in it) 2. Create a form with various inputs 3. Connect form to setstate; Name properties = setState variables 4. this.state.firstName = Value       5. Make a badge component (Resusability is point of components)

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            placeOfBirth: "",
            phoneNumber: "",
            favoriteFood: "",
            aboutSection: "",
            badge: null
        }
    }

handleChange =(e) => {
    const{value, name} = e.target
    this.setState({[name]: value})

}


handleSubmit = (e) => {
    e.preventDefault()
    this.setState({badge: <Badge 
        data= {this.state} />}) 
}

render() {
    return(
        <div>
            <div id="container">
                <div id="innerbox">
                    <form id="inputStyles" onSubmit={this.handleSubmit}>
                        <input type="text"
                        name="firstName"
                        placeHolder="First Name"
                        value={this.state.firstName}
                        onChange={this.handleChange}
                        />

                        <input type="text"
                        name="lastName"
                        placeHolder="Last Name"
                        value={this.state.lastName}
                        onChange={this.handleChange}
                        />

                        <input type="email"
                        name="email"
                        value={this.state.email}
                        placeHolder="Email"
                        onChange={this.handleChange}
                        />

                        <input type="text"
                        name="placeOfBirth"
                        placeHolder="Place of Birth"
                        value={this.state.placeOfBirth}
                        onChange={this.handleChange}
                        />

                        <input type="text"
                        name="phoneNumber"
                        placeHolder="Phone Number"
                        value={this.state.phoneNumber}
                        onChange={this.handleChange}
                        />
                        
                        <input type="text"
                        name="favoriteFood"
                        placeHolder="Favorite Food"
                        value={this.state.favoriteFood}
                        onChange={this.handleChange}
                        />

                        
                        <textarea id="textAreaWidth"
                        name="aboutSection"
                        placeHolder="About Section"
                        value={this.state.aboutSection}
                        onChange={this.handleChange} 
                        rows="5">
                        </textarea>


                    <button type="submit"> Submit </button>
                    </form>
                </div>
            </div>
            {this.state.badge ? this.state.badge : <p></p>}
        </div>
    )
    }
}

export default App;
