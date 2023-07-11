import React from 'react'
import './Styles.css'
import { useParams } from 'react-router-dom'
import Navbar from '../navbar/Navbar';
import { useEffect ,useState} from 'react';
import { getOneDish } from '../../api/apis';
import LoadingCirle from '../loading circle/LoadingCirle';
import { addCommnet } from '../../api/apis';
function DetailPage() {
    const {id} = useParams();
    console.log(id)
    const [myData,setMyData] = useState(null);
    const [comment,setComment] = useState('');
    useEffect(()=>{
      getOneDish(id).then((res)=>{
        setMyData(res.data)
        console.log(res.data)
      }).catch((e)=>console.log(e))   
      

    },[])
  return (
    <>
    <Navbar />

   {myData ?  <div className='detailsPage'>
        <img src={myData.image} className='img' ></img>
        <div className='detailesContainer' >
            <h1 className='dishname'>{myData.name}</h1>
            <p className='dishDiscription'>
               {myData.description}
            </p>
            <div>
                 <div className='addcomment'>
                    <label>leave a comment</label>
                    <textarea onChange={(e)=>setComment(e.target.value)} placeholder='tell us what do you think about our service' required></textarea>
                    <button onClick={()=>addCommnet({data : comment,dishName:myData.name})}>submit</button>
                </div>
                <div className='allcomments'>
                    <h2>comments</h2>
                    {myData.comments.map((e)=><p>- {e}</p>) }
                </div>
            </div>
                

        </div>
    </div> : <LoadingCirle />}
    </>
  )
}

export default DetailPage