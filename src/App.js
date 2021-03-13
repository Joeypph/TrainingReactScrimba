import './App.css';

import React from "react"
import Joke from   "./components/Joke"
import jokesData from "./jokesData"
import Product from "./components/Product"
import vschoolProducts from "./vschoolProducts"

//joke function
/*function App(){
    const jokeComponents = jokesData.map( (joke) =>{
        return(
            <Joke key={joke.id} question={joke.question} punchline={joke.question}/>
        )
    })
    return(
        <div>
            {jokeComponents}
        </div>     
    )
}*/
function App() {
    const productComponents = vschoolProducts.map((item)=>{
        return(
            <Product key={item.id} product={item}/>
        )
    })
  return (
    <div>
        {productComponents}
    </div>
  )
}
export default App
