import React from 'react';

const ListItem = (props) => {
    return (
        <div>
            {props.task.title}
        </div>
    );
};

export default ListItem;
