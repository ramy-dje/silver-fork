import './styles.css'
import {AiFillThunderbolt} from 'react-icons/ai'
import {BiTimeFive} from 'react-icons/bi'
import {AiFillStar} from 'react-icons/ai'
import {FaMoneyBillWaveAlt} from 'react-icons/fa'
import {SiIfood} from 'react-icons/si'
import {TbMeat} from 'react-icons/tb'
import { useState,useEffect } from 'react'
import {motion} from 'framer-motion'
function Whyus() {
  const [scroll,setScroll] = useState(0);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      setScroll(window.scrollY)
    })
  },[scroll])
  return (
    <section className='whyus'>
        <h1>why us</h1>
        <table>
          {(scroll > 700) && (<tbody>
             <motion.tr animate={{translateX:[1500,0]}} transition={{duration: 0.6}}>
              <td ><AiFillThunderbolt className='whyusicon'/> fast delivery</td>
              <td ><BiTimeFive className='whyusicon'/> any time</td>
              <td ><AiFillStar className='whyusicon'/> most rated</td>
            </motion.tr>
            <motion.tr  animate={{translateX:[-1500,0]}} transition={{duration: 0.6}}>
              <td ><FaMoneyBillWaveAlt className='whyusicon'/> good prices</td>
              <td ><SiIfood className='whyusicon'/> good services</td>
              <td ><TbMeat className='whyusicon'/> variety of food</td>
            </motion.tr>
          </tbody>)}
        
        </table>
      
    </section>
  )
}

export default Whyus
/*
  <ul >
            <li><AiFillThunderbolt/> fast delivery</li>
            <li><BiTimeFive/> any time</li>
            <li><AiFillStar/>most rated</li>
        </ul>
        <ul >
            <li><FaMoneyBillWaveAlt/> good prices</li>
            <li><SiIfood/>good services</li>
            <li><TbMeat/> variety of food</li>
        </ul>
*/