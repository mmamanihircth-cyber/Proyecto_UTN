import { MdOutlineKey } from "react-icons/md";
import { MdLock } from "react-icons/md";
import { BsChatSquareTextFill } from "react-icons/bs";
import { IoNotificationsSharp } from "react-icons/io5";
import { MdKeyboard } from "react-icons/md";
import { MdOutlineHelp } from "react-icons/md";
import "./Settings.css"

export default function Settings(){
    return(
        <div className="container_option_settings">
            <div className="option_settings">
                <div className="icons-settings"><MdOutlineKey /></div>
                <div className="info">
                    <span className="settings_tittle_items">Cuenta</span>
                    <span className="setings_info_items">Notificaciones de seguridad, informacion de la cuenta</span>
                </div>
            </div>
            <div className="option_settings">
                <div className="icons-settings"><MdLock /></div>
                <div className="info">
                    <span className="settings_tittle_items">Privacidad</span>
                    <span className="setings_info_items">Contactos bloqueados, mensajes temporales</span>
                </div>
            </div>
            <div className="option_settings">
                <div className="icons-settings"><BsChatSquareTextFill /></div>
                <div className="info">
                    <span className="settings_tittle_items">Chats</span>
                    <span className="setings_info_items">Tema, fondo, ajuste del chat</span>
                </div>
            </div>
            <div className="option_settings">
                <div className="icons-settings"><IoNotificationsSharp /></div>
                <div className="info">
                    <span className="settings_tittle_items">Notificaciones</span>
                    <span className="setings_info_items">Mensajes, grupos, sonidos</span>
                </div>
            </div>
            <div className="option_settings">
                <div className="icons-settings"><MdKeyboard /></div>
                <div className="info">
                    <span className="settings_tittle_items">Atajos del teclado</span>
                    <span className="setings_info_items">Acciones rapidas</span>
                </div>
            </div>
            <div className="option_settings">
                <div className="icons-settings"><MdOutlineHelp /></div>
                <div className="info">
                    <span className="settings_tittle_items">Ayuda y comentarios</span>
                    <span className="setings_info_items">Centro de ayuda, contactanos, politica de privacidad</span>
                </div>
            </div>
        </div>
        
    )
}