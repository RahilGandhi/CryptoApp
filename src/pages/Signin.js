import React, {useState} from 'react'
import { AiFillLock, AiOutlineMail } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth, signin } from '../context/AuthContext'

const Signin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const {signin} = UserAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      console.log('signing in')
      await signin(email, password)
      navigate('/account')
    } catch (e) {
        setError(e.message)
    }
  }

  return (
    <div>
      <div className='max-w-[400px] mx-auto min-h-[600px] px-4 py-20'>
        <h1 className='text-2xl font-bold  '>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className='my-4 '>
            <label >Email : </label>
            <div className='my-2 w-full relative rounded-2xl '>
              <input onChange={(e) => setEmail(e.target.value)} className='w-full p-2 bg-primary border border-input rounded-2xl' type='email' placeholder='Email Id'/>
              <AiOutlineMail className='absolute right-2 top-3 text-gray-400'/>
            </div>
          </div>
          <div>
            <label>Password</label>
            <div className='my-2 w-full relative rounded-2xl '>
              <input onChange={(e) => setPassword(e.target.value)} type='password' className='w-full p-2 bg-primary border border-input rounded-2xl'/>
              <AiFillLock className='absolute right-2 top-3 text-gray-400'/>
            </div>
          </div>
          <button className='w-full my-4 p-3 bg-button text-btnText rounded-2xl '>Sign In</button>
        </form>
        <p className='my-4'>Dont have an account ? <Link to='/signup' className='text-blue-500'>Sign Up</Link></p>
      </div>
    </div>
  )
}

export default Signin