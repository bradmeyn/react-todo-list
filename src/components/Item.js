import React, {useState} from 'react'
import './EditItem'
import  EditItem  from './EditItem'
import './Item.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircle } from '@fortawesome/free-solid-svg-icons'
// import { faCheck as falCheck } from '@fortawesome/free-solid-svg-icons'
import  {faCheck as falCheck, faEdit as falEdit, faTrashAlt as falTrashAlt, faTimes as falTimes} from '@fortawesome/pro-light-svg-icons';


export default function Item(props) {
    const [editView, setEditView] = useState(false);

    const handleRemove = e => {
        props.removeItem(props.item.id);
        }

    const toggleView = () => {
        setEditView(!editView)
        }

    const editMode = () => {
        toggleView();     
        }
                
    const handleComplete = () => {
        props.completeItem(props.item)
        }


        const itemView = !editView ?<div className="Item"><FontAwesomeIcon className="Item__Icon" icon={faCircle} size="sm" />{props.item.detail}</div> : <EditItem item={props.item} editMode={editMode} editItem={props.editItem}/>;
        const editBtn = !editView ? <button onClick={toggleView} className="Item__Button Item__Button--Edit"><FontAwesomeIcon icon={falEdit} size="lg"/></button>: <button style={{backgroundColor: "lightPink"}} onClick={toggleView} className="Item__Button Item__Button--Edit"><FontAwesomeIcon icon={falTimes} size="lg"/></button>
    return (
        <div className="Item__Container">
            <div className="Item__Button-Container">
                <button onClick={handleComplete} className="Item__Button Item__Button--Complete"><FontAwesomeIcon icon={falCheck} size="lg" /></button>
            </div>
            {itemView}
            <div className="Item__Buttons-Container">
                {editBtn}
                <button onClick={handleRemove} className="Item__Button Item__Button--Delete"><FontAwesomeIcon icon={falTrashAlt} size="lg"/></button>  
            </div>
        </div>
    )
}
