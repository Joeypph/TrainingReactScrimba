import React from "react"

function Joke(prop) {
    console.log(prop)
    return(
        /*what if we don´t have a question for a joke*/
        <div>
            <h1 style={{display: !prop.question && "none"}}>Question: {prop.question}</h1>
            <h2 style={{color: !prop.punchline && "#888888"}}>Answer: {prop.punchline}</h2>
            <hr/>
        </div>
    )
}
export default Joke