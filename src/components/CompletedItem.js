import React from 'react'

import './CompletedItem.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  {faCheck as falCheck} from '@fortawesome/pro-light-svg-icons';

export default function CompletedItem(props) {

    const handleReinstatement = () => {
        props.reinstateItem(props.item)
      }

    return (
        <li className="CompletedItem" onClick={handleReinstatement}>
           <FontAwesomeIcon className={'CompletedItem__Icon'} icon={falCheck} size={'3x'} color={'green'}/>
           <div>
           <button className="CompletedItem__Button">
               {props.item.detail}
               
           </button>
           <small className="CompletedItem__Date">{props.item.completedDate}</small>
           
           </div>
            
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