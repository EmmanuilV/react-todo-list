import React from 'react'


export default (props) => {
    const todoItem = props.todoItem

    return (
        <section id={todoItem.todoItemId}>
            <button >X</button>
            <div class="title">
                <input type="checkbox" /* {todoItem.done ? 'checked' : ''}  onclick="completeTask(event.target)"*/ />
                <h3>{todoItem.title}</h3>
            </div>
            <div class="info">
                <p>{todoItem.description.lenght ? todoItem.description : ''}</p>
                <p /* {...checkDate(dueDate, done)} */>{todoItem.dueDate}</p>
            </div>
        </section>
    )
}

// export default Main