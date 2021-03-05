import React, { useState } from "react";

const FormularioRegistro = () => {
  const [datos, setDatos] = useState({
    usuario: "",
    email: "",
    password: ""
  });

  // Estara pendiente al valor que este cambiando el evento cada vez que cambia
  const handleChange = (event) => {
    setDatos({
        ...datos,
        [event.target.name] : event.target.value
    })
  }

  const enviarDatos = async (event) => {
    event.preventDefault();
    try{
        let options = {
            method: 'POST',
            headers: { 
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify( {
                username: datos.usuario,
                email: datos.email,
                password: datos.password
        }),
        }
        
        let res = await fetch('https://salty-springs-71123.herokuapp.com/auth/local/register/', options);
        let json = await res.json();
        console.log(json);
        alert('Te has registrado correctamente!');
        window.location.href="http://localhost:3000/";
    }catch (error){
        console.log(error);
    }
    
  } 

  return (
    <form onSubmit={enviarDatos}>
        <input
        type="text"
        placeholder="Usuario"
        name="usuario"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Correo electronico"
        name="email"
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="Contraseña"
        name="password"
        onChange={handleChange}
      />
      <button type="submit">Iniciar Sesion</button>
    </form>
  );
};
export default FormularioRegistro; 
