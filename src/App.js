import React from 'react' 
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet, 
} from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Courses from './pages/Courses';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
  return (
    <>
    <Header/>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/freefood' element={<Courses/>}/>
      </Routes>
    </Router>
    <Footer/>
    </>
  )
}

export default App
