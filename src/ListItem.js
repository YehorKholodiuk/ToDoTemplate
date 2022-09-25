import React from 'react';

const ListItem = (props) => {
    return (
        <div>
            {props.task.title}
            <button disabled={props.index === 0} onClick={() => props.moveUp(props.task.id)}><span>&#8593;</span></button>
            <button disabled={props.index === props.list.length - 1 } onClick={() => props.moveDown(props.task.id)} ><span>&#8595;</span></button>
            <button onClick={() => props.deleteTask(props.task.id)}>Delete</button>
        </div>
    );
};

export default ListItem;
