import React from 'react'
import Banner from '../../Components/Banner/Banner'
import HomeCategory from '../../Components/HomeCategory/HomeCategory'
import CategoryShowCase from '../../Components/CategoryShowCase/CategoryShowCase'
import Register from '../../Components/Register/Register'
import LocationSpread from '../../Components/LocationSpread/LocationSpread'
import BecomeAMarchant from '../../Components/BecomeAMarchant/BecomeAMarchant'
import AppSection from '../../Components/AppSection/AppSection'
import Sponsors from '../../Components/Sponsors/Sponsors'

const Home = () => {
  return (
    <div>
      <Banner/>
      <HomeCategory />
      <CategoryShowCase />
      <Register />
      <LocationSpread />
      <BecomeAMarchant />
      <AppSection />
      <Sponsors />
    </div>
  )
}

export default Home