import { BsChatLeftText } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi2";
import { MdOutlineSettings } from "react-icons/md";
import { IoPersonAddSharp } from "react-icons/io5";
import { Link } from "react-router";
import "./SidebearLeft.css"

export function SidebearLeft(){
return(<div className='bar'>
            <div className="bar_header">
                <img src="https://cdn.polyspeak.ai/speakmaster/poly-sdispatcher/superresolution/images/20240813/090151eb-6eaa-4f7a-800c-2320c21f74e4.webp" className='profile_picture'/>
                <h3>Tomioka</h3>
            </div>
                <Link to="/"><BsChatLeftText /></Link>
                <Link to="/addcontact"><IoPersonAddSharp /></Link>
                <Link to="/groups"><HiUserGroup /></Link>
                <Link to="/settings"><MdOutlineSettings /></Link>
        </div>
        )
}