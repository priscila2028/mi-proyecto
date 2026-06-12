import { BrowserRouter, Route, Routes } from "react-router-dom"

import Inicio from './pages/Inicio'
import Contactos from "./pages/Contactos"
import Detalle from "./pages/Detalle"
import Error from "./pages/Error"
function App() {

  return (

    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Inicio />} />
        <Route path="/PP" element={<Contactos />} />
        <Route path="/PP/:prod" element={<Detalle />} />
        <Route path="*" element={<Error />} />



      </Routes>




    </BrowserRouter>



  )




}
export default App 