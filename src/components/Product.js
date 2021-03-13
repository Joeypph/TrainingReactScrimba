import React from "react"

function Product(prop) {
    console.log(prop)
  return (
    <div className ="todo-list">
            <h2>{prop.product.name}</h2>
            <p>{prop.product.price.toLocaleString("en-US", { style: "currency", currency: "USD" })} 
            - {prop.product.description}</p>
        <break/>
        <hr/>
    </div>
  )
}

export default Product