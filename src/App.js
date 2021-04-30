import './App.css';

import React from "react"
import randomColor from "randomcolor"
import Conditional from "./components/Conditional"
import { render } from '@testing-library/react';



/*
Challenge:

Given a stateless functional component:
1. Follow the steps necessary to add state to it,
        //create based componet
        //constructor method
2. Have state keep track of whether the user is logged in or not
        //boolean isLoggedIn: False
3. Add a button that logs the user in/out
        //event listener (onClick)
    a. extra challenge - make the button display "log in" if they're not logged in and "log out" if they are
    COnditional rendering
4. Display text that says "Logged in" if the user is logged in, or "Logged out" if they're not.
*/

class App extends React.Component{
    constructor(){
        super()
        this.state={
            isLoggedIn: false
        }
        this.handleClick=this.handleClick.bind(this)
    }
    handleClick(){
        this.setState(prevState=>{
            return{
                isLoggedIn: !prevState.isLoggedIn
            }
        })
    }
    render(){
        let buttonText= this.state.isLoggedIn ? " LOG OUT" : "LOG IN"
        let displayText= this.state.isLoggedIn ? " You are Log" : "You logged out"
        return(
            <div>
                <button onClick={this.handleClick}>{buttonText}</button>
                <h1>{displayText}</h1>
            </div>
        )
    }
}


export default App
