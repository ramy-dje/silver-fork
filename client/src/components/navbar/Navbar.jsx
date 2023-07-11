import './styles.css'
import {BsFillCartFill} from 'react-icons/bs'
import {FaUserAlt} from 'react-icons/fa'
import { useContext,useState,useEffect } from 'react';
import { UserContext } from '../../App';
import {GiHamburgerMenu} from 'react-icons/gi'
import { useSwipeable } from 'react-swipeable'
import { Link, useLocation,useNavigate } from 'react-router-dom';
import { CartContext } from '../../App';
import logo from './logo.png'

function Navbar() {
   const user = useContext(UserContext);
   const cartItems = useContext(CartContext);
   const [userLoggedIn,setUserLoggedIn] = useState(sessionStorage.getItem('profile'));
   const [showUserInfo,setshowUserInfo] = useState(false) ;
   const [screenWidth,setScreenWidth] = useState(0);
   const [sideNavBar,setSideNavBar] =useState(false);
   const handlers = useSwipeable({ onSwipedRight: () => setSideNavBar(false) })
   const location = useLocation();
   const navigate = useNavigate();
  useEffect(()=>{
    setUserLoggedIn(sessionStorage.getItem('profile'));
    setScreenWidth(window.screen.width) ;
    console.log(cartItems.numberOfCartItems)

  },[location])
  function logout(){
    sessionStorage.setItem('profile','')
    navigate('/',{replace:true})
  }

  return (
    <header onClick={()=>showUserInfo && setshowUserInfo(false)} {...handlers}> 
        <img src={logo} />
     { (screenWidth > 450) ?<nav >

            <h4><a href='/#home'>Home</a></h4>
            <h4><a href={sessionStorage.getItem('profile') ? '/meals' : '/account'}>Menu</a></h4>
            <h4><a href={sessionStorage.getItem('profile') ? '/booking' : '/account'}>Reserve a table</a></h4>
            <h4><a href='/#contact'>Contact us</a></h4>
            <h4 style={{position:'relative'}} >{cartItems.numberOfCartItems > 0 && <p style={{fontSize:'13px',textAlign:'center',width:'15px',height:'15px',borderRadius:'50%',backgroundColor:'red',color:'white',position:'absolute',top:-5,left:-10}}>{cartItems.numberOfCartItems}</p>} <button onClick={()=>{cartItems.dd() ; user.show()}}><BsFillCartFill/></button></h4>
            <h4><button onClick={()=>setshowUserInfo((e)=>!e)}>{(!userLoggedIn) ?<FaUserAlt/>: <p className='userIcon'>{sessionStorage.getItem('profile')[0]}</p> }</button></h4>

        </nav> :<button className='burgericon'><GiHamburgerMenu  onClick={()=>setSideNavBar(true)}/></button>}


       { showUserInfo &&
        <div className='userinfo'>
           {!userLoggedIn ? <Link to={'/account'} className='Link'>connect or create acount</Link>:
              <div>
                <Link className='Link' to={'/userhistory'}>reservation history</Link>
                <button onClick={logout}>log out</button>
              </div>
            }
        </div>
        }

      { sideNavBar && <div className='asidelinks' {...handlers}>
            <h4><a href='/#home'>Home</a></h4>
            <h4><a href={sessionStorage.getItem('profile') ? '/meals' : '/account'}>Menu</a></h4>
            <h4><a href={sessionStorage.getItem('profile') ? '/booking' : '/account'}>Reserve a table</a></h4>
            <h4><a href='/#contact'>Contact us</a></h4>
            <h4 style={{position:'relative'}} >{cartItems.numberOfCartItems > 0 && <p style={{fontSize:'13px',textAlign:'center',width:'15px',height:'15px',borderRadius:'50%',backgroundColor:'red',color:'white',position:'absolute',top:-5,left:-10}}>{cartItems.numberOfCartItems}</p>} <button onClick={()=>{cartItems.dd() ; user.show()}}><BsFillCartFill/></button></h4>
            <h4><button onClick={()=>setshowUserInfo((e)=>!e)}>{(!userLoggedIn) ?<FaUserAlt/>: <p className='userIcon'>{sessionStorage.getItem('profile')[0]}</p> }</button></h4>  
            </div>}
    </header>
  )
}

export default Navbar