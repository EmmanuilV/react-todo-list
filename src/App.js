import React, { useState, useEffect } from 'react';
import './App.css';
import Url from "./url"

import TodoListSidebar from './components/SideBar/TodoListSidebar';
import Tasks from './components/Tasks/Tasks';
import NewTaskForm from './components/NewTask/NewTaskForm';


function App() {
  const tasksEndpoint = `${Url}1/tasks`;
  const [todoList, setTodoList] = useState([]);
  useEffect(() => {
    fetch(`${tasksEndpoint}/all`)
      .then(res => res.json())
      .then(setTodoList);
  }, [])



  function removeTask(id) {
    const todoItems = todoList.filter(item => item.todoItemId !== id)
    setTodoList(todoItems)
  }

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
      <Tasks todoList={todoList} /* deleteItem={removeTask} selectedList={selectedList} onChange={changeDoneTask} */ />
      <NewTaskForm endpoint={tasksEndpoint} todoList={todoList} setTodoList={setTodoList}/>
    </div>

);
}

export default App;