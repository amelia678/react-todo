import React from 'react';

const List = (props) => {
    return (
    <ul>
        {props.items.map( (item, index) => {
            return (
            <li 
            key={index}
            onClick={() => {
                console.log(`yeah you clicked ${index}`)
                props.handleClick(index);
            }}
            >
            {item}
            </li>
            );
        })}
    </ul>
    
    );
};


export default List;