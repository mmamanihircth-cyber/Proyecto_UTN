import React, { useContext } from 'react'
import ContactSidebear from '../../Components/ContactSidebear/ContactSidebear'
import { useParams } from 'react-router'
import { ContactsContext } from '../../Context/ContactsContext'
import { IoSend } from "react-icons/io5";
import "./ContactScreen.css"

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
            {contact_selected.name  }
        </h1>
        <div className="messages_container">
            {
            contact_selected.messages.map(message => {
                return (
                <div key={message.id}
                className={message.send_by_me ? "message me" : "message other"}>
                    {
                    message.send_by_me
                    ? <h3>Yo</h3>
                    : <h3>{contact_selected.name}</h3>
                    }
                    <p>{message.text}</p>
                    <span>{message.time}</span>
                </div>
                )
            })}
        </div>
        <form>
            <textarea placeholder='Escribe un mensaje...' />
            <button type='submit'><IoSend /></button>
        </form>
        </div>
    }
    </div>
)
}