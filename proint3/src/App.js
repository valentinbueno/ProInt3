import React from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import {Route} from 'react-router-dom';
import { Switch } from "react-router-dom";
import Home from "./screens/Home/Home";
import DetallePelicula from "./screens/DetallePelicula/DetallePelicula";
import Favorites from "./screens/Favorites/Favorites";
import Loader from "./Components/Loader/Loader";
import NoEncontrada from "./Components/NoEncontrada/NoEncontrada";
import ResultadoBusqueda from "./screens/ResultadoBusqueda/ResultadoBusqueda";
import VerPopulares from "./screens/VerPopulares/VerPopulares";
import VerEstrenos from "./screens/VerEstrenos/VerEstrenos";

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Switch>
        <Route path="/" component={Home} exact={true}/>
        <Route path="/DetallePelicula/id/:id" component={DetallePelicula} exact={true}/>
        <Route path="/Favorites" component={Favorites} />
        <Route path="/Loader" component={Loader}/>
        <Route path="/ResultadoBusqueda" component={ResultadoBusqueda}/>
        <Route path="/VerPopulares" component={VerPopulares} exact={true}/>
        <Route path="/VerEstrenos" component={VerEstrenos} exact={true}/>
        <Route path = "/searchResults/:search" component = {ResultadoBusqueda}/>
        <Route path="" component={NoEncontrada}/>
      </Switch>
      <Footer/>
    </React.Fragment>
  );
}

export default App