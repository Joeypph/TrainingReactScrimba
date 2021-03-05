import React from "react"

function TodoItem(){
    
    const stylediv={
        background:"#FFC0CB",

    }
    return(
        <div>
            <div style={stylediv} className="todo-item">
                <input type="checkbox" />
                <p className="myparaf">Placeholder text here</p>
            </div>
            
            <div style={stylediv} className="todo-item">
                <input type="checkbox" />
                <p className="myparaf" >Placeholder text here</p>            
            </div>
            
            <div style={stylediv} className="todo-item">
                <input type="checkbox" />
                <p className="myparaf">Placeholder text here</p>           
            </div>

            
            <div style={stylediv} className="todo-item">
                <input type="checkbox" />
                <p className="myparaf">Placeholder text here</p>            
            </div>
        </div>
    )
}
export default TodoItem