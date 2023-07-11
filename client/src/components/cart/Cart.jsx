import './Styles.css'
import {BsArrowRight} from 'react-icons/bs'
import { useContext } from 'react';
import { UserContext,CartContext } from '../../App';
import CartElement from './CartElement';
import {AiOutlineClear} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import axios from 'axios' ;
function Cart({handleCart}) {
    const user = useContext(UserContext);
    const cartItems = useContext(CartContext)
    console.log(cartItems.cartItems)
    const navigate = useNavigate();
    function handlePayment(){
        axios.post('http://localhost:3000/create-checkout-session',cartItems.cartItems).then((e)=>window.location = e.data).catch((e)=>console.log(e))
    }
  return (
    <aside>
        <div className='heading'>
            <button className='arrow' onClick={handleCart.hide}> <BsArrowRight /> </button>
            <h1 className='carttitle'>cart</h1>
            <button className='arrow' onClick={cartItems.makeItEmpty}> <AiOutlineClear/></button>
        </div>
      
            <div className='cartContainer'>
                
                {

                    (cartItems.cartItems)?cartItems.cartItems.map((e,i)=>(<CartElement key={i} image={e.image} name={e.name} price={e.price} number={e.number}/>)) :<></>
                }
            </div>
            <div className='moneyinfo'>
                    <div className='price'>
                        <p>price</p>
                        <p>{cartItems.cartItems.reduce((acc,e)=>acc+(e.price*e.number) , 0)}</p>
                    </div>
                    <button onClick={()=>{cartItems.cartItems.length > 0 && handlePayment();handleCart.hide()}}>check out</button>
                </div>
        </aside>
  )
}

export default Cart