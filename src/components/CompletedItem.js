import React, { Component } from 'react'
import './CompletedItem.css'


export class CompletedItem extends Component {
  constructor(props){
      super(props)
      this.handleReinstatement = this.handleReinstatement.bind(this)
  }

  handleReinstatement(){
    this.props.reinstateItem(this.props.item)
  }

    render() {
        return (
            <li className="completed-item">
                <button onClick={this.handleReinstatement}>{this.props.item.detail}</button>
            </li>
        )
    }
}
