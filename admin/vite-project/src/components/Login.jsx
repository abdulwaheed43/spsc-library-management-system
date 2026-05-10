import React, { useState } from 'react'
import axios from 'axios'
import { backendUrl } from '../config'
import { toast } from 'react-toastify'



const Login = ({ setToken }) => {
  console.log(backendUrl,"Backend URL");

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmitHandler = async (e) => {
   try {
     e.preventDefault()
    const response = await axios.post(`${backendUrl}/api/user/admin`, {email,password})
     if(response.data.success){
      setToken(response.data.token)
     }else{
      toast.error(response.data.message)
     }
   } catch (error) {
    console.log(error)
     toast.error(error.message)
    
   }
   
  }

  return (
    <div className="min-h-screen flex items-center justify-center w-full">
      <div className="bg-black shadow-md rounded-lg px-8 py-6 max-w-md">
        <h1 className="text-2xl text-[#06B6D4] font-bold mb-4">Admin Panel</h1>

        <form onSubmit={onSubmitHandler}>
          <div className="mb-3 min-w-72">
            <p className="text-sm font-medium text-[#06B6D4] mb-2">
              Email Address
            </p>
          <input
  type="email"
  placeholder="your@gmail.com"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="rounded-md w-[300px] px-3 py-2 bg-black text-[#06B6D4] placeholder:text-[#06B6D4] border border-[#06B6D4] outline-none focus:border-[#06B6D4]"
  required
/>
          </div>

          <div>
            <p className="text-sm font-medium text-[#06B6D4] mb-2">
              Password
            </p>
<input
  type="password"
  placeholder="enter your password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  className="rounded-md w-[300px] mb-10 px-3 py-2 bg-black text-[#06B6D4] placeholder:text-[#06B6D4] border border-[#06B6D4] outline-none focus:outline-none focus:ring-0 focus:border-[#06B6D4]"
  required
/>
          </div>

          <button
            type="submit"
            className="mt-2 w-full py-2 px-4 rounded-full text-black bg-[#06B6D4]"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
