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

    const luz = {
      fontSize: 30,
    }
    
    if (hours < 12) {
      timeOfDay = "morning"
      luz.color = "#04756F"
      luz.backgroundColor = "#FF2D00"

    } else if (hours >= 12 && hours < 17) {
      timeOfDay = "afternoon"
      luz.color = "#8914A3"
      luz.backgroundColor = "#008000"
    } else {
      timeOfDay = "night"
      luz.color = "#D90000"
      luz.backgroundColor = "#FFC0CB"
    }
    return(
        //<h1>Hello {firstName + " " + lastName}!</h1>

        <div>
          <h1 style={luz}>Good {timeOfDay}!</h1>          
            <NavBar/>
            <MainContent />
            <Footer/>
        </div>
        
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
