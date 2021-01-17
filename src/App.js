// Introduction to React
// Practice Problem: Week 1

// 1. What is the significance of Virtual DOM? How can Virtual DOM make a page more performant than original DOM? 
// Ans: Virtual DOM is important for optimizing performance of a page. It can make a page more performant by keeping track of
//      the origional DOM and the new DOM, and only rendering the elements/nodes in the original DOM which are changed.

// 2. How JSX is different from HTML? Explain with examples.
// Ans: JSX is an extension of JavaScript. It looks similar to HTML, but allows JavaScript code to be included in the HTML elements. 

// 3. The setState() method, is it sync or async? In either case, defend your answer why the setState() operates as it does.
//  Ans: The setState() method is async, because React may batch multiple setState() calls into a single update for performance. 

// 4.Using React, create a simple counter. It would have one “Increment” and one “Decrement” button. 
// There should be an input field named “Offset”. If Offset = 2, counter will be incremented/decremented by 2. 
// If Offset = 5, counter will increment/decrement by 5. 

import React, { Component } from 'react';
import classes from './App.css';
import Counter from './Counter/Counter';
import ToDoList from './ToDoList/ToDoList';
import Wallet from './Wallet/Wallet';
import Form from './Form/Form';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <header className={classes.App_header}>
          <h1 className={classes.App_title}>Practice Problems</h1>
        </header>
        <Form/>
        
        <Counter />

        <ToDoList />

        <Wallet/>
      </div>
    );
  }
}

export default App;
