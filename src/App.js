import './App.css';

import React from "react"
import randomColor from "randomcolor"



class App extends React.Component{
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
}
export default App
