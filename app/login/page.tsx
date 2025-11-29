"use client"
import React, { useState } from 'react'

import Container from '../components/container'
import axios from 'axios'
import Cookie from 'js-cookie'
import { redirect } from 'next/navigation'
function Login () {

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const handleLogin = () => {
  //  const data = axios({
     //       url: "/login",
      //      method: "POST",
     //       data: {
    //            username: userName,
        //        password: password
     //       }
   //     })
const response = {
token : "it should be the the reponse",
expire : 7,
}

Cookie.set("token" , response.token , {expires : response.expire})
redirect("/panelAdmin")

 }





    return (
        <div className='bg-gray-800 rounded-2xl p-24'>

            <Container>
                <div className=' flex flex-col w-72 mx-auto'>
                    Welcome
                    <input onChange={(e) => setUserName(e.target.value)} type="text" className="py-3 mt-3" placeholder='Add auser name' />
                    <input onChange={(e) => setPassword(e.target.value)} type="password" className="mt-4 mb-6" placeholder='Your password' />


                    <button onClick={handleLogin}>Submit</button>
                </div>
            </Container>
        </div>

    )
}

export default Login