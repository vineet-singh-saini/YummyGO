import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import Menu from '../../Components/Menu/Menu'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'
import Footer from '../../Components/Footer/Footer'
import AppDownload from '../../Components/AppDownload/AppDownload'

const Home = () => {

  const [category , setCategory] = useState('All');

  return (
    <>
      <Header/>
      <Menu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <AppDownload/>
      <Footer/>
    </>
  )
}

export default Home