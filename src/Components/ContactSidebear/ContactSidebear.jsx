import React, { useContext } from 'react'
import { ContactsContext } from '../../Context/ContactsContext'
import { Link } from 'react-router'
import "./ContactSidebear.css"
import { SidebearLeft } from '../SidebearLeft/SidebearLeft';

export default function ContactSidebear() {
    const{contacts, favorite_name}=useContext(ContactsContext)
return (
    <div className='start'>
        {/* <SidebearLeft /> */}
        <div className='sidebear_container'>
        <div className='tittle'>
            <img src="/Crow.png" className='crow_image' />
            <h2>Crow Line</h2>
        </div>
        <div className='contacts_container'>
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
                                    style={
                                        {
                                            width: '100px',
                                            height: "100px"
                                        }
                                    }
                                />
                                <div className='info_contacts'>
                                    <h3>{contact.name}</h3>
                                    <span>{contact.last_time_connection}</span>
                                </div>
                                </div>
                                
                            </Link>
                        )
                    }
                )
            }
        </div>
        
        </div>
    </div>
)
}
