import { createContext, useState } from "react";
import { getContacts } from "../Services/ContactsService";

export const ContactsContext = createContext(
    {
        contacts: [],
        favorite_name:""
    }
)
const ContactsContextProvider = ({ children }) => {
    const contacts = getContacts()
    const [contactsState, setContactsState] = useState(contacts)
    function addNewMessage(contact_id, new_message) {
        setContactsState(
            (currentContactState) => {
                return [...currentContactState].map(
                    (contact) => {
                        if (Number(contact.id) === Number(contact_id)) {
                            contact.messages.push({
                                id: contact.messages.length + 1,
                                text: new_message,
                                send_by_me: true, 
                                created_at: new Date().toISOString(),
                                is_read: false
                            },)
                        }
                        return contact
                    }
                )
            } 
        )
    }
    const provider_values = {
        contacts: contactsState,
        favorite_name:"pepe",
        addNewMessage
    }
    return (
        <ContactsContext.Provider value={provider_values}>
            {children}
        </ContactsContext.Provider>
    )
}
export default ContactsContextProvider