import React, { useContext } from 'react'
import { ContactsContext } from '../../Context/ContactsContext'
import { IoSend } from "react-icons/io5";

const NewMessageForm = ({contact_id}) => {
    const {addNewMessage} = useContext(ContactsContext)
    function handleSubmitNewMessage(event) {
        event.preventDefault()
        const new_message = event.target.nuevo_mensaje.value
        addNewMessage(contact_id, new_message)
    }

    return(
        <div>
            <form onSubmit={handleSubmitNewMessage}>
                <textarea placeholder='Escribe un mensaje...' id="nuevo_mensaje" name="nuevo_mensaje"/>
                <button type='submit'><IoSend /></button>
            </form>
        </div>
    )
}
export default NewMessageForm