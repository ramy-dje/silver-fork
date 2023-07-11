import './styles.css'
import { motion } from 'framer-motion'
import { useSwipeable } from 'react-swipeable'
import {BsFillStarFill} from 'react-icons/bs'
function Card({data,position,index,moveleft,moveright}) {
  const handlers = useSwipeable({ onSwipedLeft: () => moveright(), onSwipedRight: () => moveleft() })
  return (
    <motion.div className='opinionCard'
    whileHover={{scale:1.2,rotate:360}}
    initial={{scale : 0}}
    animate={{scale : 1,left : (index - position) * 300 +25 }}
    transition={{
      type:'spring',stiffness:260,damping:20
    }} {...handlers}  >

        <img src={data.image} alt='img'/>
        <div>
          <h2>{data.name}</h2>
          <p>"{data.opinion}"</p>
        </div>
        <p className='rating'>{data.rating} <BsFillStarFill className='starticon'/></p>


    </motion.div>
  )
}

export default Card