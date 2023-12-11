
import './App.css'
import Copy from './components/Copy'
import Footer from './components/Footer.'
import About from './pages/About'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import Header from './pages/Header'
import Vehicles from './pages/Vehicles'

function App() {


  return (
    <>
      <div className='w-[100%]'>
        <Header/>
        <About/>
        <Vehicles/>
        <Gallery/>
        <Contact/>
        <Footer/>
        <Copy/>
      </div>
    </>
  )
}

export default App
