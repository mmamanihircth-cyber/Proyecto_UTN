import React from 'react'
import { useContext } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import ContactScreen from './Screens/ContactScreen/ContactScreen'
import ErrorNotFoundScreen from './Screens/ErrorNotFoundScreen/ErrorNotFoundScreen'
import ContactsContextProvider, { ContactsContext } from './Context/ContactsContext'
import Groups from './Screens/Groups/Groups'
import Settings from './Screens/Settings/Settings'
import AddContact from './Screens/AddContact/AddContact'
import Login from "./Screens/Login/Login"

function App() {
    return (
        <div className='app'>
            <ContactsContextProvider>
                <AppContent />
            </ContactsContextProvider>
        </div>
    )
}
function AppContent() {
    const { usuario } = useContext(ContactsContext);
    const estaLogueado = usuario.nombre !== 'Tomioka';

    return (
        <Routes>
            {!estaLogueado && <Route path="*" element={<Login />} />}

            {estaLogueado && <Route path="/*" element={<HomeScreen />} />}
            
            <Route path="/login" element={<Login />} />
        </Routes>
    );
}

export default App
