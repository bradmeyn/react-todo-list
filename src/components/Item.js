import React, { Component } from 'react'
import './Item.css'


export class Item extends Component {
    constructor(props){
        super(props)
        this.handleRemove = this.handleRemove.bind(this);
    }
    handleRemove(e){
        this.props.remove(this.props.detail);
    }
    render() {
        return (
            <div className="item-container">
                <div className="item">{this.props.detail}</div>
                <div className="buttons">
                    <button className="button button-edit">Edit</button>
                    <button onClick={this.handleRemove} className="button button-delete">Delete</button>
                </div>
            </div>
        )
    }
}



