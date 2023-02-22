import { Route , Routes } from "react-router-dom";
import Login from './components/Login/Login';
import Registro from './components/Registro/Registro'
import Home from '../src/components/Home/Home'
import DashBoardLogin from "./components/Login/DashBoardLogin";
import '../src/style.scss'


const Container = () => {
  return (
    <main className='containerMain'>
    <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path='/login' element={<Login/>}/>
        <Route path="/registro" element={<Registro/>}/>
        <Route path='/dashBoardLogin' element={<DashBoardLogin/>}/>
    </Routes>

    </main>
  )
}

export default Container
