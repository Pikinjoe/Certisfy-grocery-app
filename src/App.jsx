import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import Welcome from './Pages/Welcome'
import Home from './Pages/Home'
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'
import Navlink from './Navlink'
import Footer from './Footer'
import Categories from './Pages/Categories'


function MainContent() {
  const location = useLocation();
  const pathsWithoutNavlink = ["/welcome", "/signup", "/login"];
  const pathsWithoutFooter = ["/welcome", "/signup", "/login"];
  return (
    <div className='h-screen overflow-y-scroll'>
      {pathsWithoutNavlink.includes(location.pathname) ? null : <Navlink />}
      <Routes>
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
      {pathsWithoutFooter.includes(location.pathname) ? null : <Footer />}
    </div>
  )
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <ToastContainer></ToastContainer>
      <MainContent />
    </Router>
  )
}

export default App
