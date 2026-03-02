import { useNavigate } from 'react-router-dom';
import "./Login.css"
import { useContext, useState } from 'react';
import { ContactsContext } from '../../Context/ContactsContext';

export default function LoginForm() {
    const [formData, setFormData] = useState({ nombre: '', apellido: '', password: '' });
    const navigate = useNavigate();
    
    // Traemos setUsuario del contexto
    const { setUsuario } = useContext(ContactsContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // 1. Guardamos los datos en el Contexto Global
        setUsuario({ 
            nombre: formData.nombre, 
            apellido: formData.apellido 
        });

        // 2. Opcional: Verificamos en consola
        console.log("Usuario guardado:", formData.nombre);

        // 3. Navegamos al Home
        navigate('/'); 
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit} className="login-form">
                <img src="/Crow.png" alt="Logo" />
                <h3 className='bienvenida'>Bienvenido a Crow Line</h3>
                <input 
                    type="text" 
                    placeholder="Nombre" 
                    required 
                    // Actualizamos el estado del objeto formData
                    onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                />
                <input 
                    type="text" 
                    placeholder="Apellido" 
                    required 
                    onChange={(e) => setFormData({...formData, apellido: e.target.value})}
                />
                <input 
                    type="password" 
                    placeholder="Contraseña" 
                    required 
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
                <button type="submit">Entrar</button>
            </form>
        </div>
    );
}