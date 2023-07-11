import MealCard from "../../components/favouriteMeals/MealCard"
import Navbar from "../../components/navbar/Navbar"
import {BiDrink} from 'react-icons/bi'
import {TbSoup} from 'react-icons/tb'
import {GiSpoon} from 'react-icons/gi'
import {TbSalad} from 'react-icons/tb'
import {GiFruitBowl} from 'react-icons/gi'
import './Styles.css'
import { useState,useEffect } from "react" ;
import { getDishesMain,getDishesDessert,getDishesDrinks,getDishesSalades,getDishesSoups } from "../../api/apis"
import LoadingCirle from "../../components/loading circle/LoadingCirle"
// path : https://ik.imagekit.io/iyboxrxkt/path/to/myimage.jpg
function Meals() {
  const [myData,setmyData] = useState([])

  const [activeKey,setActiveKey] = useState(0) ;
  useEffect(()=>{
    switch(activeKey){
      case 0 :
        getDishesSoups().then((res)=>{
          setmyData(res.data)
        }).catch((e)=>console.log(e)) ;
      break ;  
      case  1:
        getDishesMain().then((res)=>{
          setmyData(res.data)
        }).catch((e)=>console.log(e)) ;
      break ; 
      case 2 :
        getDishesSalades().then((res)=>{
          setmyData(res.data)
        }).catch((e)=>console.log(e)) ;
      break ;  
      case  3:
        getDishesDessert().then((res)=>{
          setmyData(res.data)
        }).catch((e)=>console.log(e)) ;
      break ;  
      case 4 :
        getDishesDrinks().then((res)=>{
          setmyData(res.data)
        }).catch((e)=>console.log(e)) ;
      break ;  
     
    }
   
  
  },[activeKey])
  

  return (
    <div className="meals">
   
      <Navbar />
      <h1 className="mealstitle">our meals</h1>
      <div className="mealsCategeories" >
        <div className={(activeKey == 0)? "mealCategeorieactive":"mealCategeorie"} onClick={()=>{setmyData([]) ;setActiveKey(0)}}>
          <h1 className={(activeKey == 0)?"mealiconactive":"mealicon"}><TbSoup/></h1>
          <p>soups</p>
        </div>
        <div className={(activeKey == 1)? "mealCategeorieactive":"mealCategeorie"}onClick={()=>{setmyData([]) ;setActiveKey(1)}}>
          <h1 className={(activeKey == 1)?"mealiconactive":"mealicon"}><GiSpoon/></h1>
          <p>main</p>
        </div>

        <div className={(activeKey == 2)? "mealCategeorieactive":"mealCategeorie"} onClick={()=>{setmyData([]) ;setActiveKey(2)}}>
          <h1 className={(activeKey == 2)?"mealiconactive":"mealicon"}><TbSalad/></h1>
          <p>salades</p>
        </div>

        <div className={(activeKey == 3)? "mealCategeorieactive":"mealCategeorie"} onClick={()=>{setmyData([]) ;setActiveKey(3)}}>
          <h1 className={(activeKey == 3)?"mealiconactive":"mealicon"}><GiFruitBowl/></h1>
          <p>dessert</p>
        </div>

        <div className={(activeKey == 4)? "mealCategeorieactive":"mealCategeorie"} onClick={()=>{setmyData([]) ;setActiveKey(4)}}>
          <h1 className={(activeKey == 4)?"mealiconactive":"mealicon"}><BiDrink/></h1>
          <p>drinks</p>
        </div>

      </div>
      <div className="mealslist">
        
     {
      (myData == []) ? (<LoadingCirle /> ) : myData.map((e,i)=><MealCard keyy={i} key={i} data={e} />) 
     }
       
      </div>
    </div>
  )
}

export default Meals