import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'
import LogIn from './pages/LogIn'


function App() {
 
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<LogIn/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
  </BrowserRouter>
  
  )
}

export default App
