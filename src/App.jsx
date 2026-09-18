import { ThemeProvider } from './contexts/ThemeContext' 
import './App.css'
import ThemeToggleButton from './components/ThemeToggleButton'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import AppTarefas from './pages/Tarefas/AppTarefas'
import Sobre from './pages/Sobre'
import Usuarios from './pages/Usuarios'
import UsuarioDetalhe from './pages/UsuarioDetalhe'

function App() {
return(
  <ThemeProvider>
    <BrowserRouter>
    <div>
      <nav>
        <ul>
          <li><Link to="/" href="" >Home</Link></li>
          <li><Link to="/tarefas" href="/tarefas" >Tarefas</Link></li>
          <li><Link to="/usuarios" href="/usuarios" >Usuarios</Link></li>
          <li><Link to="/sobre" href="/sobre" >Sobre</Link></li>
        </ul>
      </nav>
      <ThemeToggleButton/>
    </div>
    <div>
      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/tarefas" element={<AppTarefas />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/usuarios/:id" element={<UsuarioDetalhe />} />
      </Routes>
    </div>
    </BrowserRouter>  
  </ThemeProvider>
)
  
}

export default App
