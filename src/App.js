import React, { useState } from 'react';
import './App.css';

import TodoListSidebar from './components/SideBar/TodoListSidebar';
import Tasks from './components/Tasks/Tasks';
import NewTaskForm from './components/NewTask/NewTaskForm';


function App() {
  const [todoList, setTodoList] = useState([
    {
      todoItemId: 1,
      title: 'Create Item1',
      description: '',
      done: false,
      dueDate: '2021-04-30'
    },
    {
      todoItemId: 2,
      title: 'Create Item2',
      description: '',
      done: true,
      dueDate: '2021-04-30'
    },
    {
      todoItemId: 3,
      title: 'Create Item3',
      description: '',
      done: false,
      dueDate: '2021-04-30'
    },
    {
      todoItemId: 4,
      title: 'Create Item4',
      description: '',
      done: false,
      dueDate: '2021-04-30'
    }
  ])


  function addNewTask(task) {
    setTodoList([...todoList, task])
  }

  function removeTask(id) {
    const todoItems = todoList.filter(item => item.todoItemId !== id)
    setTodoList(todoItems)
  }

  function changeDoneTask(task) {
    const todoItem = todoList.findIndex(item => item.todoItemId === task.todoItemId)
    const newTodoList = todoList.slice()
    newTodoList.splice(todoItem, 1, task);
    setTodoList(newTodoList)
    console.log(todoList)
  }

  return (
    <div className="todo_list">
      <TodoListSidebar />
      <Tasks todoList={todoList} deleteItem={removeTask} onChange={changeDoneTask} />
      <NewTaskForm onSubmit={addNewTask} />
    </div>
  );
}

export default App;