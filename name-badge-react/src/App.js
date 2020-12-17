import React from "react"
import Badge from "./Badge"

// sudo code: 1. Set state (needs each property in it) 2. Create a form with various inputs 3. Connect form to setstate; Name properties = setState variables 4. this.state.firstName = Value       5. Make a badge component (Resusability is point of components)

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
            badges: []
        }
    }

    handleChange = (e) => {
        const {value, name} = e.target
        this.setState({[name]: value})
        const enabled = this.state.firstName.length >= 2 && this.state.lastName.length >= 2 && this.state.email.length >= 2 && this.state.placeOfBirth.length >= 2 && this.state.phoneNumber.length >= 2 && this.state.favoriteFood.length >= 2 && this.state.aboutSection.length >= 2

        if (enabled === true) {
            this.setState((prevState) => {
                return {
                    ...prevState,
                    disabled: false
                }
            })
        } else {
            this.setState((prevState) => {
                return {
                    ...prevState,
                    disabled: true
                }
            })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState((prevState) => {
            return {
                badges: [
                    ...prevState.badges, {
                        firstName: this.state.firstName,
                        lastName: this.state.lastName,
                        email: this.state.email,
                        placeOfBirth: this.state.placeOfBirth,
                        phoneNumber: this.state.phoneNumber,
                        favoriteFood: this.state.favoriteFood,
                        aboutSection: this.state.aboutSection,
                        badges: this.state.badges,
                        disabled: this.state.disabled
                    }
                ]
            }

        })

        // handleSubmit method could house object for badge instead of component, if I want
        // to access info again wouldn't be able to with current code. Ex:


    }


    render() {
        return (
            <div>
                <div id="container">
                    <div id="innerbox">
                        <form id="inputStyles"
                            onSubmit={
                                this.handleSubmit
                        }>
                            <input type="text" name="firstName" placeHolder="First Name"
                                value={
                                    this.state.firstName
                                }
                                onChange={
                                    this.handleChange
                                }/>

                            <input type="text" name="lastName" placeHolder="Last Name"
                                value={
                                    this.state.lastName
                                }
                                onChange={
                                    this.handleChange
                                }/>

                            <input type="email" name="email"
                                value={
                                    this.state.email
                                }
                                placeHolder="Email"
                                onChange={
                                    this.handleChange
                                }/>

                            <input type="text" name="placeOfBirth" placeHolder="Place of Birth"
                                value={
                                    this.state.placeOfBirth
                                }
                                onChange={
                                    this.handleChange
                                }/>

                            <input type="text" name="phoneNumber" placeHolder="Phone Number"
                                value={
                                    this.state.phoneNumber
                                }
                                onChange={
                                    this.handleChange
                                }/>

                            <input type="text" name="favoriteFood" placeHolder="Favorite Food"
                                value={
                                    this.state.favoriteFood
                                }
                                onChange={
                                    this.handleChange
                                }/>


                            <textarea id="textAreaWidth" name="aboutSection" placeHolder="About Section"
                                value={
                                    this.state.aboutSection
                                }
                                onChange={
                                    this.handleChange
                                }
                                rows="5"></textarea>


                            <button id="submitButton"
                                //  type="submit"
                                disabled={
                                    this.state.disabled
                            }>Submit
                            </button>
                        </form>
                    </div>
                </div>
                {/* //this.state.badges is a security checkpoint that checks to see if it exists */}
                {
                this.state.badges && this.state.badges.length > 0 && this.state.badges.map(badge => {
                   return ( <Badge firstName={
                            badge.firstName
                        }
                        lastName={
                            badge.lastName
                        }
                        email={
                            badge.email
                        }
                        phoneNumber={
                            badge.phoneNumber
                        }
                        placeOfBirth={
                            badge.placeOfBirth
                        }
                        favoriteFood={
                            badge.favoriteFood
                        }
                        aboutSection={
                            badge.aboutSection
                        }/>
                )})
                
            }


                {/* {this.state.charCountWarning ? <p>"You Need To Enter More than 3 Characters for each field!</p>: <> </>} */} </div>
        )
    }
}

export default App;
