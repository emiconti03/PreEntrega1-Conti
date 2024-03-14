import NavBarra from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
    return(
    <>
        <NavBarra />
        <h1>Despensa Don Lorenzo</h1>
        <button>Hola</button>
        <ItemListContainer greeting={'Bienvenidos'} />
    </>
    )
}

export default App;
