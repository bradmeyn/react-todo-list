import React from 'react'

import CompletedItem from './CompletedItem'
import './CompletedList.css'

export default function CompletedList(props) {

    
    return (

        <div className={"CompletedList"}>
            <header className="CompletedList__Header">
                Completed Items
            </header>
            <div className="CompletedList__Body">
            <ul>
        {props.completedItems.map(item => {
        return <CompletedItem 
        key={item.id} item={item} 
        completedDate={item.completedDate} 
        reinstateItem={props.reinstateItem}
        removeCompletedItem={props.removeCompletedItem}
        />
        })}
    </ul>
            </div>
            
        </div>
    
    )
}
