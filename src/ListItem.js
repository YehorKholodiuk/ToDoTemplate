import React from 'react';

const ListItem = (props) => {
    return (
        <div>
            {props.task.title}
            <button disabled={props.index === 0} onClick={() => props.moveUp(props.task.id)}><span>&#8593;</span></button>
            <button><span>&#8595;</span></button>
        </div>
    );
};

export default ListItem;
