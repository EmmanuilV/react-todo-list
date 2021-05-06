import React from 'react'
import Dashboard from './Dashboard'

const TodoListSidebar = () => {
    return (
        <aside>
            <h1>TodoList</h1>
            <div className="view-buttons">
                <button className="all-task on">All tasks</button>
                <button className="unfinished-task">Unfinished tasks</button>
            </div>
            <Dashboard />
        </aside>
    )
}
export default TodoListSidebar