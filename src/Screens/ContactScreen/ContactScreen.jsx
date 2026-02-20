import React, { useContext } from 'react'
import ContactSidebear from '../../Components/ContactSidebear/ContactSidebear'
import { useParams } from 'react-router'
import { ContactsContext } from '../../Context/ContactsContext'
import "./ContactScreen.css"
import Messages from '../../Components/Messages/Messages';
import NewMessageForm from '../../Components/NewMessageForm/NewMessageForm';

export default function ContactScreen() {
    const {contacts} = useContext(ContactsContext)
    const {contact_id} = useParams()
    const contact_selected = contacts.find(contact => Number(contact.id) === Number(contact_id))

return (
    <div className='contact_container'>
    <ContactSidebear />
    {
        ! contact_selected 
        ? <div>
            <h1>El contacto seleccionado no existe</h1>
        </div>
        : <div className='chats'>
        <h1>
            {contact_selected.name}
        </h1>
        <Messages contact_selected={contact_selected} />
        <NewMessageForm contact_id={contact_id} />
        </div>
    }
    </div>
)
}