import React, {Component} from "react";
import CardsContainer from "../../Components/CardsContainer/CardsContainer";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import VerPopulares from "../VerPopulares/VerPopulares";
import Search from "../../Components/Search/search"

class Home extends Component {
  constructor(){
    super();
    this.state = {
      peliculas: [],
    };
  }
  render(){
    return(
      <React.Fragment>
        <Search/>
        <p> La mejor plataforma para ver tus peliculas favoritas </p>
       
            <section className="titulo_categorias"><h1 className="nombre_categoria">Peliculas mas populares</h1><Link to='/VerPopulares'><button className="ver_mas">Ver mas...</button></Link></section>
            <CardsContainer url="https://api.themoviedb.org/3/movie/top_rated?api_key=5af2599bc48eedc0c872d98ac992b8e3"></CardsContainer>
            <section className="titulo_categorias"><h1 className="nombre_categoria">Peliculas a estrenar</h1><Link to='/VerEstrenos'><button className="ver_mas">Ver mas...</button></Link></section>
            <CardsContainer url="https://api.themoviedb.org/3/movie/upcoming?api_key=5af2599bc48eedc0c872d98ac992b8e3"></CardsContainer>
      </React.Fragment>
    )
  }
}
export default Home;