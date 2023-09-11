import React, {Component} from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class CardMovies extends Component {
    constructor(props) {
      super(props);
      this.state = {
        textoFavoritos: "Agregar a favoritos",
      };
    }

    componentDidMount() {
        let peliculasConseguidas = localStorage.getItem("pelicula");
        if (peliculasConseguidas === null) {
          this.setState({
            textoFavoritos: "Agregar a favoritos",
          });
        } else if (peliculasConseguidas.includes(this.props.datosPelicula.id)) {
          this.setState({
            textoFavoritos: "Quitar de favoritos",
          });
        }
    }

    agregarQuitarFavoritos() {
        let arrayPeliculas = [this.props.datosPelicula.id];
        let peliculasConseguidas = localStorage.getItem("pelicula");
        let peliculasFinales = "";
    
        if (peliculasConseguidas === null) {
          peliculasConseguidas = [];
          peliculasFinales = JSON.stringify(arrayPeliculas);
          this.setState({
            textoFavoritos: "Quitar de favoritos",
          });
        }
    
        let arrayPeliculasFinales = "";
    
        if (peliculasConseguidas.length !== 0) {
          let arrayPeliculasConseguidas = JSON.parse(peliculasConseguidas);
          arrayPeliculasFinales = arrayPeliculasConseguidas.concat(arrayPeliculas);
          peliculasFinales = JSON.stringify(arrayPeliculasFinales);
          this.setState({
            textoFavoritos: "Quitar de favoritos",
          });
        }
    
        if (peliculasConseguidas.includes(this.props.datosPelicula.id)) {
          let arrayPeliculasConseguidas = JSON.parse(peliculasConseguidas);
          arrayPeliculasFinales = arrayPeliculasConseguidas.filter(
            (item) => item !== this.props.datosPelicula.id
          );
          peliculasFinales = JSON.stringify(arrayPeliculasFinales);
          this.setState({
            textoFavoritos: "Agregar a favoritos",
          });
        }
    
        localStorage.setItem("pelicula", peliculasFinales);
    }

    render() {



        return (
          <article className="contendor_pelicula">
            <div className="portada_detalle">
            <h3>{this.props.datosPelicula.title}</h3>
            <Link to={`/Detail/${this.props.datosPelicula.id}`}>
              <img className="poster posterEvento" src={`https://image.tmdb.org/t/p/w500/${this.props.datosPelicula.poster_path}`} alt="imagenPelicula" />
            </Link>
            {/* <p className="linkADetalle" onClick={() => this.props.s(this.props.datosPelicula.id)}>
              Ver más
              </p> */}
              <Link to={`/Detail/${this.props.datosPelicula.id}`}>
              
              <p className="linkADetalle">
              Ver más
              </p>
            </Link>
            <p className="linkADetalle" onClick={() => this.props.borrar(this.props.datosPelicula.id)}>
              Borrar
              </p>
              </div>

            <button className="linkADetalle" onClick={() => this.agregarQuitarFavoritos(this.props.datosPelicula.id)}>
              {this.state.textoFavoritos}
            </button>
          </article>
        );
    }
}



export default CardMovies;


//santiago

// import React, {Component} from 'react';
// import { Link } from "react-router-dom";


// class Card extends Component {
// //     constructor(props) {
// //         super(props);
// //         this.state = {}
// //     };
    
// //     render(){
// //         /* console.log(this.props.contentMovie); */
// //         return (
            
// //             <article className='pelicula'>
// //                 {/* {console.log(this.props.contentMovie.title)} */}
                
// //                 <Link to={`/detallePelicula/id/${this.props.contentMovie.id}`}>
// //                 <img className='poster posterEvento' src= {imagen + this.props.contentMovie.poster_path}  alt={this.props.contentMovie.title}/>
// //                 </Link>

// //                 <Link to={`/detallePelicula/id/${this.props.contentMovie.id}`}>
// //                 {this.props.contentMovie.title} 
// //                 </Link>
// //                 {/* <Link to={`/detallePelicula/id/${this.props.contentMovie.id}`}>
// //                 {this.props.contentMovie.overview} 
// //                 </a> */}
// //             </article>
            
// //         )
// //     }
// }
//  export default Card

