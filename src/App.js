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
  function moveUp(id) {
    const newList = [...list]
       const currentIndex = list.indexOf(newList.find(el => el.id === id))
    console.log(currentIndex)

    const currentTask = newList[currentIndex]
    newList[currentIndex] = newList[currentIndex - 1]
    newList[currentIndex-1] = currentTask
    setList(newList)
  }
  return (
    <div className="App">
<ToDoList list={list} addNewTask={addNewTask} moveUp={moveUp}/>
    </div>
  );
}

export default App;
