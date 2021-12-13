import React, {useState} from 'react'
import Item from './Item'
import NewItem from'./NewItem'
import CompletedList from './CompletedList'
import './List.css'
import { v4 as uuidv4 } from 'uuid';

export default function List(props) {
    const [items, setItems] = useState([
        {id: uuidv4(), detail: 'Go to the gym'},
        {id: uuidv4(), detail: 'Purchase groceries'},
        {id: uuidv4(), detail: 'Walk the dog'}
    ]);
    const [completedItems, setCompleted] = useState([
        {id: uuidv4(), completedDate: new Date(Date.now()).toDateString(), detail: 'Read a chapter'},
        {id: uuidv4(), completedDate: new Date(Date.now()).toDateString(), detail: 'Hang clothes on the line'},
        {id: uuidv4(), completedDate: new Date(Date.now()).toDateString(), detail: 'Clean the kitchen'}
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
        });

        setItems([...updatedList]);

        completedItem.completedDate = new Date(Date.now()).toDateString();
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

    const removeCompletedItem = removedItemId => {
        let updatedList = completedItems.filter(item => item.id !== removedItemId);
        setCompleted(updatedList);
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
        <ul className="List__Body"> 
            {items.map(item => {
                return <Item key={item.id} item={item} removeItem={removeItem} editItem={editItem} completeItem={completeItem}/>
            })}
        </ul>
        </div>
        <NewItem addItem={addItem} items={items}/>
        </>)

    return (
        <div className="List">
            <div className="List__Toggle">
                <button 
                className={completedView ? 'List__Button' : 'List__Button--Active'} 
                onClick={completedView ? toggleCompleteView : ""}
                >
                Outstanding
    <span className={items.length > 0 ? 'List__ItemCount' : 'List__ItemCount--Hidden'} >{items.length}</span>
                </button>
                <button 
                className={completedView ? 'List__Button--Active' : 'List__Button'}
                onClick={!completedView ? toggleCompleteView : ""}
                >
                Completed
    <span className={completedItems.length > 0 ? 'List__ItemCount' : 'List__ItemCount--Hidden'}>{completedItems.length}</span>
                </button>
            </div>

            {completedView ? <CompletedList completedItems={completedItems} removeCompletedItem={removeCompletedItem} reinstateItem={reinstateItem}/> : mainList}
            

            
        </div>
    )
}
