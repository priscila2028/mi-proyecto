import { useParams } from "react-router-dom";
function Detalle() {
    let { prod } = useParams()
    return (
        <h1 >
            hola soy detalle del producto {prod}
        </h1>
    )

}

export default Detalle 