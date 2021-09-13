import React, { Component } from 'react'
import './EditItem'
import { EditItem } from './EditItem'
import './Item.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit as farEdit, faTrashAlt as farTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { faCheck as fasCheck } from '@fortawesome/free-solid-svg-icons'

export class Item extends Component {
    constructor(props){
        super(props)
        this.state = {
            editView: false
        }
        this.handleRemove = this.handleRemove.bind(this);
        this.toggleView = this.toggleView.bind(this);
        this.editMode = this.editMode.bind(this);
    }
    handleRemove(e){
        this.props.removeItem(this.props.item.id);
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

        const itemView = !this.state.editView ?<div className="item">{this.props.item.detail}</div> : <EditItem item={this.props.item} editMode={this.editMode} editItem={this.props.editItem}/>;
        return (
            <div className="item-container">
               <div className="complete-button-container"> 
               <button onClick={this.editMode} className="button button-complete"><FontAwesomeIcon icon={fasCheck} size="lg" />
               </button>
                </div>
                {itemView}
                <div className="buttons">
                    <button onClick={this.editMode} className="button button-edit"><FontAwesomeIcon icon={farEdit} size="lg" /></button>
                    <button onClick={this.handleRemove} className="button button-delete"><FontAwesomeIcon icon={farTrashAlt} size="lg"/></button>
                </div>
            </div>
        )
    }
}



