import React, { Component } from 'react'
import './EditItem.css'



export class EditItem extends Component {
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
     

    }
    
    render() {
        return (
            <form>
                <input autoFocus className="edit-item-input" placeholder={this.props.detail+'...'}></input> 
            </form>
        )
    }
}

