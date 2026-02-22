import React, { useState, useContext } from 'react'
import { ContactsContext } from '../../Context/ContactsContext'
import { IoSend } from "react-icons/io5";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import "./NewMessageForm.css"

const NewMessageForm = ({contact_id}) => {
    const [Text,setText] =useState(false)

    const {addNewMessage} = useContext(ContactsContext)
    function handleSubmitNewMessage(event) {
        event.preventDefault()
        const new_message = event.target.nuevo_mensaje.value
        addNewMessage(contact_id, new_message)

        event.target.recet()
        setText(false)
    }

    return(
        <div className='write'>
            <form onSubmit={handleSubmitNewMessage} className='chat-input'>
                <textarea 
                    placeholder='Escribe un mensaje...' 
                    id="nuevo_mensaje" 
                    name="nuevo_mensaje"
                    onChange={(e)=>setText(e.target.value.trim().length > 0)}
                />
                <button type={Text ? "submit" : "button"} className='button'>{
                    Text? <IoSend/> : <MdOutlineKeyboardVoice />
                    }</button>
            </form>
        </div>
    )
}
export default NewMessageForm