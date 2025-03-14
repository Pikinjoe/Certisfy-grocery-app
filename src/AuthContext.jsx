import { createContext, useContext, useState, useEffect } from 'react'

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

  return (
    <AuthContext.Provider value={{user, login, logout, loading}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)


