import './styles.css'
import {GrMap } from "react-icons/gr"
import {BsFacebook} from "react-icons/bs"
import {AiFillInstagram} from "react-icons/ai"
import {BsTwitter} from "react-icons/bs"
import {BsFillTelephoneFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
function Footer() {
    const navigate= useNavigate();
  return (
    <footer>
        <div className='footer' id='contact'>
            <div className='info'>
                <h3>restaurant</h3>
                <p> <GrMap style={{fontSize:'25px' , marginRight : '4px'}}/> nouvelle ville</p>
                <ul>
                    <li><a href='https://www.facebook.com/Hawksmoor' target='_blank'> <BsFacebook style={{fontSize:'25px' , marginRight : '4px'}} />fb </a></li>
                    <li><a href='https://www.instagram.com/hawksmoorrestaurants/?hl=ar' target='_blank'> <AiFillInstagram style={{fontSize:'25px' , marginRight : '4px'}}/>insta </a></li>
                    <li><a href='https://twitter.com/hawksmoornyc?lang=ar' target='_blank'> <BsTwitter style={{fontSize:'25px' , marginRight : '4px'}}/>twiter </a></li>
                </ul>
            </div>
            <div className='quicklinks'>
                <h3>quick links</h3>
                <ul>
                    <h4><a href='/#home'>Home</a></h4>
                    <h4><a href={sessionStorage.getItem('profile') ? '/meals' : '/account'}>Menu</a></h4>
                    <h4><a href={sessionStorage.getItem('profile') ? '/booking' : '/account'}>Reserve a table</a></h4>
                    <h4><a href='/#contact'>Contact us</a></h4>
                </ul>
            </div>
            <div className='contactus'>
                <h3>get in touch with us</h3>
                <p><BsFillTelephoneFill /> 0489 65 98 28 12</p>
                <p><MdEmail /> silverfork@gmail.com</p>
            </div>
        </div>    
        <hr></hr>
        <p> &copy; the restaurants all rights reserved</p>
    </footer>
  )
}

export default Footer