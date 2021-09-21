import React, { Component } from 'react'
import {Item} from './Item'
import {NewItem} from './NewItem'
import {CompletedItem} from './CompletedItem'
import './List.css'
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronRight } from '@fortawesome/free-solid-svg-icons'

export class List extends Component {
    constructor(props){
        super(props)
        this.state = {
            items: [
                {id: uuidv4(), detail: 'Go to the gym'},
                {id: uuidv4(), detail: 'Purchase groceries'},
                {id: uuidv4(), detail: 'Walk the dog'}
            ],
            completed: [
                {id: uuidv4(), detail: 'Read a chapter'},
                {id: uuidv4(), detail: 'Hang clothes on the line'},
                {id: uuidv4(), detail: 'Clean the kitchen'}
            ],
            completedView: true,
            completedCount: 1
        }
        this.removeItem = this.removeItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.editItem = this.editItem.bind(this)
        this.completeItem = this.completeItem.bind(this);
        this.toggleCompleteView = this.toggleCompleteView.bind(this);
        this.reinstateItem = this.reinstateItem.bind(this);
    }

    addItem(newTask){
        let item = {id: uuidv4(), detail: newTask}
         this.setState(oldState => ({     
             items: [...oldState.items, item]
         }))
     }

     completeItem(completedItem){
        console.log("complete", completedItem)
       //remove item from main list
       this.setState(oldState => ({
           items: oldState.items.filter((item) => item.id !== completedItem.id)
       }))

       //add to completed list
       this.setState(oldState => ({     
           completed: [...oldState.completed, completedItem]
       }))
    }

     editItem(editedItem){
        const newList = this.state.items.map((item) => {
           if(item.id === editedItem.id){
               return {...item, detail: editedItem.detail};
           }
           return item;
        }
        );
        
        this.setState({
            items: newList
        })
    }

    removeItem(removedItemId){
        this.setState(oldState => ({
            items: oldState.items.filter((item) => item.id !== removedItemId)
        }))
    }

    reinstateItem(reinstatedItem){
        this.setState(oldState => ({
            completed: oldState.completed.filter((item) => item.id !== reinstatedItem.id)
        }))

        this.setState(oldState => ({     
            items: [...oldState.items, reinstatedItem]
        }))

    }

     toggleCompleteView(){
        this.setState(prevState => (
            {completedView: !prevState.completedView }
            ))
     }

    render() {
        
        return (
            <div className="list-container">
                <NewItem addItem={this.addItem}/>

                <div className="todo-list">
                    <header className="todo-list-header">
                        {this.props.listName}
                    </header>
                    {this.state.items.map(item => {
                        return <Item key={item.id} item={item} removeItem={this.removeItem} editItem={this.editItem} completeItem={this.completeItem}/>
                    })}

                </div>
                
                
                <div className={this.state.completedView? "completed-list active" : "completed-list"}>
                    <header className="completed-list-header">
                        <button onClick={this.toggleCompleteView}>
                            <h2 className="completed-heading">Completed </h2>
                            <span className="state-count">{this.state.completedCount}</span>
                            <FontAwesomeIcon icon={faChevronRight} size="xl" color="#708090" rotation={this.state.completedView ? 90 : 0 } />
                            </button>
                    </header>
                    <div className="completed-list-body">
                        <ul>
                        {this.state.completed.map(item => {
                        return <CompletedItem key={item.id} item={item} reinstateItem={this.reinstateItem}/>
                        })}
                        </ul>
                    </div>

                </div>
            </div>


        )
    }
}
