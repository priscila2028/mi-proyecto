// import { useState } from 'react'
import Chat from './components/Chat.jsx'
import Contactos from './components/contactos.jsx'
import './App.css'
import Titulo from './Titulo.jsx'
import { useEffect,useState } from 'react'
function App() {
  // const [count, setCount] = useState(0)
 let [arreglo_mensajes, setArregloMensajes ]= useState([]);
  useEffect(   
    ()=>{
      fetch("http://localhost:3000/contacto")
      .then(respuesta=> respuesta.json())
      .then(datos=> setArregloMensajes(datos))
      .catch(e => console.log(e))
      
    },[]
  )


return (
  <>
    <h1>WhatsApp</h1>
    
    {

      arreglo_mensajes.map((elemento, indice) => <Contactos key={indice}{...elemento} ></Contactos>)
    }
    
    <Chat></Chat>
  </>
)
}

export default App
