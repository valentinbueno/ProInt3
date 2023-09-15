import React, {Component} from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class CardPopMovies extends Component {
    constructor(props) {
      super(props);
      this.state = {
        textoDescripcion:"Descripcion",

        textoBoton: "Agregar a favoritos",
       
        
      };
    }

    // descripcion
    mostrardescripcion(){
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

  //// FAVORITOS:


  componentDidMount(){
    //Chequear si el id está en el array de favoritos
    let recuperoStorage = localStorage.getItem('favoritos');

    if (recuperoStorage !== null){
        let favoritos = JSON.parse(recuperoStorage);

        //si está el id, cambiar el texto del botón
        if(favoritos.includes(this.props.datosPelicula.id)){
            this.setState({
                textoBoton: "Quitar de favoritos"
            })
        }

    }
}

//Si el id está en el array debe sacarlo.
//Si el id NO ESTÁ en el array debe agregarlo.

agregarQuitarFavoritos(id){
    //Guardar un id en un array y luego en localStorage
    let favoritos = [];
    let recuperoStorage = localStorage.getItem('favoritos');

    if (recuperoStorage !== null){
        favoritos = JSON.parse(recuperoStorage);
    }

    if(favoritos.includes(id)){
        //Si el id está en el array. 
        //Sacarlo del array.
        favoritos = favoritos.filter( unId => unId !== id)

        //Mostrarle un cambio al usuario en la pantalla.
        this.setState({
            textoBoton : "Agregar a favoritos"
        })

    } else {
        //Si el id NO ESTÁ en el array. 
        favoritos.push(id);

        this.setState({
            textoBoton: "Quitar de favoritos",
        })

    }

    //Guardar en localStorage
    let favoritosToString = JSON.stringify(favoritos);        
    localStorage.setItem('favoritos', favoritosToString);

    console.log(localStorage);

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
              <button className="boton_detalle"><Link to={`/DetallePelicula/id/${this.props.datosPelicula.id}`} className="link">Detalle pelicula</Link></button>
            </div>
            <section className="boton_titulo">
              <p className="titulo_pelicula">{this.props.datosPelicula.title}</p>
              <button onClick={() =>this.mostrardescripcion()} type="button" className="boton_descripcion" >{this.state.textoDescripcion}</button>

            </section>
            <button onClick={()=>this.agregarQuitarFavoritos(this.props.datosPelicula.id)} type='button' className="boton_descripcion">{this.state.textoBoton}</button>


          </article>
        );
    }
}
export default CardPopMovies;