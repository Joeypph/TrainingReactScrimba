import './App.css';

import React from "react"
import NavBar from "./components/NavBar"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"

function App(){
    return(
        <div>
            <NavBar/>
            <MainContent/>
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
