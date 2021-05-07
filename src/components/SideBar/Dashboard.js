import React, { useState, useEffect } from 'react'

const Dashboard = (props) => {
    const [taskLists, setTask] = useState([])
    useEffect(() => {
        fetch(`${props.endpoint}/lists`)
            .then(res => res.json())
            .then(setTask);
    }, [])


    return (
        <aside>
            <h1>TodoList</h1>
            <div className="dashboard">
                {
                   taskLists.map(l => <button {...props.onSelect(l.todoListId)} >{l.title}</button>)
                }
            </div>
        </aside>
    )
}
export default Dashboard