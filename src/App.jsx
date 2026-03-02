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

// Creamos un pequeño componente interno para poder usar el Contexto
function AppContent() {
    const { usuario } = useContext(ContactsContext);

    // Consideramos "logueado" si el nombre NO es el de defecto 'Tomioka'
    const estaLogueado = usuario.nombre !== 'Tomioka';

    return (
        <Routes>
            {/* 1. Si NO está logueado y entra a cualquier ruta, lo mandamos al Login */}
            {!estaLogueado && <Route path="*" element={<Login />} />}

            {/* 2. Si YA está logueado, habilitamos el HomeScreen en la raíz */}
            {estaLogueado && <Route path="/*" element={<HomeScreen />} />}
            
            {/* 3. Ruta explícita para el login por seguridad */}
            <Route path="/login" element={<Login />} />
        </Routes>
    );
}

export default App
