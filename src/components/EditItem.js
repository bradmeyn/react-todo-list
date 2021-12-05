import React, {useState} from 'react'
import './EditItem.css'

export default function EditItem(props) {
    const [itemDetail, setDetail] = useState(props.item.detail);

    const handleSubmit = e => {
        e.preventDefault();
        let editedItem = {
            id: props.item.id, detail: itemDetail
        }
        props.editItem(editedItem);
        props.editMode();
    }

    const handleChange = e => {
        setDetail(e.target.value)

    }


    return (
        <form className="edit-form" onSubmit={handleSubmit}>
            <input
                autoFocus
                onChange={handleChange}
                onBlur={(e) => {
        
                    if(!e.relatedTarget || !e.relatedTarget.classList.contains('button-edit')){
                        props.editMode()
                    }
                    
                }}
                className="edit-item-input" 
                value={itemDetail}>
            </input> 
        </form>
    )
}


// export class EditItem extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             item: this.props.item.detail
//          }
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleChange = this.handleChange.bind(this)
//     }

//     handleSubmit(e){
//         e.preventDefault();
//         let editedItem = {
//             id: this.props.item.id, detail: this.state.item
//         }
//         console.log('edited item', editedItem);
//         this.props.editItem(editedItem);
//         this.props.editMode();
//     }

//     handleChange(e){
//         this.setState({
//             item: e.target.value
//         })
//     }
    
//     render() {
//         return (
           
//         )
//     }
// }

