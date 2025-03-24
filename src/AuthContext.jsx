import { createContext, useContext, useState, useEffect } from 'react'
import { toast } from 'react-toastify'

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
  // Store logged in user
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)  

  //Check if user is already logged in from local storage
  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setLoading(false)
  }, [])

  //Login function
  const login = (user) => {
    setUser(user)
    localStorage.setItem('user', JSON.stringify(user))
  }

  //Logout function
  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  const updateUser = async (updatedUser) => {
    try {
    setUser(updatedUser)
    localStorage.setItem('user', JSON.stringify(updatedUser))
    const response = await fetch(`http://localhost:8000/user/${user.id}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(updatedUser),
    })
    if (!response.ok) {
      throw new Error('Failed to update user on server')
    }

    const serverUser = await response.json()
    setUser(serverUser)
    localStorage.setItem('user', JSON.stringify(serverUser))
    toast.success('Profile updated successfully!')
  } catch (error) {
    toast.error('Failed to update profile')
    console.error('Error updating user:', error)
  }
}

  return (
    <AuthContext.Provider value={{user, login, logout, loading, updateUser}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)


