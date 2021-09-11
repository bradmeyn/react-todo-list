import React, { Component } from 'react'
import {Item} from './Item'
import {NewItem} from './NewItem'
import './List.css'
import { v4 as uuidv4 } from 'uuid';

export class List extends Component {
    constructor(props){
        super(props)
        this.state = {
            items: [
                {id: uuidv4(), detail: 'Go to the gym'},
                {id: uuidv4(), detail: 'Purchase groceries'},
                {id: uuidv4(), detail: 'Walk the dog'}
            ]
        }
        this.removeItem = this.removeItem.bind(this);
        this.addItem = this.addItem.bind(this);
    }


    removeItem(removedItem){
        this.setState(oldState => ({
            items: oldState.items.filter((item) => item.detail !== removedItem)
        }))
    }

   addItem(newTask){
       let item = {id: uuidv4(), detail: newTask}
        this.setState(oldState => ({     
            items: [...oldState.items, item]
        }))
    }



    render() {

        return (
            <div className="list">
                <NewItem addItem={this.addItem}/>
                <header className="header">
                    {this.props.listName}
                </header>
                {this.state.items.map(item => {
                    return <Item key={item.id} detail={item.detail} removeItem={this.removeItem}/>
                })}
                
            </div>
        )
    }
}
