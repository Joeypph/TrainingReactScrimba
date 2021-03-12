import React from "react"

function Product(prop) {
    console.log(prop)
  return (
    <div className ="todo-list">
        <h1>Name:{prop.name}</h1>
        <h1>Price: {prop.price}</h1>
        <h1>Description: {prop.description}</h1>
        <break/>
        <hr/>
    </div>
  )
}

export default Product