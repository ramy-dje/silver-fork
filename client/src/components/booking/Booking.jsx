import NavBar from '../navbar/Navbar.jsx'
import {useState} from 'react'
import './Styles.css'
import { bookTable } from '../../api/apis.js';
import {motion} from 'framer-motion'
function Booking() {
    const months = ["January", "February", "March", "April", "May","June", "July", "August", "September", "October", "November", "December"];
    const date = new Date();
    function createdays(){
        const days = [];
        for( let i = 0 ; i<new Date(2023,date.getMonth(),0).getDate();i++){
            days[i] = i ;
        }
        return days ;
    }
    const [childrenNumber,setChildrenNumber] = useState(0);
    const [adultNumber,setAdultNumber] = useState(0);
    const [chekedDay,setCheckedDay] = useState(null) ;
    const [checkedTime,setCheckedTime] = useState(null);
    const [showBookingAlert,setShowBookingAlert] = useState({state : null ,message:''});
    function verifyBokingInformation(){
        if(!checkedTime && !chekedDay)
            setShowBookingAlert({state:false,message:'set the reservation time and date'})
        else if(!checkedTime)
            setShowBookingAlert({state:false,message:'set the reservation time'})
        else if(!chekedDay)
            setShowBookingAlert({state:false,message:'set the reservation day'})
        else if(childrenNumber == 0 && adultNumber == 0)    
            setShowBookingAlert({state:false,message:'set the guests number'})
        else{
            setShowBookingAlert({state:true,message:'thanks for your reservation'})  

            bookTable({adultsNumber:adultNumber,childrenNumber,time:checkedTime,day:chekedDay,name : sessionStorage.getItem('profile')}) 
        }
             
    }
  return (
    <div className='booking'>
        <NavBar />
        <motion.div className='calender' animate={{translateY:[-1000,0]}} transition={{duration:0.5}}>
            <h2>{months[date.getMonth()]}</h2>
            <div className='days'>
                {
                    createdays().map((e,i)=><button className={(chekedDay == i)?'checkedDay':'day'} key={i} onClick={()=>setCheckedDay(i)}>{e}</button>)
                }
            </div>
            <button className='abort' onClick={()=>setCheckedDay(null)}>abort</button>
        </motion.div>
        <motion.div animate={{translateY:[1000,0]}} transition={{duration:0.5}}>
                <h2>guests</h2>
                <div className='time'>
                    <input  type='time' onChange={(e)=>setCheckedTime(e.target.value)}/>
                </div>
                <div className='guestsInfo'>
                    <div>
                        <h4>adult</h4>
                        <p>after 12</p>
                    </div>
                    <div className='guestsButtons'>
                        <button onClick={()=>setAdultNumber((e)=>e+1)}> + </button>
                        <p>{adultNumber}</p>
                        <button onClick={()=>setAdultNumber((e)=>e > 0 ? e-1 : 0)}> - </button>
                    </div>
                </div>
                <div className='guestsInfo'>
                    <div>
                        <h4>children</h4>
                        <p>before 12</p>
                    </div>
                    <div className='guestsButtons'>
                        <button onClick={()=>setChildrenNumber((e)=> e+1)}> + </button>
                        <p>{childrenNumber}</p>
                        <button onClick={()=>setChildrenNumber((e)=>e > 0 ? e-1 : 0)}> - </button>
                    </div>    
                </div>
                <div className='booknow'>
                    <div>
                        <p>perliamry cost</p>
                        <p>{adultNumber * 100 + childrenNumber * 50} </p>
                    </div>
                    <button onClick={verifyBokingInformation}>book now</button>
                </div>
                 <p className={showBookingAlert.state ? 'bookalertgreen' : 'bookalertred'}>{showBookingAlert.message} </p>
        </motion.div>        
    </div>
  )
}

export default Booking