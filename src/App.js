import './App.css';

import React from "react"
import Joke from   "./components/Joke"


function App(){
    return(
        <div>
            <Joke question="Prgunta broma1" punchline="respuesta broma1"/>
            <Joke question="Prgunta broma2" punchline="respuesta broma2"/>
            <Joke question="Prgunta broma3" punchline="respuesta broma3"/>
            <Joke question="Prgunta broma4" punchline="respuesta broma4"/>
            <Joke punchline="respuesta broma5"/>
        </div>     
    )
}
export default App
