import React from 'react';

function TodoForm(props){
    return (
        <form onSubmit={props.onSubmit}>
                    <input 
                    value={props.term} 
                    onChange={props.onChange} 
                    placeholder="Enter Todo">
                    </input>
                    <button type="submit">add</button>
                </form>


    );

}


export default TodoForm;