import { BsChatLeftText } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi2";
import { MdOutlineSettings } from "react-icons/md";
import { Link } from "react-router";

export function SidebearLeft(){
return(<div className='bar'>
            <div>
                <img src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/02/giyu-tomioka.jpg?w=1600&h=900&fit=crop" className='profile_picture'/>
                <p>Tomioka</p>
            </div>
            <div className='interection'>
                <Link to="/"><BsChatLeftText /></Link>
                <Link to="/groups"><HiUserGroup /></Link>
            </div>
                <Link to="settings"><MdOutlineSettings /></Link>
            </div>
        )
}