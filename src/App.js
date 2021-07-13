import './App.css';
//import User from './User.js';
import Header from './Mycomponents/Header'
import { Todos } from "./Mycomponents/Todos";
import { Footer } from "./Mycomponents/Footer";

function App() {
  return (
    <>
      <Header title = "My Todos List" name = "Rahul" searchbar = {false}/>
      <Todos/>
      <Footer/>
    </>
  );
}

export default App;
