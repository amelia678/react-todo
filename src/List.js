import React from 'react';

const List = (props) => {
    return (
    <ul>
        {props.items.map( (item, index) => {
            return <li key={index}>{item}</li>;
        })}
    </ul>
    );
};


export default List;