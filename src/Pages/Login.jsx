import { useState,  } from 'react'
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import MarketStall from '../assets/MarketStall.png'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    
    const applyLogin = (e) => {
        e.preventDefault()

        setLoading(true)

        fetch(`http://localhost:8000/user?email=${email}`).then((res) => {
            if (!res.ok) {
                return res.text().then((text) => {
                    throw new Error(text || 'User not found')
                });
            }
            return res.json()
        }).then((response) => {
            if (!Array.isArray(response) || response.length === 0) {
                toast.error('User not found')
            } else {
                const user = response[0]
                if (user.password === password) {
                    toast.success('Login Successfully')
                    navigate('/dashboard')
                } else {
                    toast.error('Enter valid password')
                }
            }
        }).catch((error) => {
            toast.error(error.message ||'User not found or server error')
        }).finally(() => setLoading(false))
        
    }
  return (
    <div className=' bg-green-50 h-screen py-4 overflow-hidden'>
        <div className='w-4/5 mx-auto h-screen flex flex-col gap-3 sm:gap-7 sm:flex-row sm:items-center sm:w-11/12'>
            <div className='h-[60%] w-full sm:w-1/2 mb-4 sm:h-4/5'> 
                <img src={MarketStall} alt="A happy shopper" className='h-full w-full object-cover object-center rounded-b-[50%] sm:rounded-b-none ' />
            </div>
            <div className='sm:w-1/2'>
                <form className='flex flex-col gap-5 lg:w-4/5 sm:mx-auto' onSubmit={applyLogin}>
                    <div className='bg-secondary p-4 rounded relative flex items-center gap-2'>
                        <MdEmail className='size-4' />
                        <input type="email" required placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} className='outline-0' /> 
                    </div>
                    <div className='bg-secondary p-4 rounded relative flex items-center gap-2'>
                        <FaLock className='size-4' />
                        <input type="password" required placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} className='outline-0' />
                        <FaEyeSlash className='size-4 ml-auto ' />
                    </div>
                    <button className='bg-primary p-4 rounded text-white' type='submit' disabled={loading}>{loading ? 'Logging in...' : 'Login'}</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login
