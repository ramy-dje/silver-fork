import React from 'react'
import {motion} from 'framer-motion'
import {AiOutlineLoading} from 'react-icons/ai'
function LoadingCirle() {
  return (
    <motion.div 
        style={{fontSize:100}}
    animate={{rotateX:[0,360]}} transition={{duration:1,repeat:Infinity}}><AiOutlineLoading /></motion.div>
  )
}

export default LoadingCirle