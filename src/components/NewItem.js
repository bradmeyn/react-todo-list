import React, {useState} from 'react'
import './NewItem.css'

export default function NewItem(props) {
    const [newItem, setNewItem] = useState('');
    const [warningActive, setWarningActive] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        let cleanString = newItem.trim();

            if(cleanString.length === 0){
                popUpWarning('You cannot add a blank item!');

            } else if(props.items.length >= 10) {
                popUpWarning('Lets get some items ticked off first!');

            } else {
                props.addItem(cleanString);
                setNewItem('');
            }
        
    }

    const handleChange = e => {
       setNewItem(e.target.value);
    }

    const popUpWarning = (message) => {
        setWarningActive(true);
        setNewItem(message);

        setTimeout(() => {
            setWarningActive(false);
            setNewItem('');
        }, 2500);

    }

    
    

    return (
        <form onSubmit={handleSubmit}>
            <div className={warningActive ? "NewItem NewItem--Warning" : "NewItem"}>
                <input name="newItem" className="NewItem__Input" placeholder="Add new item.." value={newItem} onChange={handleChange}></input>
                <button className="NewItem__Button" >+</button>
            </div>
        </form>
    )
}
