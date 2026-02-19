import { createContext, useState } from "react";
import { getContacts } from "../Services/ContactsService";

//Creamos el contexto y lo exportamos, por que luego quien necesite consumirlo lo va a necesitar
export const ContactsContext = createContext(
    //Representa el estado incial del contexto, lo que va a devolver el contexto por defecto, nos sirve para saber que propiedades va a tener el contexto, aunque luego se van a modificar
    {
        contacts: [],
        favorite_name:""
    }
)
/* La prop children es una prop reservada de react
Representa a todos los componentes hijos que se encuentran dentro del componente */
const ContactsContextProvider = ({ children }) => {
    const contacts = getContacts()
    const [contactsState, setContactsState] = useState(contacts)
    const provider_values = {
        contacts: contactsState,
        favorite_name:"pepe"
    }
    
    return (
        /* Creamos el proveedor del contexto y pasamos la prop value que es basicamentre lo que se posra consumir del contexto */
        <ContactsContext.Provider value={provider_values}>
            {children}
        </ContactsContext.Provider>
    )
}
export default ContactsContextProvider