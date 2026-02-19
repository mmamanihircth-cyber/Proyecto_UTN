import React, { useContext } from 'react'
import { ContactsContext } from '../../Context/ContactsContext'
import { Link } from 'react-router'
import "./ContactSidebear.css"
import { SidebearLeft } from '../SidebearLeft/SidebearLeft';

export default function ContactSidebear() {
    const{contacts, favorite_name}=useContext(ContactsContext)
  return (
    <div className='start'>
        <SidebearLeft />
        <div className='contacts'>
        <div className='tittle'>
            <img src="/Crow.png" className='crow_image' />
            <h2>Crow Line</h2>
        </div>
        <div>
            {
                contacts.map(
                    (contact) =>{
                        return(
                            <Link to={`/contact/${contact.id}`}
                                key={contact.id}
                            >
                                <img 
                                    src={contact.profile_picture} 
                                    alt={contact.name} 
                                    style={
                                        {
                                            width: '200px'
                                        }
                                    }
                                />
                                <h3>{contact.name}</h3>
                                <span>{contact.last_time_connection}</span>
                                <br />
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
