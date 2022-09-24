import logo from './logo.svg';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import {useState} from "react";
import ToDoList from "./ToDoList";

function App() {
  const [list,setList] = useState ([
    {
      title:'Learn React',
      id: uuidv4(),
      isDone: false,
    },
    {
      title:'Learn JS',
      id: uuidv4(),
      isDone: false,
    },
    {
      title:'Learn FrontEnd ',
      id: uuidv4(),
      isDone: false,
    }
  ])

  function addNewTask(title){
    setList(
        [...list,{
          id:uuidv4(),
          title,
          isDone:false,
        }]
    )
  }
  return (
    <div className="App">
<ToDoList list={list} addNewTask={addNewTask}/>
    </div>
  );
}

export default App;
