import React from 'react'
import NewTaskForm from './NewTaskForm';
import Task from './Task';


export default (props) =>{
    return (
        <div id="tasks">
            <h2>Tasks</h2>
            { props.todoList.map((t, i) => <Task key={i} todoItem={t}/>) }
            <NewTaskForm />
        </div>
    )
}
