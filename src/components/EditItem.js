import React, { Component } from 'react'
import './EditItem.css'



export class EditItem extends Component {
    constructor(props){
        super(props)
        this.state = {
            item: this.props.item.detail
         }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(e){
        e.preventDefault();
        let editedItem = {
            id: this.props.item.id, detail: this.state.item
        }
        console.log('edited item', editedItem);
        this.props.editItem(editedItem);
        this.props.editMode();
    }

    handleChange(e){
        this.setState({
            item: e.target.value
        })
    }
    
    render() {
        return (
            <form className="edit-form" onSubmit={this.handleSubmit}>
                <input
                    autoFocus
                    onChange={this.handleChange}
                    onBlur={this.props.editMode}
                    className="edit-item-input" 
                    value={this.state.item}></input> 
            </form>
        )
    }
}

