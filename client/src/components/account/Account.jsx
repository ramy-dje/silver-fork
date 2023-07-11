import { useState } from "react"
import './Styles.css'
import { signUp ,logIn} from "../../api/apis";
import decode from 'jwt-decode'
import Navbar from '../navbar/Navbar'
import { useNavigate } from "react-router-dom";
import {motion} from 'framer-motion'

function Signup() {
  const [signup,setSignup] = useState(true) ;
  const [userData,setUserData] = useState({username:'',email:'',password:'',phoneNumber: null});
  const [errorMessage,setErrorMessage] = useState('');
  const navigation = useNavigate();
 async function handleLogin(userData){
  console.log(565)
    const {data} =await  logIn(userData) ;
    console.log(data)
    if(data.message)
      setErrorMessage(data.message)
    const decodededData = decode(data);
    sessionStorage.setItem('profile',decodededData.username)
    navigation('/meals',{replace:true})
  }
  async function handleSignUp(userData){
    const {data} =await  signUp(userData) ;
    console.log(data)
    if(data.message)
      setErrorMessage(data.message)
    const decodededData = decode(data);
    sessionStorage.setItem('profile',decodededData.username)
    navigation('/meals',{replace:true})
  }
 
  return (
    <section className="accountContainer" >
          <Navbar />
              { (signup) ?(   
              <div className="signup">
                  <div className="statebtns">
                    <button className={(signup)?'unactive' : "active"} onClick={()=>{setSignup(false);setErrorMessage('')}}>login</button> 
                    <button className={(signup)?'active' : "unactive"} onClick={()=>{setSignup(true);setErrorMessage('')}}>signup</button>         
                  </div>
                  <h1 className="title">SIGN UP</h1>
                  <form>
                      <motion.input animate={{translateY:[-1500,0]}} transition={{duration:0.4}} type="text" placeholder="username" value={userData.username}  
                        onChange={(e)=>setUserData({...userData,username:e.target.value})}  />
                      <motion.input animate={{translateY:[1500,0]}} transition={{duration:0.55}} type="email" placeholder="email" value={userData.email} 
                        onChange={(e)=>setUserData({...userData,email:e.target.value})} />
                      <motion.input animate={{translateY:[-1500,0]}} transition={{duration:0.6}} type="text" placeholder="phone number" value={userData.phoneNumber}  
                        onChange={(e)=>setUserData({...userData,phoneNumber:e.target.value})}  />  
                      <motion.input animate={{translateY:[1500,0]}} transition={{duration:0.7}} type="password" placeholder="password" value={userData.password} 
                        onChange={(e)=>setUserData({...userData,password:e.target.value})} />
                        {errorMessage && <p style={{color:'red'}}>{errorMessage}</p>}
                      <motion.button animate={{translateY:[1500,0]}} transition={{duration:0.85}} onClick={(e)=>{e.preventDefault();handleSignUp(userData)}} >sign up</motion.button>
                  </form>
                
                </div>):(
                    <div className="login">
                      <div className="statebtns">
                        <button className={(signup)?'unactive' : "active"} onClick={()=>{setSignup(false);setErrorMessage('')}}>login</button> 
                        <button className={(signup)?'active' : "unactive"} onClick={()=>{setSignup(true);setErrorMessage('')}}>signup</button>         
                      </div>
                    <h1  className="title">LOGIN</h1>
                    <form>
                        <motion.input animate={{translateY:[1500,0]}} transition={{duration:0.4}} type="text" placeholder="username" value={userData.username}
                            onChange={(e)=>setUserData({...userData,username:e.target.value})}/>
                        <motion.input animate={{translateY:[1500,0]}} transition={{duration:0.4 ,delay:0.15}} type="password" placeholder="password" value={userData.password}
                              onChange={(e)=>setUserData({...userData,password:e.target.value})}/>
                             {errorMessage &&  <p style={{color:'red'}}>{errorMessage}</p>}
                        <motion.button animate={{translateY:[1500,0]}} transition={{duration:0.4,delay:0.3}} onClick={(e)=>{e.preventDefault(),handleLogin(userData)}}>login</motion.button>
                    </form>
              
                  </div>
                )
              }

          
         
    </section>
  )
}

export default Signup