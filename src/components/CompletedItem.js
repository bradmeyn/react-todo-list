import React from 'react'

import './CompletedItem.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  {faCheck as falCheck, faTrashAlt as falTrashAlt} from '@fortawesome/pro-light-svg-icons';

export default function CompletedItem(props) {

    const handleReinstatement = () => {
        props.reinstateItem(props.item)
      }

      const handleRemove = e => {
        props.removeCompletedItem(props.item.id);
        }

    return (
        <li className="CompletedItem__Container">
           <div className="CompletedItem"onClick={handleReinstatement}>
                <FontAwesomeIcon className={'CompletedItem__Icon'} icon={falCheck} size={'3x'} color={'green'}/>
                <div className="CompletedItem__Details">
                    <button className="CompletedItem__Item">{props.item.detail}</button>
                    <small className="CompletedItem__Date">{props.item.completedDate}</small>
                </div>
           </div>

            <button className="CompletedItem__Delete-Button" onClick={handleRemove}><FontAwesomeIcon icon={falTrashAlt} size="lg"/></button>
        </li>
    )
}
