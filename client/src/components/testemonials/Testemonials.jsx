import Card from './Card'
import {AiOutlineLeft,AiOutlineRight} from 'react-icons/ai'
import { useEffect,useState } from 'react';
import { getClientTestimonials } from '../../api/apis';
function Testemonials() {

    const [myData,setMyData] = useState([]);
    const theData=[1,2,3,4,5,6];
    const [position,setPosition] = useState(0);
    function handleMoveToRight(){
        if(position < theData.length -1)
          setPosition((pos)=>pos+1)
    }
    function handleMoveToLeft(){
      if(position > 0)
        setPosition((pos)=>pos-1)
  }

  useEffect(()=>{
      getClientTestimonials().then((res)=>setMyData(res.data)  ).catch((e)=>console.log(e))
      
  },[])
  return (
   <section className="testemonial">
        <div className='opinionText'>
          <h1 onClick={()=>setPosition((p)=>p+1)}>what does our clients say ?</h1>
          <p>sdfsd in qblsqn  oehwgfo boureu;oq phghe owqr ofgo uyrpewhf owfu iwoh oureppq yigr iuih ti7wq orbe</p>
       </div>
        <div className='opcontainer'>
          <div className='opinions'>
              { myData && myData.map((element,index)=>(<Card key={index} moveright={handleMoveToRight} moveleft={handleMoveToLeft}  data={element} position={position} index={index}/>))}
            </div>
            <div className='btns'>
                <button className={(position < theData.length -1)?'redButton':''} onClick={handleMoveToRight}><AiOutlineLeft fontSize={40} /></button>
                <button  className={(position > 0)?'redButton':''} onClick={handleMoveToLeft }><AiOutlineRight fontSize={40} /></button>
              </div>
        </div>
         
          
      
         
          
        
        
   </section>
  )
}

export default Testemonials