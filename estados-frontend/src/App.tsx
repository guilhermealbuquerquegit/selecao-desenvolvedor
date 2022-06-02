import Estados from './pages/Estados'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Hello from './pages/Hello'
import Populacao from './pages/Populacao'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/estados" element={<Estados />} />
        <Route path="/populacao" element={<Populacao />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
