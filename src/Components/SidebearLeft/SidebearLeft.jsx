import { BsChatLeftText } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi2";
import { MdOutlineSettings } from "react-icons/md";
import { IoPersonAddSharp } from "react-icons/io5";
import { Link, NavLink } from "react-router";
import "./SidebearLeft.css"
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { IoPersonAddOutline } from "react-icons/io5";
import { GrGroup } from "react-icons/gr";
import { IoSettingsSharp } from "react-icons/io5";
import { useContext } from 'react'; 
import { ContactsContext } from "../../Context/ContactsContext";

export function SidebearLeft(){
    const contexto = useContext(ContactsContext);
    if (!contexto) {
        return <div className='bar'>Cargando...</div>;
    }
    const { usuario } = contexto;
return(
<div className='bar'>
    <div className="bar_header">
        <img src="https://cdn.polyspeak.ai/speakmaster/poly-sdispatcher/superresolution/images/20240813/090151eb-6eaa-4f7a-800c-2320c21f74e4.webp" className='profile_picture'/>
        <h3>{usuario?.nombre || "Tomioka"}</h3>
    </div>
        <NavLink to="/" className="nav_item">
        {({ isActive }) => (
            <>
                {isActive ? <BsFillChatLeftTextFill />  : <BsChatLeftText />}
            </>
        )}</NavLink>
        <NavLink to="/addcontact" className="nav_item">
        {({ isActive }) => (
            <>
                {isActive ?  <IoPersonAddSharp /> : <IoPersonAddOutline />}
            </>
        )}</NavLink>
        <NavLink to="/groups" className="nav_item">
        {({ isActive }) => (
            <>
                {isActive ?  <HiUserGroup /> : <GrGroup />}
            </>
        )}</NavLink>
        <NavLink to="/settings" className="nav_item">
        {({ isActive }) => (
            <>
                {isActive ?  <IoSettingsSharp /> : <MdOutlineSettings />}
            </>
        )}</NavLink>
</div>
)
}