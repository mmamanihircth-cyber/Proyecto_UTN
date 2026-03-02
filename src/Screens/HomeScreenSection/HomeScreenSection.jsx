import "./HomeScreenSection.css"

export default function HomeScreenSection(){
    return(
        <div className='content_section'>
            <div className="downland_crowline">
                <div><img src="/imagesection.png" className='crow_section' /></div>
                <span className='span_descarga'>Descarga Crow Line para Windows</span>
                <span className='span_descarga_info'>Descarga la aplicación para Windows y haz llamadas, comparte pantalla y disfruta de una experiencia más rápida</span>
                <button>Descargar</button>
            </div>
        </div>
        
    )
}