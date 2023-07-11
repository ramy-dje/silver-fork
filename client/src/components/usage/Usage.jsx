import Card from './Card'
import './styles.css'
import {motion} from 'framer-motion'
import { useEffect,useState } from 'react'
import ChefImage from './Chef-pana.png'
import DeliveryImage from './Delivery-bro.png'
import BookTable from './Eating together-pana.png'
import OrderImage from './Order ride-pana.png'
function Usage() {
  const [scroll,setScroll] = useState(0);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      setScroll(window.scrollY)

    })
  },[scroll])
  return (
    <section className='usage'>
        <h1>how does it work</h1>
        <div className='cards'>
           {(scroll > 120) && <motion.div   animate={{translateX:[1500,0]  }} transition={{delay:0.3,duration:1}}><Card image={ChefImage} info={'best chefs in the country'} /></motion.div>}
           {(scroll > 120) && <motion.div   animate={{translateX:[1500,0]  }} transition={{delay:0.5,duration:1}}><Card image={DeliveryImage} info={'we deliver it to you'}/></motion.div>}
           {(scroll > 120) && <motion.div   animate={{translateX:[1500,0]  }} transition={{delay:0.6,duration:1}}><Card image={BookTable} info={'reserve a table'}/></motion.div>}
           {(scroll > 120) && <motion.div   animate={{translateX:[1500,0]  }} transition={{delay:0.7,duration:1}}><Card image={OrderImage} info={'order from your house'}/></motion.div>}
        </div>
        
    </section>
  )
}

export default Usage