import React from 'react'


const Task = (props) => {
    const todoItem = props.todoItem
    const deleteItem = props.deleteItem

    function change() {
        todoItem.done = !todoItem.done
        console.log(todoItem)
    }


    function changeTitle(done) {
        if (done) {
            return { className: "task-complete" }
        }
    }

    function checkDueDate(dueDate) {
        const now = new Date(new Date().toDateString().split('T'));
        const date = new Date(dueDate);
        if (date < now) {
            return {className : "over-due-date"}
        }
    }
    
    return (
        <section >
            <button onClick={() => deleteItem(todoItem.todoItemId)}>x</button>
            <div className="title">
                <input type="checkbox" checked={todoItem.done} onChange={change} />
                <h3 {...changeTitle(todoItem.done)}>{todoItem.title}</h3>
            </div>
            <div className="info">
                <p>{todoItem.description && (<p>{todoItem.description}</p>)}</p>
                <p {...checkDueDate(todoItem.dueDate)}>{todoItem.dueDate}</p>
            </div>
        </section>
    )
}

export default Task;