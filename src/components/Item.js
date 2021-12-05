import React, {useState} from 'react'
import './EditItem'
import  EditItem  from './EditItem'
import './Item.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit as farEdit, faTrashAlt as farTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { faCheck as fasCheck } from '@fortawesome/free-solid-svg-icons'


export default function Item(props) {
    const [editView, setEditView] = useState(false);

    const handleRemove = e => {
        props.removeItem(props.item.id);
        }

    const toggleView = () => {
        setEditView(!editView)
        }

    const editMode = () => {
        toggleView();     
        }
                
    const handleComplete = () => {
        props.completeItem(props.item)
        }


        const itemView = !editView ?<div className="item">{props.item.detail}</div> : <EditItem item={props.item} editMode={editMode} editItem={props.editItem}/>;
        const editBtn = !editView ? <button onClick={toggleView} className="button button-edit"><FontAwesomeIcon icon={farEdit} size="lg" /></button>: <button onClick={toggleView} className="button button-edit">X</button>
    return (
        <div className="item-container">
            <div className="complete-button-container"> 
            <button onClick={handleComplete} className="button button-complete"><FontAwesomeIcon icon={fasCheck} size="lg" />
            </button>
            </div>
            {itemView}
            <div className="buttons">
            {editBtn}
            <button onClick={handleRemove} className="button button-delete"><FontAwesomeIcon icon={farTrashAlt} size="lg"/></button>  
        </div>
     </div>
    )
}


// export class Item extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             editView: false
//         }
//         this.handleRemove = this.handleRemove.bind(this);
//         this.handleComplete = this.handleComplete.bind(this);
//         this.toggleView = this.toggleView.bind(this);
//         this.editMode = this.editMode.bind(this);

//     }
//     handleRemove(e){
//         this.props.removeItem(this.props.item.id);
//     }

//     toggleView(){
//         this.setState(prevState => (
//             {editView: !prevState.editView }
//             ))
//     }

//     editMode(){
//         this.toggleView();
        
//     }

//     handleComplete(){
    
//         this.props.completeItem(this.props.item)
//     }
    
//     render() {

        // const itemView = !this.state.editView ?<div className="item">{this.props.item.detail}</div> : <EditItem item={this.props.item} editMode={this.editMode} editItem={this.props.editItem}/>;
        // const editBtn = !this.state.editView ? <button onClick={this.toggleView} className="button button-edit"><FontAwesomeIcon icon={farEdit} size="lg" /></button>: <button onClick={this.toggleView} className="button button-edit">X</button>
        // return (
        //     <div className="item-container">
        //        <div className="complete-button-container"> 
        //        <button onClick={this.handleComplete} className="button button-complete"><FontAwesomeIcon icon={fasCheck} size="lg" />
        //        </button>
        //         </div>
        //         {itemView}
        //         <div className="buttons">
        //         {editBtn}
        //         <button onClick={this.handleRemove} className="button button-delete"><FontAwesomeIcon icon={farTrashAlt} size="lg"/></button>  
        //         </div>
        //     </div>
//         )
//     }
// }

