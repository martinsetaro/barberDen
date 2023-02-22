import { Link } from "react-router-dom"
import '../../style.scss'

import app from "../FireBase/FireBase"
import { getAuth ,createUserWithEmailAndPassword } from 'firebase/auth';
const auth = getAuth(app);


const Registro = () => {

  

const handlerRegistrar = ()=>{
  

createUserWithEmailAndPassword(auth,"martinToken@gmail.com","12345678")
.then( usuarioFirebase => {
  console.log(usuarioFirebase.user.accessToken)
})

}





  return (
    <div>
      <Link to='/'>
        <button className="btn">Home</button>
      </Link>
      <h2>Registro barberia</h2>
    
        <h3>ingrese nombre usuario</h3>
        <h3>Ingresar contraseña</h3>
        <h3>repita contraseña</h3>
        <h3>nombre barberia</h3>
        <button
        onClick={handlerRegistrar}
        >Enviar</button>

     
    </div>
  )
}

export default Registro
