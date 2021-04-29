import React, {Component} from 'react';
import './App.css';

import Header from './components/Header';
import Form from './components/Form';

todoList = [
  {
    title: '',
    description: '',
    done: 'false',
    dueDate: ''
  }, 
  {
    title: '',
    description: '',
    done: 'false',
    dueDate: ''
  }, 
  {
    title: '',
    description: '',
    done: 'false',
    dueDate: ''
  }, 
  {
    title: '',
    description: '',
    done: 'false',
    dueDate: ''
  }
]
function App() {
  return (
    <div id="todo_list">
      <Header />
        <main>

        </main>
      <Form />
    </div>
  );
}

export default App;
