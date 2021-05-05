import React, { Component } from 'react';
import './App.css';

import TodoListSidebar from './components/TodoListSidebar';
import Tasks from './components/Tasks';
import NewTaskForm from './components/NewTaskForm';
// import NewTaskForm from './components/NewTaskForm';



class App extends Component {
  state ={
    todoList: [
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
        done: false,
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
    ]
  }
  
 addNewTask = (task) => {
    this.setState({
      todoList: [
        ...this.state.todoList, 
        {
          ...task, 
          todoItemId: this.getLastId(this.state.todoList)
        }
      ]
    })
    console.log('addNewTask', this.state.todoList);
  }
   
  getLastId = (todoList) => {
    let lastId;
    for (let i = 0; i < todoList.length; i++) {
      if (todoList.length > 0) {
        lastId = todoList[i].todoItemId;
        console.log("lastId: ", lastId);
        lastId++;

      }
    }
  }

  render() {
    return (
      <div id="todo_list">
        <TodoListSidebar />
        <Tasks todoList={this.state.todoList} />
        <NewTaskForm onSubmit={this.addNewTask}/>
      </div>
    );
  }
} 
export default App;