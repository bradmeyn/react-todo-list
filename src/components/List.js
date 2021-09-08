import React, { Component } from 'react'
import {Item} from './Item'
import './List.css'

export class List extends Component {
    constructor(props){
        super(props)
        this.state = {
            items: [
                {id: 1, detail: 'Purchase groceries'},
                {id: 2, detail: 'Go to the gym'},
                {id: 3, detail: 'Walk the dog'}
            ]
        }
        this.remove = this.remove.bind(this);
    }


    remove(removedItem){
        console.log(removedItem);
        this.setState(oldState => ({
            items: oldState.items.filter((item) => item.detail !== removedItem)
        }))
    }



    render() {

        return (
            <div className="list">
                <div className="new-item-container">
                    <input className="new-item-input" placeholder="Add new item.."></input>
                    <button className="add" >+</button>
                </div>
                <header className="header">
                    {this.props.listName}
                </header>
                {this.state.items.map(item => {
                    return <Item key={item.id} detail={item.detail} remove={this.remove}/>
                })}
                
            </div>
        )
    }
}
