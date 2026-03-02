import "./SettingsSection.css"
import { IoSettings } from "react-icons/io5";

export default function SettingsSection(){
    return(
        <div className='settings_section'>
            <span><IoSettings /></span>
            <h2 className='h2_settings'>Settings</h2>
        </div>
        
    )
}