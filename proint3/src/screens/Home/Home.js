import React, {Component} from "react";
import CardsContainer from "../../Components/CardsContainer/CardsContainer";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

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
        <p> La mejor plataforma para ver tus peliculas favoritas </p>
            <section className="titulo_categorias"><h1 className="nombre_categoria">Peliculas mas populares</h1><Link to='/VerPopulares'><button className="ver_mas">Ver mas...</button></Link></section>
            <CardsContainer></CardsContainer>
            <section className="titulo_categorias"><h1 className="nombre_categoria">Peliculas en tendencia</h1><Link to='/VerTendencia'><button className="ver_mas">Ver mas...</button></Link></section>
            
      </React.Fragment>
    )
  }
}
export default Home;