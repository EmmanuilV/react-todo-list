import React from 'react'
import Task from './Task';


const Tasks = (props) =>{
    return (
        <div className="main">
            <h2>Tasks</h2>
            <div className='tasks'>
                { props.todoList.map((t, i) => <Task key={i} todoItem={t} deleteItem={props.deleteItem} onChange={props.onChange}/>) }
            </div>
        </div>
    )
}

export default Tasks;