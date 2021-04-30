import React from 'react'

const TodoListSidebar = ( ) => {
    return (
        <aside>
            <h1>TodoList</h1>
            <div className="buttons">
                <button className="all-task on" onclick="showAllTasks(event.target)">All tasks</button>
                <button className="unfinished-task" onclick="hideTasks(event.target)">Unfinished tasks</button>
            </div>
            
        </aside>
    )
}
export default TodoListSidebar