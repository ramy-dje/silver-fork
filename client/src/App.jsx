import './App.css'
import Cart from './components/cart/Cart'
import Home from './pages/home/Home'
import Meals from './pages/ourMeals/Meals'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import { useState ,createContext } from 'react'
import Booking from './components/booking/Booking'
import DetailPage from './components/detailePage/DetailPage'
import Account from './components/account/Account'
import UserHistory from './pages/userHistory/UserHistory'
import ConfirmePayment from './pages/confirmePayment/ConfirmePayment'


export const UserContext = createContext() ;
export const CartContext = createContext() ;

function App() {
  const [showCart,setShowCart] = useState(false);
  const [cartItems,setCartItems] = useState([]);
  const [numberOfCartItems,setNumberOfCartItems] = useState(0)
  const handleCartItems = {
    cartItems,
    numberOfCartItems,
    dd :()=>setNumberOfCartItems(0),
    addToCart: (e)=>{
      if( cartItems.find((ele)=>ele.name == e.name)){
          setNumberOfCartItems((e)=>e+1)
          const {name} = cartItems.find((ele)=>ele.name == e.name) ;
           const ss = cartItems.map((value)=>{
            if(value.name == name)
                value.number = value.number +1
            return(value)    
          })
          console.log(ss)
          setCartItems(ss)
        
      }
      else  
        setCartItems((cartItems)=>[...cartItems, e ])
    },
    removeFromCart : (e) =>{
        const {name} = cartItems.find((ele)=>ele.name == e.name) ;
        if(e.number > 1){
          const ss = cartItems.map((value)=>{
            if(value.name == name ){
                value.number = value.number -1
            }    
                return(value)    
            })
          setCartItems(ss)
        }else{
          console.log('filter')
          setCartItems((carts)=>carts.filter((f)=>f.name != e.name))
        }

    },
    makeItEmpty : () =>{  setCartItems([]);setNumberOfCartItems(0) }
  }
  const handleCart ={
   show: ()=>{
    setShowCart(true)
   },
   hide:()=>{
    setShowCart(false)
  }
}
  return (
    <BrowserRouter>
      <UserContext.Provider value={handleCart}>
        <CartContext.Provider value={handleCartItems}>
          <div className='app'>
            {showCart && <Cart handleCart={handleCart}/>}
          <Routes>
              <Route path='/' exact element={<Home/>}/>
              <Route path='/booking' exact element={<Booking/>}/>
              <Route path='/meals' exact element={<Meals/>} />
              <Route path='/detailpage/:id' exact element={<DetailPage/>} />
              <Route path='/account' exact element={<Account/>} />
              <Route path='/userhistory' exact element={<UserHistory />}/>
              <Route path='/confirmepayment' exact element={<ConfirmePayment/>} />
          </Routes>
          </div>
        </CartContext.Provider>  
      </UserContext.Provider>  
    </BrowserRouter>
    
  )
}

export default App
