import React from 'react';

const List = (props) => {
    return (
    <ul>
        {props.items.map( item => {
            return (
            <li 
            key={item.id}
            onClick={ () => props.handleClick(item.id)}
            //  other option is anonymous function
            >
            {item.name}
            </li>
            );
        })}
    </ul>
    
    );
};


export default List;