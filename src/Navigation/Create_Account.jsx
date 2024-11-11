import React, { useState } from 'react'
import Navbar from '../main/Navbar'
import Signup from '../main/Signup'
import Login from '../main/Login'
import Footer from '../main/Footer'
import Skip from '../main/Skip'

function Create_Account() {

 

  return (
    <>
    <Navbar/>
    <Skip/>
    <Signup/>
    <Footer/>
    </>
  )
}

export default Create_Account

/*
 const [flag_user, setflag_user] = useState(true);

  function select (props) {
    if(props==true){
      <Login/>
    }else if(props == false){
      <Signup/>
    }
  }
*/