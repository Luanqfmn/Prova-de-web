import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Characters from './pages/Characters/Characters'
import Lore from './pages/Lore/Lore'
import Map from './pages/Map/Map'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/lore" element={<Lore />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App