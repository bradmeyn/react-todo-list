import React from 'react';
import './Item.css';

export const Item = (props) => {
    return (
        <div className="item-container">
            <div className="item">{props.detail}</div>
            <div className="buttons">
                <button className="button button-edit">Edit</button>
                <button className="button button-delete">Delete</button>
            </div>
        </div>
    )
}


