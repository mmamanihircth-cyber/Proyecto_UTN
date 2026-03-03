import "./AddContactSection.css"
import { RiAccountPinBoxFill } from "react-icons/ri";

export default function AddContactSection(){
    return(
        <div className='add_contact_section'>
                <span><RiAccountPinBoxFill /></span>
                <h2 className='h2_add_contact'>Add contact</h2>
        </div>
    )
}