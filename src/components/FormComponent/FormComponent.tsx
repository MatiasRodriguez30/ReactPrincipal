import { useState } from "react";

export const FormComponent = () => {
  const[email,setEmail]= useState('')
  const[nombre,setNombre]= useState('')
  const[edad,setEdad]= useState(0)
  const handleSubmitForm = () =>{
    console.log({
      email,
      nombre,
      edad,
    })
  };

  return (
    <div>
      <div>
        <h2>Formulario</h2>
      </div>
      <div style={{display:"flex", flexDirection:"column", gap:"2vh"}}>
        <input value={email} onChange={(e)=>{
          setEmail(e.target.value)
        }} type="email" placeholder="example@exaple.com" />
        <input 
        onChange={(e)=>{
          setNombre(e.target.value)
        }} value={nombre}  type="text" placeholder="Nombre" />
        <input
        onChange={(e)=>{
          setEdad(parseInt(e.target.value));
        }} value={edad}  type="number" placeholder="Edad" />
      </div>
      <div>
        <button onClick={handleSubmitForm}>Enviar</button>
      </div>
    </div>
  )
}
