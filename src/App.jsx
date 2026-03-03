import React from 'react'
import { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import ContactsContextProvider, { ContactsContext } from './Context/ContactsContext'
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
