import React, { useState } from "react";

const Formulario = () => {
  const [datos, setDatos] = useState({
    email: "",
    password: "",
  });


  // Estara pendiente al valor que este cambiando el evento cada vez que cambia
  const handleChange = (event) => {
    setDatos({
        ...datos,
        [event.target.name] : event.target.value
    })
  }

  const enviarDatos = (event) => {
    event.preventDefault();
    const options = {
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            identifier: datos.email,
            password: datos.password
        }),
    };
    return fetch('https://salty-springs-71123.herokuapp.com/auth/local/',options)
        .then(response => {
            if(response.status !== 200){
                alert('Introduce bien tus credenciales1');
            }else{
                response.json()
                    .then(data => {
                        alert('Has iniciado sesión correctamente');
                        window.location.href="http://localhost:3000/home";
                    })
                    .catch(error => {
                        alert('Introduce bien tus credenciales2');
                    })
            }
        })
        .catch(error => {
            alert('Introduce bien tus credenciales3');
        })
  } 

  return (
    <form onSubmit={enviarDatos}>
        <h1>Login</h1>
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
export default Formulario; 
