import './App.css';

import React from "react"
import randomColor from "randomcolor"
//In react , instead of waiting for the user to finish its form, we conostantly keep track on every key stroke

class App extends React.Component {
    constructor() {
        super()

        this.state = {
            //state is not saving anything, so w add firstnmae
            firstName: "",
            lastName: ""
        }
        this.handleChange=this.handleChange.bind(this)
    }
    

    //event fire they passed a predetermined value, this case get value of the input box
    handleChange(event){
        //to update we use this.setState
        this.setState({
            //current value of my box
            [event.target.name]: event.target.value
        })

    }
    render() {
        return (
            //input boxes have an event called "onChange"
            <form>
                  <input 
                    type = "text" 
                    name="firstName" 
                    value={this.state.firstName} 
                    placeholder="First Name" 
                    onChange={this.handleChange}>
                  </input>
                  <br />
                  <input 
                    type = "text" 
                    name="lastName" 
                    value={this.state.lastName} 
                    placeholder="Last Name" 
                    onChange={this.handleChange}>
                  </input>
                  <h1>{this.state.firstName} {this.state.lastName}</h1>
            </form>
        )
    }
}

//Controlled forms state directs. forcing the inputs

export default App
