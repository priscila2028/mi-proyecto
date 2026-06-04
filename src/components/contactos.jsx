import "./Contactos.css"
import { useState } from "react"
function contactos({ msj, nombre, perfil }) 

{ const[contador,setContador]= useState(0)
    // let contador =0
    function Abrirmensaje() {
        setContador(contador +1)
        console.log("msj abiertoooo" + contador)
    }
    // const{nombre}=mensaje

    // let msj= "mañama mo voy"
    return (
        <div className="contenedor-contacto" onClick={Abrirmensaje}>
            <img src={perfil} className="avatar"></img>
            <div>
                <h2>{nombre}</h2>
                <h3>{msj}</h3>

            </div>
         <p>contador {contador} 
         </p>
        </div>
    )
}
export default contactos
