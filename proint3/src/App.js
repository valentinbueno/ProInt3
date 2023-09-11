import React from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import {Route} from 'react-router-dom';
import { Switch } from "react-router-dom";
import Home from "./screens/Home/Home";
import DetallePelicula from "./screens/DetallePelicula/DetallePelicula";
import DetalleSerie from "./screens/DetalleSerie/DetalleSerie";
import Favorites from "./screens/Favorites/Favorites";
import Loader from "./screens/Loader/Loader";
import NoEncontrada from "./screens/NoEncontrada/NoEncontrada";
import ResultadoBusqueda from "./screens/ResultadoBusqueda/ResultadoBusqueda";
import VerPopulares from "./screens/VerPopulares/VerPopulares";
import VerTendencia from "./screens/VerTendencia/VerTendencia";

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Switch>
        <Route path="/" component={Home} exact={true}/>
        <Route path="/DetallePelicula/id/:id" component={DetallePelicula} exact={true}/>
        <Route path="/DetalleSerie/id/:id" component={DetalleSerie} exact={true}/>
        <Route path="/Favorites" component={Favorites} />
        <Route path="/Loader" component={Loader}/>
        <Route path="" component={NoEncontrada}/>
        <Route path="/ResultadoBusqueda" component={ResultadoBusqueda}/>
        <Route path="/VerPopulares" component={VerPopulares} exact={true}/>
        <Route path="/VerTendencia" component={VerTendencia} exact={true}/>
      </Switch>
      <Footer/>
    </React.Fragment>
  );
}

export default App