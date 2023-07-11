import {useState,useContext,useEffect} from 'react'
import { CartContext } from '../../App'
import './Styles.css'
import Navbar from '../../components/navbar/Navbar';
import { useScroll } from 'framer-motion';
import {motion} from 'framer-motion'
import {loadStripe} from '@stripe/stripe-js'
import {Elements,PaymentElement} from '@stripe/react-stripe-js'
import axios from 'axios'




function ConfirmePayment() {
   
    const {cartItems} = useContext(CartContext);
    const [paymentData,setPaymentData] = useState({cardNumber:'',expiry:'',cvc:'',discountCode:''})
    const [paymentRes,setPaymentRes] = useState('')
    function handlePaymentData(e){
        e.preventDefault()
        if(!paymentData.cardNumber)
            setPaymentRes('please insert the card number')
        else if(!paymentData.cvc)
            setPaymentRes('please insert the cvc')
        else if(!paymentData.discountCode)
            setPaymentRes('please insert the discount code')
        else if(!paymentData.expiry)
            setPaymentRes('please insert the expiry')        
        else
            setPaymentRes('thank you have a good meal')
    }
  return (
    <div >
        <Navbar />
        <div className='confirmentpage'>
            <motion.div className='paymentdetails' animate={{translateX:[-600,0]}} transition={{duration:0.5}}>
                <h2>list of shoping</h2>
                {
                    cartItems.map((e,i)=>(
                        <div className='paymentelement' key={i}>
                            <img src={e.image}/>
                            <div>
                                <h3>name : {e.name}</h3>
                                <div>
                                    <h5>price : {e.price}</h5>
                                    <p>number of orders : {e.number}</p>
                                </div>
                                <h3>total price : {e.price * e.number} </h3>
                            </div>
                           
                        </div>
                    ))
                }
            </motion.div>
            <form className='payment'>
                <h2>payment details</h2>
                <motion.input animate={{translateY:[-1000,0]}} transition={{duration:0.4,delay:0.5}} type='number' placeholder='Card number' required value={paymentData.cardNumber} 
                    onChange={(e)=>setPaymentData({...paymentData,cardNumber : e.target.value})}  />
                <motion.input animate={{translateY:[-1000,0]}} transition={{duration:0.4,delay:0}} type='text' placeholder='Expiry' required value={paymentData.expiry} 
                    onChange={(e)=>setPaymentData({...paymentData,expiry : e.target.value})} />
                <motion.input animate={{translateY:[-1000,0]}} transition={{duration:0.4,delay:0.3}} type='number' placeholder='CVC' required value={paymentData.cvc} 
                    onChange={(e)=>setPaymentData({...paymentData,cvc: e.target.value})} />
                <motion.input animate={{translateY:[-1000,0]}} transition={{duration:0.4,delay:0.2}} type='password' placeholder='Discount Code' required value={paymentData.discountCode} 
                    onChange={(e)=>setPaymentData({...paymentData,discountCode : e.target.value})} />
                <p>{paymentRes}</p>    
                <motion.button animate={{translateX:[1000,0]}} transition={{duration:0.7}} onClick={(e)=>{handlePaymentData(e)}}>complete payment</motion.button>
            </form> 
          
            
        </div>
       
    </div>
  )
}

export default ConfirmePayment