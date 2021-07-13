import './App.css';
//import User from './User.js';
import Header from './Mycomponents/Header'
import { Todos } from "./Mycomponents/Todos";
import { Footer } from "./Mycomponents/Footer";

function App() {

  const onDelete = () => {
    console.log("Clicked on onDelete")
  }

  let todos = [
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
  ]
  return (
    <>
      <Header title = "My Todos List" name = "Rahul" searchbar = {false}/>
      <Todos todos = {todos} onDelete = {onDelete}/>
      <Footer/>
    </>
  );
}

export default App;
