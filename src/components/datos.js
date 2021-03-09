//All the things I have done
/*
import './App.css';

import React from "react"
import NavBar from "./components/NavBar"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"
import TodoItem from "./components/TodoItem"

function App(){
    const firstName = "Bob"
    const lastName = "Ziroll"
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

      <div className="todo-list">
        <TodoItem/>
      </div>
        //<h1>Hello {firstName + " " + lastName}!</h1>

        <div>
          <h1 style={luz}>Good {timeOfDay}!</h1>          
            <NavBar/>
            <MainContent />
            <Footer/>
        </div>
        
        <div>
            <input type="checkbox" name="chb1" />
            <p>First paragraph</p>
            <input type="checkbox" name="chb1" />
            <p>Second paragraph</p>
            <input type="checkbox" name="chb1" />
            <p>Third paragraph</p>
        </div>
    )
}
export default App*/


/*import './App.css';
import React from "react"
import NavBar from "./components/NavBar"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"
import TodoItem from "./components/TodoItem"
import ContactCard from "./components/ContactCard"

function App(){
    return(
      <div className="contacts">
        <ContactCard
        //{{}}  first {} javascript, inside{{ object itself}} 
            contact={{name: "Mr. Whiskerson", imgUrl: "http://placekitten.com/300/200",phone: "(212) 555-1234",email: "mr.whiskaz@catnap.meow"}}
           /*
           what if that components has more properties? We could pass an 
           object that is the entire contact y all the things allowing  get rid of all below
            name="Mr. Whiskerson" 
            imgUrl="http://placekitten.com/300/200" 
            phone="(212) 555-1234" 
            email="mr.whiskaz@catnap.meow" 
        />
        <ContactCard 
           contact={{name:"Fluffykins", imgUrl:"http://placekitten.com/400/200",phone:"(212) 555-2345" ,email:"fluff@me.com" }}
        />

        <ContactCard 
          contact={{name:"Destroyer" , imgUrl:"http://placekitten.com/400/300" ,phone:"(212) 555-3456" ,email:"ofworlds@yahoo.com"}}
        />
        
        <ContactCard
            contact={{name:"Felix", imgUrl:"http://placekitten.com/200/100",phone:"(212) 555-4567",email:"thecat@hotmail.com"}} 
        />
    </div>
    )
}
export default App*/
