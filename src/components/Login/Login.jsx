import { Link } from "react-router-dom"


import app from "../FireBase/FireBase"
import { getAuth , signInWithEmailAndPassword } from 'firebase/auth';
const auth = getAuth(app);

const Login = () => {


const handlerEnviar = ()=>{

signInWithEmailAndPassword(auth,"martin1981@gmail.com","12345678")
.then( usuarioLogin =>{
  console.log(usuarioLogin.user.accessToken)
})

}





  return (
    <div>
      <Link to='/'>
        <button className="btn">Home</button>
      </Link>
      <h2>Login Barberia</h2>
     <h2>Dash Board login</h2>
      <h3>Ingresar usuario</h3>
      <h3>Ingresar contraseña</h3>
      <button
      onClick={handlerEnviar}
      >enviar</button>
    </div>
  )
}

export default Login
