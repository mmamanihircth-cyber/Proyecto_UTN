import React from 'react'
import ContactSidebear from '../../Components/ContactSidebear/ContactSidebear'
import "./HomeScreen.css"

export default function HomeScreen() {
  return (
    <div className='homescreen'>
        <ContactSidebear/>
        <hr className='hr'/>
        <section>
          <div className='content_section'>
            <div><img src="/imagesection.png" className='crow_section' /></div>
            <span className='span_descarga'>Descarga Crow Line para Windows</span>
            <span className='span_descarga_info'>Descarga la aplicación para Windows y haz llamadas, comparte pantalla y disfruta de una experiencia más rápida</span>
            <button>Descargar</button>
          </div>
        </section>
    </div>
  )
}