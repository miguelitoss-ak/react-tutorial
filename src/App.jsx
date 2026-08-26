import { ThemeProvider } from './contexts/ThemeContext' 
import './App.css'
import ThemeToggleButton from './components/ThemeToggleButton'

function App() {
return(
  <ThemeProvider>
    <div>
      <nav>Menu de Navegação</nav>
      <ThemeToggleButton/>
    </div>
  </ThemeProvider>
)
  
}

export default App
