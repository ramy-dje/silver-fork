
import Navbar from '../../components/navbar/Navbar'
import Welcome from '../../components/welcome/Welcome'
import Usage from '../../components/usage/Usage'
import Whyus from '../../components/whyus/Whyus'
import FavouriteMeals from '../../components/favouriteMeals/FavouriteMeals'
import Testemonials from '../../components/testemonials/Testemonials'
import Footer from '../../components/footer/Footer'
import RegisterTables from '../../components/registerTable/RegisterTables'
import Account from '../../components/account/Account'
import { useState } from 'react'

function Home() {
  const [model,setModel] = useState(false) ;
  function showModel(){
      setModel(true);
  }
  function closeModel(){
    setModel(false);
  }
  
  return (
    <div >
   
   
      <Navbar />
      <Welcome />
      <Usage /> 
      <Whyus />
      <FavouriteMeals />
      <RegisterTables />
      <Testemonials />
      <Footer />
   
    </div>
)}

export default Home
