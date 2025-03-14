import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AuthProvider, useAuth } from './AuthContext'
import { ToastContainer } from 'react-toastify'
import Home from './Pages/Home'
import Dashboard from './Dashboard'
import SignUp from './Pages/SignUp'
import Cart from './Pages/Cart'
import History from './Pages/History'
import Login from './Pages/Login'
import Navlink from './Navlink'
import Footer from './Footer'
import Categories from './Pages/Categories'
import Favorites from './Pages/Favorites'
import ProductDetails from './Pages/ProductDetails'


function MainContent() {
  const location = useLocation();
  const pathsWithoutNavlink = ["/", "/signup", "/login", "/cart", "/product/:id"];
  const pathsWithoutFooter = ["/", "/signup", "/login", "/cart"];
  return (
    <div className='h-screen overflow-y-scroll'>
      {pathsWithoutNavlink.includes(location.pathname) ? null : <Navlink />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<ProtectedRoute component={Dashboard} />} />
        <Route path="/cart" element={<ProtectedRoute component={Cart} />} />
        <Route path="/history" element={<ProtectedRoute component={History} />} />
        <Route path="/favorites" element={<ProtectedRoute component={Favorites} />} />
        <Route path="/categories" element={<ProtectedRoute component={Categories} />} />
        <Route path="/product/:id" element={<ProtectedRoute component={ProductDetails} />} />
      </Routes>
      {pathsWithoutFooter.includes(location.pathname) ? null : <Footer />}
    </div>
  )
}
function App() {

  return (
   <AuthProvider>
      <Router>
        <MainContent />
        <ToastContainer />
      </Router>
    </AuthProvider>
  )
}

// ProtectedRoute component to protect authenticated routes
const ProtectedRoute = ({ component: Component }) => {
  const { user, loading } = useAuth();
  if (loading) return <div className="text-center min-h-screen flex justify-center items-center">Loading...</div>

  return user ? <Component /> : <Navigate to='/Login' />
}

export default App
