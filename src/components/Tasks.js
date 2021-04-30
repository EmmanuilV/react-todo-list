import React from 'react'
import Task from './Task';


const Tasks = (props) =>{
    return (
        <div id="tasks">
            <h2>Tasks</h2>
            { props.todoList.map((t, i) => <Task key={i} todoItem={t}/>) }
        </div>
    )
}

export default Tasks;