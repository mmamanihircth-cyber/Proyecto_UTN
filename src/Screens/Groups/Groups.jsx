import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContactsContext } from '../../Context/ContactsContext';

export default function GroupsSidebear() {
    const { contacts } = useContext(ContactsContext);

    return (
        <div className='sidebear_container'>
            <div className='tittle'>
                <h2 className='h2_groups'>Mis Grupos</h2>
            </div>
            <div className='contacts_sidebear_container'>
                {
                    contacts
                        .filter(contact => contact.isGroup) 
                        .map((group) => (
                            <Link to={`/groups/contact/${group.id}`} key={group.id}>
                                <div className='contact'>
                                    <img src={group.profile_picture} alt={group.name} />
                                    <div className='info_contacts'>
                                        <h3>{group.name}</h3>
                                        <span>{group.integrantes.length} miembros</span>
                                    </div>
                                </div>
                            </Link>
                        ))
                }
            </div>
        </div>
    );
}