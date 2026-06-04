import { useState } from "react"
function Chat({mensajes}) {
    const [msjs, setMsjs] = useState([mensajes  || []])
    const [texto , setTexto ] = useState([""])
function nuevoMensaje(){
    setMsjs([...msjs,texto])
     setTexto("")

}
    return (
        <div className="contenedor-chat"> {
            msjs.map((elemento, indice) =>

                <h2 key={indice} >{elemento}</h2>

            )
        }

<input type="text" value = {texto} onChange={
    (evento) =>
        setTexto(evento.target.value )
}></input>
<button  onClick={nuevoMensaje}> ➡</button>
        </div>
    )
}
export default Chat