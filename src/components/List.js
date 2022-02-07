import React, {useState, useEffect} from 'react'
import Item from './Item'
import NewItem from'./NewItem'
import CompletedList from './CompletedList'
import './List.css'
import { v4 as uuidv4 } from 'uuid';

export default function List(props) {
    //default items if there are none in local storage
    let savedItems = !window.localStorage.getItem("items") ? 
    [
        {id: uuidv4(), detail: 'Finish ClientBook'},
        {id: uuidv4(), detail: 'Start budget app'},
        {id: uuidv4(), detail: 'Build something with Next.js'},
        {id: uuidv4(), detail: 'Start learning iOS'},
        {id: uuidv4(), detail: 'Create restaurant site'},
        {id: uuidv4(), detail: 'Create business site w/blog'}
    ] : JSON.parse(window.localStorage.getItem("items"));

    let savedCompleted = !window.localStorage.getItem("completedItems") ?
    [
        {id: uuidv4(), completedDate: new Date(Date.now()).toDateString(), detail: 'Start learning React'},
        {id: uuidv4(), completedDate: new Date(Date.now()).toDateString(), detail: 'Start Computer Science Degree'},
        {id: uuidv4(), completedDate: new Date(Date.now()).toDateString(), detail: 'Walk the dog'}
    ]: JSON.parse(window.localStorage.getItem("completedItems"));

    const [items, setItems] = useState(savedItems);
    const [completedItems, setCompleted] = useState(savedCompleted);
    const [completedView, setCompletedView] = useState(false);

    //update items/completed values in local storage when the values change.
    useEffect(() => {
        window.localStorage.setItem("items", JSON.stringify(items));
    }, [items]);

    useEffect(() => {
        window.localStorage.setItem("completedItems", JSON.stringify(completedItems));
    }, [completedItems]);

    //function to create a new item and add to list
    const addItem = newItem => {
        let item = {id: uuidv4(), detail: newItem};
        setItems([...items, item]);
    }

    //function for completing an outstanding item and moving it to the completed list
    const completeItem = completedItem => {
        let updatedList = items.filter(item => {
            return item.id !== completedItem.id
        });
        setItems([...updatedList]);
        completedItem.completedDate = new Date(Date.now()).toDateString();
        setCompleted([...completedItems, completedItem]);
    }


    //function to edit existing item
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

    //function to permanently remove an outstanding item
    const removeItem = removedItemId => {
        let updatedList = items.filter(item => item.id !== removedItemId);
        setItems(updatedList);
    }

    //function to permanently remove a completed item
    const removeCompletedItem = removedItemId => {
        let updatedList = completedItems.filter(item => item.id !== removedItemId);
        setCompleted(updatedList);
    }

    //function to move item back from completed item list to outstanding item list
    const reinstateItem = reinstatedItem => {
        let updatedComplete = completedItems.filter(item => item.id !== reinstatedItem.id);
        setCompleted(updatedComplete);
        setItems([...items,reinstatedItem]);

    }

    //switch to/from completed list
    const toggleCompleteView = () => {
        setCompletedView(!completedView);
     }


     const mainList = (
        <>
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
        </>
    )

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
