import React, {useState} from 'react'
import './EditItem.css'

export default function EditItem(props) {
    const [itemDetail, setDetail] = useState(props.item.detail);


    //function to submit change to edited item
    const handleSubmit = e => {
        e.preventDefault();
        //trim spaces from item
        let cleanString = itemDetail.trim();
        //check if the detail was blank
        if(cleanString.length === 0){
            props.editMode();
        } else {
            let editedItem = {
                id: props.item.id, detail: cleanString
            }
            props.editItem(editedItem);
            props.editMode();
        }

    }

    //function to update detail in edit mode as change occurs
    const handleChange = e => {
        setDetail(e.target.value)
    }

    return (
        <form className="EditItem" onSubmit={handleSubmit}>
            <input
                autoFocus
                onChange={handleChange}
                onBlur={(e) => {
                    //if outside input/edit button is clicked switch back to non-edit mode
                    if(!e.relatedTarget || !e.relatedTarget.classList.contains('Item__Button--Edit')){
                        props.editMode()
                    }
                }}
                className="EditItem__Input" 
                value={itemDetail}>
            </input> 
        </form>
    )
}
