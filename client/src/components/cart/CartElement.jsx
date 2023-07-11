import './Styles.css'
import { useContext } from 'react'
import { CartContext } from '../../App'

function CartElement({name,price,number,image}) {
    const cartItems = useContext(CartContext);
  return (
   
        <div className='cartelement'>
            <div className='foodinfo'>
                <img src={image}  />
            <div>
            <h4>{name}</h4>
             <p>{price} da</p>
            </div>
        </div>
            <div style={{display:'flex',gap:'5px'}}><button onClick={()=>cartItems.addToCart({name,number})}>+</button>
             {number}
              <button onClick={()=>cartItems.removeFromCart({name,number})}>-</button></div>
        </div>
 
  )
}

export default CartElement