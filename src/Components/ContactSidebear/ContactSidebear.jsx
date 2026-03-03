import React, {useState, useContext } from 'react'
import { ContactsContext } from '../../Context/ContactsContext'
import { Link, useLocation } from 'react-router-dom'
import "./ContactSidebear.css"


export default function ContactSidebear() {
    const{contacts}=useContext(ContactsContext)
    const location=useLocation()

return (
    <div className='start'>
        <div className='sidebear_container'>
        <div className='tittle'>
            <img src="/Crow.png" className='crow_image' />
            <h2>Crow Line</h2>
        </div>
        {
                (location.pathname === "/" ||
                location.pathname.startsWith("/contact")) && (
        <div className='contacts_sidebear_container'>
            {
                contacts
                .filter(c => !c.isGroup) 
                .map((contact) => (
                <Link to={`/contact/${contact.id}`} key={contact.id}>
                </Link>
            ))
            }
            {
                contacts.map(
                    (contact) =>{
                        return(
                            <Link to={`/contact/${contact.id}`}
                                key={contact.id}
                            >
                                <div className='contact'>
                                    <img 
                                    src={contact.profile_picture} 
                                    alt={contact.name} 
                                />
                                <div className='info_contacts'>
                                    <h3>{contact.name}</h3>
                                    <span style={{color: contact.last_time_connection==="En línea" ? "skyblue" : "gray"}}>{contact.last_time_connection}</span>
                                </div>
                                </div>
                                
                            </Link>
                        )
                    }
                )
            }
        </div>
        )}
        </div>
    </div>
    
)
}
