import React, { useState, useEffect } from 'react';
import './App.css';
import Url from "./url"

import TodoListSidebar from './components/SideBar/TodoListSidebar';
import Tasks from './components/Tasks/Tasks';
import NewTaskForm from './components/NewTask/NewTaskForm';


function App() {
  const tasksEndpoint = `${Url}1/tasks`;
  const [todoList, setTaskLists] = useState([]);
  useEffect(() => {
    fetch(`${tasksEndpoint}/all`)
      .then(res => res.json())
      .then(setTaskLists);
  }, [])

  const addNewTask = useEffect((task) => {
    fetch(tasksEndpoint + '/item', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    })
      .then(response => response.json());
  }, [])

  // function removeTask(id) {
  //   const todoItems = todoList.filter(item => item.todoItemId !== id)
  //   setSelectedList(todoItems)
  // }

  // function changeDoneTask(task) {
  //   const todoIndex = todoList.findIndex(item => item.todoItemId === task.todoItemId)
  //   const newTodoList = todoList.slice()
  //   newTodoList.splice(todoIndex, 1, task);
  //   setSelectedList(newTodoList)
  //   console.log(todoList)
  // }

  return (
    <div className="todo_list">
      <TodoListSidebar />
      <Tasks todoList={todoList} /* selectedList={selectedList} deleteItem={removeTask} onChange={changeDoneTask} */ />
      <NewTaskForm onSubmit={addNewTask} />
    </div>

);
}

export default App;