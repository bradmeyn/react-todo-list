import React, {useState} from 'react'

import  EditItem  from './EditItem'
import './Item.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircle } from '@fortawesome/free-solid-svg-icons'
import  {faCheck as falCheck, faEdit as falEdit, faTrashAlt as falTrashAlt, faTimes as falTimes} from '@fortawesome/pro-light-svg-icons';


export default function Item(props) {
    const [editView, setEditView] = useState(false);

    //function to permanently remove an item
    const handleRemove = () => {
        props.removeItem(props.item.id);
        }
    
    //function to switch item to edit mode
    const toggleView = () => {
        setEditView(!editView)
        }
    
    //function to update edit mode in edit mode
    const editMode = () => {
        toggleView();     
        }
    
    //function to move outstanding item to completed items list
    const handleComplete = () => {
        props.completeItem(props.item)
        }
        
    //change to EditItem component based on edit mode state
    const itemView = !editView ?<div className="Item"><FontAwesomeIcon className="Item__Icon" icon={faCircle} size="sm" />{props.item.detail}</div> : <EditItem item={props.item} editMode={editMode} editItem={props.editItem}/>;
    
    //change edit button if edit mode is active
    const editBtn = !editView ? <button onClick={toggleView} className="Item__Button Item__Button--Edit"><FontAwesomeIcon icon={falEdit} size="lg"/></button> : <button style={{backgroundColor: "lightPink"}} onClick={toggleView} className="Item__Button Item__Button--Edit Item__Button--Edit-Active"><FontAwesomeIcon icon={falTimes} size="lg"/></button>
    
    return (
        <li className="Item__Container" >
            {itemView}
            <div className="Item__Buttons-Container">
                <button onClick={handleComplete} className={editView ? "Hidden" : "Item__Button Item__Button--Complete"}><FontAwesomeIcon icon={falCheck} size="lg" /></button>
                <button onClick={handleRemove} className={editView ? "Hidden" : "Item__Button Item__Button--Delete"}><FontAwesomeIcon icon={falTrashAlt} size="lg"/></button> 
                {editBtn}
            </div>
        </li>
    )
}
