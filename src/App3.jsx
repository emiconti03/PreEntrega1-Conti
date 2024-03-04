import './App.css'
import ButtonComponent from './components/ButtonComponent';
import NavBar from './components/NavBar';

function App() {
/*
const caracteristicas = [
  {
    color: 'red',
    texto: 'contacto',
  },
  {
    color: 'green',
    texto: 'productos',
  },
  {
    color: 'blue',
    texto: 'nosotros',
  },
]
*/
  return (
  <>
  
    <h1>Despensa Don Lorenzo</h1>
    <NavBar />
    <img id='don-lorenzo' src='../donlorenzo.jpg' />

    <ButtonComponent 
      /*color={caracteristicas[0].color} 
      texto={caracteristicas[0].texto} */
    />
    <ButtonComponent 
      /*color={caracteristicas[1].color} 
      texto={caracteristicas[1].texto}  */
    />
    <ButtonComponent 
      /*color={caracteristicas[2].color} 
      texto={caracteristicas[2].texto}  */
    />

    

  </>
  )
}

export default App
