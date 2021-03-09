import React from "react"

//props can be named different

function ContactCard(props) {
    //{} change to jsx to JavaScript
    // call props.  (and the things you want to call)
    console.log(props)
    return(
    
        <div className="contact-card">
            <img src={props.contact.imgUrl}/>   
            <h3>{props.contact.name}</h3>
            <p>{props.contact.phone}</p>
            <p>{props.contact.email}</p>
        </div>

        /*Seens we are receiving  a single property with all the values inside, so we need to change the code to the code above
        <div className="contact-card">

            <img src={props.imgUrl}/>   
            <h3>{props.name}</h3>
            <p>{props.phone}</p>
            <p>{props.email}</p>
        </div>*/
    )
}
export default ContactCard