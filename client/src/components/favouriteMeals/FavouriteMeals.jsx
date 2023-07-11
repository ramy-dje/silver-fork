import MealCard from "./MealCard"
import './styles.css'
import {motion} from 'framer-motion'
import { Link } from "react-router-dom"
import {BsFillStarFill,BsThreeDotsVertical} from 'react-icons/bs'
import { useState,useEffect } from "react"

function FavouriteMeals() {
  const favmeals = [
    { 
      name : 'meat potato soup',
      image : 'https://ik.imagekit.io/iyboxrxkt/images/soups/Bacon-n-Baked-Potato-Soup-2414_640x428.jpg?updatedAt=1683545832216',
      rating : 4.8 ,
    },
    { 
      name : 'st luis with sauce',
      image : 'https://ik.imagekit.io/iyboxrxkt/images/heavy/St__Louis_Ribs_with_Maple_BBQ_Sauce.jpg?updatedAt=1683545838748',
      rating : 4.8,
    },
    { 
      name : 'Taco salad',
      image : 'https://ik.imagekit.io/iyboxrxkt/images/salad/taco_salad.png?updatedAt=1683545835452',
      rating : 4.8,
    },
    { 
      name : 'Kambot',
      image : 'https://ik.imagekit.io/iyboxrxkt/images/drinks/Kambot.png?updatedAt=1683545840814',
      rating : 4.8,
    },
  ]
  const [scroll,setScroll] = useState(0);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      setScroll(window.scrollY)

    })
  },[scroll])
  return (
    <section className="favmeals">
        <h1>our favourite meals</h1>
        <div className="mealscards">
        {
          scroll > 500 &&  favmeals.map((e,i)=>(
              <motion.div
              key={i} 
              animate={{translateX:[2000,0], transition:{duration:0.3,delay:(i) ? i/4 : 0.1, type:'spring',stiffness:260,damping:20} }} 
               whileTap={{scale:[1,0.9],transition:{duration:0.1,}}}
               whileHover={{scale:[1,1.1],transition:{duration:0.3,}}}
               className='mealcard' >
                 <img src={e.image} loading='lazy' className="imgmeal" />
                 <h4>{e.name}</h4>
                 <div className='priceandrating'> 
                 <h4></h4>
                  <div>
                    <h4> {e.rating} </h4>
                    <BsFillStarFill className='starticon'/> 
                  </div>
                </div> 
              </motion.div>
            ))
          }
        </div>
        <motion.button whileHover={{rotate:[0,50,-50,0]}} transition={{duration:0.5}}>
          <Link to={sessionStorage.getItem('profile') ? '/meals' : '/account'} className="Link">view our full menu</Link> 
        </motion.button>
    </section>
  )
}

export default FavouriteMeals