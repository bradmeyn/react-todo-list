import React, {useState} from 'react'

import Item from './Item'
import NewItem from'./NewItem'
import CompletedList from './CompletedList'
import './List.css'
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function List(props) {
    const [items, setItems] = useState([
        {id: uuidv4(), detail: 'Go to the gym'},
        {id: uuidv4(), detail: 'Purchase groceries'},
        {id: uuidv4(), detail: 'Walk the dog'}
    ]);
    const [completedItems, setCompleted] = useState([
        {id: uuidv4(), detail: 'Read a chapter'},
        {id: uuidv4(), detail: 'Hang clothes on the line'},
        {id: uuidv4(), detail: 'Clean the kitchen'}
    ]);

  const [completedView, setCompletedView] = useState(false);

    const addItem = newItem => {
        let item = {id: uuidv4(), detail: newItem};

        setItems([...items, item]);
     }

     const completeItem = completedItem => {

       //remove item from main list
        let updatedList = items.filter(item => {
            return item.id !== completedItem.id
        })
        setItems([...updatedList]);
        setCompleted([...completedItems, completedItem]);
    }


    const editItem = editedItem => {
        const newList = items.map(item => {
           if(item.id === editedItem.id){
               return {...item, detail: editedItem.detail};
           }
           return item;
        }
        );
        
        setItems(newList);
    }

    const removeItem = removedItemId => {
        let updatedList = items.filter(item => item.id !== removedItemId);
        setItems(updatedList);
    }

     const reinstateItem = reinstatedItem => {
        let updatedComplete = completedItems.filter(item => item.id !== reinstatedItem.id);
        setCompleted(updatedComplete);
        setItems([...items,reinstatedItem]);
    }

     const toggleCompleteView = () => {
        setCompletedView(!completedView);
     }



     const mainList = (<>
        <div className="List__Container">
            <header className="List__Header">
                {props.listName}
            </header>
        {items.map(item => {
            return <Item key={item.id} item={item} removeItem={removeItem} editItem={editItem} completeItem={completeItem}/>
        })}
        </div>
        <NewItem addItem={addItem}/>
        </>)

    return (
        <div className="List">
            <div className="List__Buttons">
                <button onClick={completedView ? toggleCompleteView : ""}>Outstanding</button>
                <button onClick={!completedView ? toggleCompleteView : ""}>Completed</button>
            </div>

            {completedView ? <CompletedList completedItems={completedItems} reinstateItem={reinstateItem}/> : mainList}
            

            
        </div>
    )
}
