import './styles.css'
import { CartContext } from '../../App'
import { useContext } from 'react'
import {motion} from 'framer-motion'
import {BsThreeDotsVertical} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import {BsFillStarFill} from 'react-icons/bs'

function MealCard({data ,keyy}) {
  const cartItems = useContext(CartContext) ;

 
  return (
    <motion.div 
    animate={{translateX:[2000,0], transition:{duration:0.3,delay:(keyy) ? keyy/4 : 0.1, type:'spring',stiffness:260,damping:20} }} 
     whileTap={{scale:[1,0.9],transition:{duration:0.1,}}}
     whileHover={{scale:[1,1.1],transition:{duration:0.3,}}}
     className='mealcard' onClick={()=>cartItems.addToCart({name:data.name,image:data.image ,price:data.price ,number:1})}>
     <Link to={`/detailpage/${data.name}`}>{keyy != null &&<BsThreeDotsVertical className='dots' />}</Link> 
       <img src={data.image} loading='lazy' className="imgmeal" />
       <h4 style={{ paddingInline:'5px'}}>{data.name}</h4>
       <div className='priceandrating'> 
          <h4>{data.price}</h4> 
          <div>
            <h4> {data.rating} </h4>
            <BsFillStarFill className='starticon'/> 
          </div>
       </div> 
    </motion.div>
  )
}

export default MealCard