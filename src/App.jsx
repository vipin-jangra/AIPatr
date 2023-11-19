import './App.css'
import Cards from './Components/Cards/Cards'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'

function App() {
  return (
    <div className="root">
        <Navbar />
        <div className='components-continer'>
          <Hero />
          <Cards />

        </div>
    </div>
  )
}

export default App
