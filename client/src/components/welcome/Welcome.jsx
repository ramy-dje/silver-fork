import './styles.css'
import { useState,useEffect } from 'react'
import {color, motion} from 'framer-motion'
import {Link} from 'react-router-dom'


function Welcome() {
    
    const [loopnum,setLoopNum]=useState(0);
    const [isDeleting,setIsDeleting]=useState(false);
    const [toRotate,setToRotate]=useState([{name:"main dishes  ",image:"https://ik.imagekit.io/iyboxrxkt/images/heavy/St__Louis_Ribs_with_Maple_BBQ_Sauce.jpg?updatedAt=1683545838748"},
    {name:"salad kinds  ",image:"https://ik.imagekit.io/iyboxrxkt/images/salad/salade_nicoise.png?updatedAt=1683545835851"},
    {name:"sweet dessert",image:"https://ik.imagekit.io/iyboxrxkt/images/dessert/apple_pie.png?updatedAt=1683545845166"},
    {name:"lovely soups ",image:"https://ik.imagekit.io/iyboxrxkt/images/soups/Bacon-n-Baked-Potato-Soup-2414_640x428.jpg?updatedAt=1683545832216"}]);
    const [text,setText] = useState('');
    const period=1000;
    const [delta,setDelta]=useState(100);
    const [index, setIndex] = useState(1);
    useEffect(()=>{
        let ticker = setInterval(()=>tick(),delta)
        return ()=> clearInterval(ticker)
    },[text])
    const tick=()=>{
        let i=loopnum % toRotate.length;
        let fullText=toRotate[i].name;
        let updatedText=isDeleting ? fullText.substring(0,text.length -1) :fullText.substring(0,text.length +1);
        setText(updatedText);
        if(isDeleting){
             setDelta(150)
        }
        if(!isDeleting && updatedText ===fullText ){
            setIsDeleting(true);
            setDelta(period);
           setIndex(prevIndex => prevIndex - 1);

        }else if(isDeleting && updatedText ===''){
            setIsDeleting(false);
            setLoopNum(loopnum+1);
            setDelta(200);
            setIndex(1);
        }else{
            setIndex(prevIndex => prevIndex + 1);
        }

    }
    
  return (
    <section className="welcome" id='home'>
        <div className='text'>
            <h1>we are here to serve you with the most <br></br> elegant {text}</h1>
            <motion.button whileHover={{rotate:[0,50,-50,0]}} transition={{duration:0.5}} >
                <Link to={sessionStorage.getItem('profile') ? '/meals' : '/account'} className='Link'>order now</Link>
            </motion.button>
        </div> 
        
        <img  className="img" src={toRotate[loopnum % toRotate.length].image} />
    </section>
  )
}

export default Welcome