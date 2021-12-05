import React from 'react'

import './CompletedItem.css'

export default function CompletedItem(props) {

    const handleReinstatement = props => {
        props.reinstateItem(props.item)
      }

    return (
        <li className="completed-item">
            <button onClick={handleReinstatement}>{props.item.detail}</button>
        </li>
    )
}






// export class CompletedItem extends Component {
//   constructor(props){
//       super(props)
//       this.handleReinstatement = this.handleReinstatement.bind(this)
//   }

//   handleReinstatement(){
//     this.props.reinstateItem(this.props.item)
//   }

//     render() {
//         return (
//             <li className="completed-item">
//                 <button onClick={this.handleReinstatement}>{this.props.item.detail}</button>
//             </li>
//         )
//     }
// }