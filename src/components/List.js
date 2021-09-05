import React, { Component } from 'react'
import {Item} from './Item'
import './List.css'

export class List extends Component {
    constructor(props){
        super(props)
        this.state = {
            items: ["buy groceries", "go to shops", 'workout']
        }
    }
    render() {
        return (
            <div className="list">
                <header className="header">
                    {this.props.listName}
                </header>
                {this.state.items.map(item => {
                    return <Item detail={item}/>
                })}
            </div>
        )
    }
}
