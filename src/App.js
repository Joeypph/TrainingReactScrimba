import './App.css';

import React from "react"
import todosData from "./todosData"
import TodoItem from "./components/TodoItem"
//import Joke from   "./components/Joke"
//import jokesData from "./jokesData"
//import Product from "./components/Product"
//import vschoolProducts from "./vschoolProducts"


//joke function
/*functi Aonpp(){


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
/*function app for product
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
}*/
function  App() {
    const todoItems = todosData.map((item=>{
        return(
            <TodoItem key={item.id} item={item}/>
        )
    }))
    return(
        <div className="todo-list">
            {todoItems}
        </div>
    )
    
}
/* start using class based Components
class App extends React.Component {
    
    yourMethodHere() {
        
    }
    
    render() {
        return (
            <div>
                <h1>{this.props.whatever}</h1>
            </div>
        )
    }
}*/

export default App
