import React, {useState} from 'react';

const AddToDo = (props) => {
    const [inputTask, setInputTask] = useState('')
    return (
        <div>
            {inputTask}
            <input type="text" placeholder="type here" value={inputTask}
            onChange={(event) => setInputTask(event.target.value)}
            />
            <button onClick={() => props.addNewTask(inputTask)}>Save</button>
            <button onClick={props.toggleAddTask}>Cancel</button>
        </div>
    );
};

export default AddToDo;
