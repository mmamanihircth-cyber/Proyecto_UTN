import "./AddContact.css"
import { MdAccountBox } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

export default function AddContact(){
    return(
        <div className="container_add_contact">
            <h3> Nuevo contacto</h3>
            <div className="container_info_add_contact">
                <div className="name_add_contact"><span className="icon_add_contact"><MdAccountBox /></span><textarea 
                    placeholder='Nombre' 
                    id="nuevo_nombre" 
                    name="nuevo_nombre"
                    /></div>
                <div className="name_add_contact"><span className="icon_add_contact"></span><textarea 
                    placeholder='Apellido' 
                    id="nuevo_apellido" 
                    name="nuevo_apellido"
                    /></div>
                <div className="container_number_contact"><span className="icon_add_contact"><FaPhone /></span>
                        <div className="area_add_contact">
                            <p className="p_add_contact">Pais</p>
                            <textarea 
                            placeholder='Ar +54' 
                            id="area_contact" 
                            name="area_contact"
                            
                            />
                        </div>
                        <div>
                            <p className="p_add_contact">Telefono</p>
                            <textarea 
                            placeholder='11 0000 0000' 
                            id="number_contact" 
                            name="number_contact"
                            />
                        </div>
                </div>
            </div>
        </div>
    )
}