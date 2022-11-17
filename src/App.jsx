import './App.css'
import { Footer } from './Components/Footer'
import Titulo from './Components/Título'
import Repositorios from './Components/Repositórios'
import Texto from './Components/Texto'

function App() {
 
  return (
    <div className="App">
      <h1> Projeto S14 </h1>
      <Título
      text="Repositórios GIT"/>

      <Repositorios/>

      <Footer>
        Página criada por Amanda - Futura Desenvolvedora Front-End - Reprograma On20
    </Footer>

    </div>
  )
}

export default App
