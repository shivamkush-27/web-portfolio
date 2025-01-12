import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Nav from './components/Nav';
import Home from './pages/Home';
import Footer from './components/Footer';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Work from './pages/Work';

function App() {

  return (
    <>
      <BrowserRouter>
      <div className='w-full xl:px-20 lg:px-12 px-8 bg-gray-900 text-white'>
    <Nav />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/work' element={<Work />} />
            <Route path='/services' element={<Services />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
