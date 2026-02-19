import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import ContactScreen from './Screens/ContactScreen/ContactScreen'
import ErrorNotFoundScreen from './Screens/ErrorNotFoundScreen/ErrorNotFoundScreen'
import ContactsContextProvider from './Context/ContactsContext'
import Groups from './Screens/Groups/Groups'
import Settings from './Screens/Settings/Settings'

function App() {

    return (
        <div>
            <ContactsContextProvider >
                <Routes>
                    <Route path='/' element={<HomeScreen/>}/>
                    <Route
                        path='/contact/:contact_id'
                        element={
                            <ContactScreen />
                        }
                    />
                    <Route
                        path='*'
                        element={<ErrorNotFoundScreen />}
                    />
                    <Route path='/groups' element={<Groups />}/>
                    <Route path='/settings' element={<Settings />}/>
                </Routes>
            </ContactsContextProvider>
        </div>
    )
}

export default App
