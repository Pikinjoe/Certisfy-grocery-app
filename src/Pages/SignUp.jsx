import { useState } from 'react'
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import Welcome from '../assets/Welcome.webp'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';



const SignUp = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [verifyPassword, setVerifyPassword] = useState('')
    const [passwordError, setPasswordError] = useState(false)
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const capitalizeWords = (str) => {
        if (!str) return str
          return str.toLowerCase().split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    }

    const usernameChange = (e) => {
        const inputValue = e.target.value.trim()
        setUsername(capitalizeWords(inputValue))
    }

    
   
    const handleSubmit = (e) =>{
        e.preventDefault()
        setLoading(true)

        if (password === verifyPassword) {
            
            let allData = { username, email, password, verifyPassword}
            
            fetch('http://localhost:8000/user',{
                method: 'POST',
                headers:{'content-type':'application/json'},
                body:JSON.stringify(allData)
            }).then((res) => (
                toast.success('Registered successfully.'),
                navigate('/login')
            )).catch((err) => (
                toast.error('failed:' + err.message)
            )).finally(() => setLoading(false))
        } else {
            setPasswordError(true)
        }
    }
    return (
        <div className=' bg-green-50 h-screen py-4 overflow-hidden'>
            <div className='w-4/5 mx-auto h-screen flex flex-col gap-3 sm:gap-7 sm:flex-row sm:items-center sm:w-11/12'>
                <div className=' flex flex-col gap-2 sm:w-1/2'>
                    <img src={Welcome} alt="placeholder image" className='size-36 rounded sm:size-full'/>
                    <h3 className='font-bold capitalize text-lg'>getting started</h3>
                    <p className='text-primary-text w-[60%] text-wrap sm:w-full'>Welcome to Certisfy. Let's get you your profile</p>
                </div>
                <div className='sm:w-1/2'>
                    <form className='flex flex-col gap-5 sm:w-4/5 sm:mx-auto' onSubmit={handleSubmit}>
                       
                        <div className='bg-secondary p-4 rounded relative flex items-center gap-2'>
                            <FaUser className='size-4' />
                            <input type="text" required placeholder=' Username' onChange={usernameChange} value={username} className='outline-0' />
                        </div>
                        <div className='bg-secondary p-4 rounded relative flex items-center gap-2'>
                            <MdEmail className='size-4' />
                            <input type="email" required placeholder='Email' onChange={(e) => setEmail(e.target.value.trim())} value={email} className='outline-0' /> 
                        </div>
                        <div className='bg-secondary p-4 rounded relative flex items-center gap-2'>
                            <FaLock className='size-4' />
                            <input type="password" required placeholder='Password' onChange={(e) => setPassword(e.target.value.trim())} value={password} className='outline-0' />
                            <FaEyeSlash className='size-4 ml-auto ' />
                        </div>
                        <div className='bg-secondary p-4 rounded relative flex items-center gap-2'>
                            <FaLock className='size-4 ' />
                            <input type="password" required placeholder='Confirm Password' onChange={(e) => setVerifyPassword(e.target.value.trim())} value={verifyPassword} className='outline-0' />
                            <FaEyeSlash className='size-4 ml-auto' />
                        </div>
                            <p className={passwordError ? `text-red-500` : `hidden`}>passwords does not match</p>
                        
                        <button className='bg-primary p-4 rounded text-white cursor-pointer' type='submit' disabled={loading}>{loading ? 'Creating account' : 'Create Account'}</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp
