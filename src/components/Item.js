import React, { Component } from 'react'
import './EditItem'
import { EditItem } from './EditItem'
import './Item.css'


export class Item extends Component {
    constructor(props){
        super(props)
        this.state = {
            editView: false
        }
        this.handleRemoveItem = this.handleRemove.bind(this);
        this.toggleView = this.toggleView.bind(this);
        this.editMode = this.editMode.bind(this);
    }
    handleRemove(e){
        this.props.removeItem(this.props.detail);
    }

    toggleView(){
        this.setState(prevState => (
            {editView: !prevState.editView }
            ))
    }

    editMode(){
        this.toggleView();
        
    }
    
    render() {

        const itemView = !this.state.editView ?<div className="item">{this.props.detail}</div> : <EditItem detail={this.props.detail}/>;
        return (
            <div className="item-container">
                {itemView}
                <div className="buttons">
                    <button onClick={this.editMode} className="button button-edit">Edit</button>
                    <button onClick={this.handleRemove} className="button button-delete">Delete</button>
                </div>
            </div>
        )
    }
}



