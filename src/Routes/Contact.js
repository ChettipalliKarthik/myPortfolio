import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import HeroImg from '../Components/HeroImg2';
import Form from "../Components/Form.js"
const Contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg heading="CONTACT."text="Let's have a chat"/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact
