import React, { Component } from 'react';
import './App.css';

import TodoListSidebar from './components/TodoListSidebar';
import Task from './components/Task';
import Tasks from './components/Tasks';


class App extends Component {
  todoList = [
    {
      todoItemId: 1,
      title: 'Create Item1',
      description: '',
      done: false,
      dueDate: '30.04.2001'
    },
    {
      todoItemId: 2,
      title: 'Create Item2',
      description: '',
      done: false,
      dueDate: '30.04.2001'
    },
    {
      todoItemId: 3,
      title: 'Create Item3',
      description: '',
      done: false,
      dueDate: '30.04.2001'
    },
    {
      todoItemId: 4,
      title: 'Create Item4',
      description: '',
      done: false,
      dueDate: '30.04.2001'
    }
  ]

  render() {
    return (
      <div id="todo_list">
        <TodoListSidebar />
        <Tasks todoList={this.todoList} />
      </div>
    );
  }
}
export default App;