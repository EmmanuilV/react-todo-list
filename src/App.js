import React, { Component } from 'react';
import './App.css';

import TodoListSidebar from './components/TodoListSidebar';
import Tasks from './components/Tasks';
import NewTaskForm from './components/NewTaskForm';
// import NewTaskForm from './components/NewTaskForm';



class App extends Component {
  state = {
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
      todoList: [...this.state.todoList, task]
    })
    console.log('addNewTask', this.state.todoList);
  }

  removeTask = (id) => {
    const todoItems = this.state.todoList.filter(item => item.todoItemId !== id)
    this.setState({ todoList: todoItems })
  }

  render() {
    return (
      <div className="todo_list">
        <TodoListSidebar />
        <Tasks todoList={this.state.todoList} deleteItem={this.removeTask} />
        <NewTaskForm onSubmit={this.addNewTask} />
      </div>
    );
  }
}
export default App;