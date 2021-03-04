import './App.css';

import React from "react"
import NavBar from "./components/NavBar"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"

function App(){
    /*const firstName = "Bob"
    const lastName = "Ziroll"*/
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    
    if (hours < 12) {
      timeOfDay = "morning"
    } else if (hours >= 12 && hours <= 19) {
      timeOfDay = "afternoon"
    } else {
      timeOfDay = "night"
    }

    return(
        //<h1>Hello {firstName + " " + lastName}!</h1>
        <h1>Good {timeOfDay}!</h1>

        /*<div>
            <NavBar/>
            <MainContent/>
            <Footer/>
        </div>*/
        
        /*<div>
            <input type="checkbox" name="chb1" />
            <p>First paragraph</p>
            <input type="checkbox" name="chb1" />
            <p>Second paragraph</p>
            <input type="checkbox" name="chb1" />
            <p>Third paragraph</p>
        </div>*/
    )
}
export default App
