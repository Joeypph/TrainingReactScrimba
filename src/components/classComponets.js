//import TodoItem from "./components/TodoItem"
//import todosData from "./todosData"

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
}

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
}*/


// Given a stateless functional component, add state to it
// state should have a property called `isLoggedIn` which is a boolean
// (true if logged in, false if not)
// Then, give your best shot at rendering the word "in" if the user is logged in
// or "out" if the user is logged out.

/*class App extends Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: true
        }
    }
    render() {
        let wordDisplay
        if (this.state.isLoggedIn){
            wordDisplay="in"
        }else{
            wordDisplay="out"
        }
        return (
            <div>
                <h1>You are currently logged {wordDisplay}</h1>
            </div>
        )
    }
}*/
/*class App extends Component {
    constructor(){
        super()
        this.state={
            todos:todosData
        }
    }
        render(){
            const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item}/>)
            return (
                <div className="todo-list">
                    {todoItems}
                </div>
        )   
    }
}*/
/*
function handleClick() {
    console.log("I was clicked")
    
}
function App() {
    return(
        <div>
            <img onMouseOver ={()=>console.log("Im hovering")} src="https://www.fillmurray.com/200/100"/>
            <br />
            <br />
            <button onClick={handleClick}>Click me</button>
    </div>
    )
}*/

/*class App extends React.Component{
    constructor(){
        super()
        this.state={
            count: 0,
            color: " "
        }
        this.Increment= this.Increment.bind(this)
        this.Decrement= this.Decrement.bind(this)
        this.setCounter= this.setCounter.bind(this)

    }
    Increment(){
        this.setState(prevState=>{
            return{
                count: prevState.count + 1
            }
        })
    }
    Decrement(){
        this.setState(prevState=>{
            return{
                count: prevState.count * 2
            }
        })
    }
    setCounter(){
        this.setState(prevState=>{
            return{
                count: prevState.count = 0
            }
        })
    }
    //it could be easy to  color: randmColor() to every state,but what if we have more tha 1 state? thats when lifecyles saved us, cause we don´t need to c/p that
    //line to every state,you just do it ones!!
    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.count) {
            const newColor = randomColor()
            this.setState({color: newColor})
        }
    }
    render() {
        return(
            <div>
                <div>
                    <h1 style={{color: this.state.color}}>{this.state.count}</h1>
                </div>
                    <button onClick={this.Increment}>Change by 1!</button>
                <div>
                    <button onClick={this.Decrement}>Change times 2!</button>
                </div>
                <div >
                    <button onClick={this.setCounter}>Set to 0 the counter </button>               
                </div>
            </div>
        )
    }
}*/

/*class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ... todo,completed: !todo.completed
                    }
                }
                return todo
               
            })
            return {
                todos: updatedTodos
            }
          
        })
    }
    
    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
        
        return (
            <div className="todo-list">
                {todoItems}
            </div>
        )    
    }
}*/

/*class App extends React.Component{
    constructor(){
        super()
        this.state={
            isLoading:true
        }
        
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                isLoading:false
            })
        },1500)
    }
    render(){
        return(
            <div>
                {this.state.isLoading ?<h1>Loading...</h1>: <Conditional/>}
            </div>
        )
    }    
}*/
/*class App extends React.Component {
    constructor() {
        super()
        this.state = {
            unreadMessages: ["a"]
        }
    }
    // &&
    // false && false
    render() {
        return (
            <div>
                {
                    this.state.unreadMessages.length > 0 && 
                    <h2>You have {this.state.unreadMessages.length} unread messages!</h2>
                }
            </div>
        )
    }
}*/

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

/*class App extends React.Component{
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
}*/
/*class App extends React.Component{
    constructor(){
        super()
        this.state={
            loading: false,
            character:{}
        }

    }
    componentDidMount(){
        this.setState({loading: true})
        //use fetch (global function)
        fetch("https://swapi.dev/api/people/1")
        //resolve the promise}
        .then(response =>
            response.json())
        .then(data =>{
            this.setState({
                character: data,
                loading:false
            })
        })
    }
    render(){
        const text = this.state.loading ? "loading..." : this.state.character.name
        return(
            <div>
                <p>{text}</p>
            </div>
        )
    }
}*/

/*import TodoItem from "./components/TodoItem"
import todosData from "./todosData"

import { render } from '@testing-library/react';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ... todo,completed: !todo.completed
                    }
                }
                return todo
               
            })
            return {
                todos: updatedTodos
            }
          
        })
    }
    
    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
        
        return (
            <div className="todo-list">
                {todoItems}
            </div>
        )    
    }
}*/