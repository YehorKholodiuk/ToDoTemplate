import React, {useState} from 'react';

const AddToDo = (props) => {
    const [inputTask, setInputTask] = useState('')
    function saveButtonHandler (){
        props.addNewTask(inputTask)
        props.toggleAddTask()
    }
    return (
        <div>
            {inputTask}
            <input type="text" placeholder="type here" value={inputTask}
            onChange={(event) => setInputTask(event.target.value)}
            />
            <button onClick={saveButtonHandler}>Save</button>
            <button onClick={props.toggleAddTask}>Cancel</button>
        </div>
    );
};

export default AddToDo;
