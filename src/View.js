import React from 'react'
import Navbar from './Pages/Navigation/Nav'
import Herosection from './Pages/Hero/Hero'
import Service from './Pages/Service/Service'
import Body from './Pages/Body/Body'
// import Product from './Pages/Product/Product'
import Display from './Pages/Display/Display'
import Card from './Pages/Card/Card'
import Footer from './Pages/Footer/Footer'


function View() {
  return (
    <div>
      <Navbar/>
      <Herosection/>
      <Service/>
      <Body/>
      {/* <Product/> */}
      <Display/>
      <Card/>
      <Footer/>
    </div>
  )
}

export default View
