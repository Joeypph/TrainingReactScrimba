import './App.css';

import React from "react"
import { render } from '@testing-library/react';
//import todosData from "./todosData"
//import TodoItem from "./components/TodoItem"
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
}
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
    
}*/
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
}

//Class-based Components Practice

// #1
class App extends React.Component{
    render(){
        return (
            <div>
                <Header username="Joeypph"/>
                <Greeting />
            </div>
        )
    }
}

// #2
class  Header extends React.Component {
    render(){
        return (
            <header>
                <p>Welcome, {this.props.username}!</p>
            </header>
        )
    }
}

// #3
class Greeting extends React.Component {
    render(){
        const date = new Date()
        const hours = date.getHours()
        let timeOfDay
        
        if (hours < 12) {
            timeOfDay = "morning"
        } else if (hours >= 12 && hours < 17) {
            timeOfDay = "afternoon"
        } else {
            timeOfDay = "night"
        }
        return (
            <h1>Good {timeOfDay} to you, sir or madam!</h1>
        )
    }
}
class App extends React.Component{
    constructor(){
        super()
        this.state={
            answer:"yes,perro"
        }
    }
    render(){
        return(
            <div>
                <h1>Is state important to know?{this.state.a}</h1>
            </div>
        )
    }
}*/

// Challenge:
// Given an incomplete class-based component without a constructor, 
// add a constructor and initialize state to fix the broken component.
class App extends React.Component{
    constructor( ){
        super()
        this.state={
            name:"José",
            age:"16"
        }
    }
    render() {
        return(
              <div>
                  <h1>{this.state.name}</h1>
                  <h3>{this.state.age}</h3>
              </div>
        )
    }
}

export default App
