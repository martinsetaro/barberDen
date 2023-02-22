import { Link } from 'react-router-dom';
import '../../style.scss'

import React from 'react'






const Home = ()=>{

    return( 
<div className="container">

      <div className="frontContainer">
        <div className="registro">
           <h2>Barber</h2>
           <h2>Den</h2>
           <h3>Ingrese su barberia</h3>
           <Link to='/login'><button className='btn'>Ingresar</button></Link>
           <h3>Registrar su barberia</h3>
           <Link to='/registro'><button className='btn'>Registrar</button></Link>
       </div>
      <div className='registro'>

      </div>
    </div>
    </div>
    )
}

    export default Home;