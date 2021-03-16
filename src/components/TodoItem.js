import React from "react"

function TodoItem(props){
    const stylediv={
        background:"#FFC0CB",
    }
    return(
         <div  className="todo-item">
            <input type="checkbox"  checked={props.item.completed}/>
            <p className="myparaf">{props.item.text}</p>
        </div>

    )
}
export default TodoItem