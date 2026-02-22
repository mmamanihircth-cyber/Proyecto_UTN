import React, { useContext } from 'react'
import ContactSidebear from '../../Components/ContactSidebear/ContactSidebear'
import { useParams } from 'react-router'
import { ContactsContext } from '../../Context/ContactsContext'
import "./ContactScreen.css"
import Messages from '../../Components/Messages/Messages';
import NewMessageForm from '../../Components/NewMessageForm/NewMessageForm';
import { IoVideocamOutline } from "react-icons/io5";
import { IoCallSharp } from "react-icons/io5";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { CiMenuKebab } from "react-icons/ci";

export default function ContactScreen() {
    const {contacts} = useContext(ContactsContext)
    const {contact_id} = useParams()
    const contact_selected = contacts.find(contact => Number(contact.id) === Number(contact_id))

return (
    <div className='contact_container'>
    <ContactSidebear />
    <hr className='hr'/>
    {
        ! contact_selected 
        ? <div>
            <h1>El contacto seleccionado no existe</h1>
        </div>
        : <div className='chats'>
            <div className='chat_header'>
                <div className='chat_header_contact'>
                    <img src={contact_selected.profile_picture} alt={contact_selected.name} />
                    <h1>{contact_selected.name}</h1>
                </div>
                <div className='chat_header_interaction'>
                    <button><IoVideocamOutline /></button>
                    <button><IoCallSharp /></button>
                    <button><FaMagnifyingGlass /></button>
                    <button><CiMenuKebab /></button>
                </div>
            </div>
        
        <div className='interaction_chat'>
            <Messages contact_selected={contact_selected} />
            <NewMessageForm contact_id={contact_id} />
        </div>
        
        </div>
    }
    </div>
)
}