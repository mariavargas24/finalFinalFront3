import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Context from './Context/Context'
import Detail from './Pages/Detail'
import Favs from './Pages/Favs'
import Contact from './Pages/Contact'
import Home from './Pages/Home'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/favs' element={<Favs/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='*' element={<h1>Page not found - Error 404</h1>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
