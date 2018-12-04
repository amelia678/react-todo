import React, {Component} from 'react';
import List from './List';
import TodoForm from './TodoForm';

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            term:'',
            items: []
        }
    }    
render (){
        return(
            <div>
                <h1>ToDo App</h1>
                <TodoForm 
                    onSubmit={this._onSubmit}
                    term={this.state.term}
                    onChange= {(event) => this._onChange(event.target.value)}
                />
                
                <div>
                    <List 
                    items ={this.state.items}
                    handleClick={this._deleteTodo}
                     />
                </div>
            </div>
        )
    }

    _deleteTodo = indexToDelete => {
        let itemsToKeep = [];
        // keep all the items except the one at 'index'
        this.state.items.forEach((item, index) => {
            if (index === indexToDelete) {
                console.log(`${index}: i don't know her`);
            } else {
                console.log(`${index}: keep it`)
                itemsToKeep.push(item);
            }
        });
        this.setState({
            items: itemsToKeep
        })
    }

   _onChange = userInput => {
       this.setState({
           term: userInput
       });
   };

   _onSubmit = (event) => {
    //    puts on brakes
    event.preventDefault();
    //    console.log('submitted!')
    this.setState({
        term: "",
        items: [...this.state.items, this.state.term]
    })
   }
}

export default TodoList;