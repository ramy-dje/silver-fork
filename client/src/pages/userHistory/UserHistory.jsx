import {useEffect,useState} from 'react'
import'./Styles.css'
import Navbar from '../../components/navbar/Navbar'
import { viewBookingTable } from '../../api/apis'
import {motion} from 'framer-motion'

function UserHistory() {
    const [myData,setMyData] = useState([]);
    useEffect(()=>{
        viewBookingTable(sessionStorage.getItem('profile')).then((e)=>{console.log(e.data);setMyData(e.data)}).catch((e)=>console.log(e));
    },[])
  return (
    <div className='userhistory'>
        <Navbar />
        <div className='useractivities'>
            <motion.h1 animate={{translateX:[1500,0]}} transition={{duration:0.4}}>reservation history </motion.h1>
            <div className='useractivitiescontainer'>
                {
                    myData && myData.map((e,i)=>(
                        <motion.div animate={{scale:[0,1]}} transition={{delay:0.3*i,duration:0.2}} key={i} className='useractivity'>
                            <p>name : {e.name} </p>
                            <p>adultsNumber :{e.childrenNumber} </p>
                            <p>children Number : {e.adultsNumber}</p>
                            <p>day : {e.day} </p>
                            <p>time : {e.time}</p>
                        </motion.div>))
                }   
            </div>   
           
        </div>


    </div>
  )
}

export default UserHistory