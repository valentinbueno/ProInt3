import React, {Component} from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class CardPopMovies extends Component {
    constructor(props) {
      super(props);
      this.state = {
        textoFavoritos: "Agregar a favoritos",
        textoDescripcion: "Descripcion"
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
    // Falta completar el tema de favoritos, ver clase de ale devuelta xq copie pero no termine todo
    mostrar_descripcion(){
      if(this.state.description === false){
          this.setState({
              description:true,
              textoDescripcion:"Ocultar"
          })
      }
      else{
          this.setState({
              description:false,
              textoDescripcion:"Descripcion"
          })
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
 // Falta completar el tema de favoritos, ver clase de ale devuelta xq copie pero no termine todo
    render() {
      
        return (
          <article className="contenedor_pelicula">
            <div className="portada_detalle">
              <img className="portada_pelicula" src={`https://image.tmdb.org/t/p/w500/${this.props.datosPelicula.poster_path}`} alt="imagenPelicula" />
              {this.state.description ?
                  <div>
                    <p className="detalle_pelicula">{this.props.datosPelicula.overview}</p>
                  </div>
              : false}
              <button className="boton_detalle"><Link to={`/Detail/${this.props.datosPelicula.id}`} className="link">Detalle pelicula</Link></button>
            </div>
            <section className="boton_titulo">
              <p className="titulo_pelicula">{this.props.datosPelicula.title}</p>
              <button onClick={() => this.mostrar_descripcion()} className="boton_descripcion" >{this.state.textoDescripcion}</button>
            </section>
          </article>
        );
    }
}
export default CardPopMovies;