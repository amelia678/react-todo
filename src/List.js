import React from 'react';

const List = (props) => {
    return (
    <ul>
        {props.items.map( (item, index) => {
            return (
            <li 
            key={index}
            onClick={ () => props.handleClick(index)}
            //  other option is anonymous function
            >
            {item}
            </li>
            );
        })}
    </ul>
    
    );
};


export default List;