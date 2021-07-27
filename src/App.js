import './App.css';
//import User from './User.js';
import Header from './Mycomponents/Header'
import { Todos } from "./Mycomponents/Todos";
import { Footer } from "./Mycomponents/Footer";
import React, { useState } from 'react';

function App() {

  const onDelete = (todo) => {
    console.log("Clicked on onDelete,  ", todo)

    setTodos(todos.filter((e) => {
      return e!==todo;
    }));
  }

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Eat Dinner",
      description: "Go and have dinner"
    },
    {
      sno: 2,
      title: "Sleep at 11 pm.",
      description: "Go and sleep"
    },
    {
      sno: 3,
      title: "wakeup early",
      description: "wake up early tomorrow."
    }
  ]);
  return (
    <>
      <Header title = "My Todos List" name = "Rahul" searchbar = {false}/>
      <Todos todos = {todos} onDelete = {onDelete}/>
      <Footer/>
    </>
  );
}

export default App;
