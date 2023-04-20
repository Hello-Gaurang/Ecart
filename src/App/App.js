import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import Dashboard from '../Container/Dashboard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ECart from '../Container/Ecart'
import Logic from '../Container/Logic'

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/ecart" element={<ECart />} />
          <Route exact path="/logic" element={<Logic />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
