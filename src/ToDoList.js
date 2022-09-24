import React, {useState} from 'react';
import ListItem from "./ListItem";
import AddToDo from "./AddToDo";

const ToDoList = (props) => {
    const [openAddInput, setOpenAddInput] = useState(false)
    function toggleAddTask(){
        setOpenAddInput(!openAddInput)
    }
    return (
        <div>
            <h1>ToDoList</h1>
            {!openAddInput && <button onClick={toggleAddTask}>Add New Task</button>}
            {openAddInput && <AddToDo toggleAddTask={toggleAddTask} addNewTask={props.addNewTask}/>}
            {props.list.map(el => <ListItem key={el.id} task={el}/>)}
        </div>
    );
};

export default ToDoList;
