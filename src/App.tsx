
import './App.css'
import About from './pages/About'
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
      </div>
    </>
  )
}

export default App
