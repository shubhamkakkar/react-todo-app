import React from 'react';

function TodoItem(props) {
    const completedItem = {
        textDecoration: "line-through",
        fontStyle: "italic",
        color: "#cdcdcd"
    }
    return (
        <div className="todo-item">
            <input type="checkbox"
              checked={props.item.completed}
              onChange={()=>{props.handleChange(props.item.id)}}
            />
            <p style={props.item.completed ? completedItem : null}>
              {props.item.text}
            </p>
        </div>
    )
}

export default TodoItem;
