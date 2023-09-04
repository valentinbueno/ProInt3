import Categorias from "./Components/Categorias/Categorias";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./screens/Home/Home";

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Switch>
        <Route path="/" component={Home}/>
        <Route path="/DetallePelicula" component={}/>
        <Route path="/DetalleSerie" component={}/>
        <Route path="/Favorites" component={}/>
        <Route path="/Loader" component={}/>
        <Route path="/NoEncontrada" component={}/>
        <Route path="/ResultadoBusqueda" component={}/>
        <Route path="/VerPopulares" component={}/>
        <Route path="/VerTendencia" component={}/>
      </Switch>
      <Footer/>
    </React.Fragment>
  );
}

export default App