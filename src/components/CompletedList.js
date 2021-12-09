import React from 'react'

import CompletedItem from './CompletedItem'
import './CompletedList.css'

export default function CompletedList(props) {
    return (
        <div className={"CompletedList"}>
            <header className="CompletedList__Header">
                <h2 className="CompletedList__Heading">Completed Items </h2>
            </header>
            <div className="CompletedList__Body">
                <ul>
                {props.completedItems.map(item => {
                return <CompletedItem key={item.id} item={item} reinstateItem={props.reinstateItem}/>
                })}
                </ul>
            </div>

            </div>
    )
}