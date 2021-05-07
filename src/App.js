import React, { useState, useEffect } from 'react';
import './App.css';

import Tasks from './components/Tasks/Tasks';
import NewTaskForm from './components/NewTask/NewTaskForm';
import Dashboard from './components/SideBar/Dashboard';


function App() {
  const [todoList, setTodoList] = useState([]);
  const [currentlist, setCurrentlist] = useState(1);

  const tasksEndpoint = `http://127.0.0.1:5000/api/tasks`
  useEffect(() => {
    fetch(`${tasksEndpoint}`)
      .then(res => res.json())
      .then(setTodoList);
  }, [])



  return (
    <div className="todo_list">
      <Dashboard endpoint={tasksEndpoint} onSelect={setCurrentlist}/>
      <Tasks todoList={todoList} currentList={currentlist}/* deleteItem={removeTask} selectedList={selectedList} onChange={changeDoneTask} */ />
      <NewTaskForm endpoint={tasksEndpoint} todoList={todoList} setTodoList={setTodoList}/>
    </div>

);
}

export default App;