import React, { Component } from 'react'
import './NewItem.css'

export class NewItem extends Component {
    constructor(props){
        super(props)
        this.state = {
           newItem: ''
        }
        // this.addItem = this.addItem.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(e){
        e.preventDefault();
        this.props.addItem(this.state.newItem);
        this.setState({
            newItem: ""
        })
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render() {

        return (
            <form onSubmit={this.handleSubmit}>
            <div className="new-item-container">
                
                    <input name="newItem" className="new-item-input" placeholder="Add new item.." value={this.state.newItem} onChange={this.handleChange}></input>
                    <button className="add" >+</button>
               
            </div>
            </form>
        )
    }
}
