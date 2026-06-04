// import { useState } from 'react'
import Chat from './components/Chat.jsx'
import Contactos from './components/contactos.jsx'
import './App.css'
import Titulo from './Titulo.jsx'
import { useEffect,useState } from 'react'
function App() {
  // const [count, setCount] = useState(0)
  useEffect()


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
