import React, {useState} from 'react'
import './EditItem.css'

export default function EditItem(props) {
    const [itemDetail, setDetail] = useState(props.item.detail);

    const handleSubmit = e => {
        e.preventDefault();
        let cleanString = itemDetail.trim();

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

    const handleChange = e => {
        setDetail(e.target.value)

    }

    return (
        <form className="EditItem" onSubmit={handleSubmit}>
            <input
                autoFocus
                onChange={handleChange}
                onBlur={(e) => {
        
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
