import './styles.css'
import {Link, redirect} from 'react-router-dom'
import { useState,useEffect } from 'react'

function RegisterTables() {
  const [isRegistred,setIsRegistred] = useState(false);
  useEffect(()=>{
      if(sessionStorage.getItem('profile'))
        setIsRegistred(true)
  },[])
 
  return (
    <section className='regsiter' id='reserve'>
        <div className='register-detailes'>
            <h2>register a table and enjoy the dinner with the family</h2>
           <Link className='Link' to={!isRegistred ? '/account' : '/booking'}><button>regsiter a table</button></Link>
        </div>
        
    </section>
  )
}

export default RegisterTables