import React, { Component } from "react";
import CardPopMovies from "../Card/CardPopMovies";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class CardsContainer extends Component {
  constructor() {
    super();
    this.state = {
      peliculasPop: [],
      peliculasFavoritas: [],
    };
  }

  componentDidMount() {
    let Url= this.props.url
    fetch(Url)
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          peliculasPop: data.results,
        })
      )
      .catch();
  }

  borrarPeliOSerie(id) {
      let peliculasFiltradas = this.state.peliculasPop.filter(
        (unaPelicula) => unaPelicula.id !== id
      );
      this.setState({
        peliculasPop: peliculasFiltradas,
      });
  }

   verMas(id){
    let peliculasFiltradas = this.state.peliculas.filter(
      (peliculas) => peliculas.id !== id
    );
    this.setState({
      peliculas: peliculasFiltradas,
    }) 
  }

   filtrarPeliOSerie(textoInput){
    let peliculasFiltradas = this.state.peliculas.filter(pelicula => {
        return pelicula.name.toLowerCase().includes(textoInput.toLowerCase());
    })
    this.setState({
      peliculas: peliculasFiltradas
    })
  }

  verTodas() {
    fetch(this.state)
      .then((res) => res.json())
      .then((data) =>
      this.setState({
        peliculasPop: data.results,
      })
      )
      .catch();
  }

  render() {
    return (
      <React.Fragment>
        <section className="contenedor">
          {this.state.peliculasPop.map((unaPelicula, idx) => {
            if (idx < 5) {
              return (<CardPopMovies
              key={unaPelicula.title + idx}
              datosPelicula={unaPelicula}
              borrar={(id) => this.borrarPeliOSerie(id)}
              verMas={(id) => this.verMas(id)}
            />)
            } else {return (null)}
          })}
        </section>
      </React.Fragment>
    );
  }
}

export default CardsContainer;











// import React, { Component } from "react";
// import {Link} from 'react-router-dom'
// import CardMovies from '../../Components/Card/CardMovies'
// import CardsContainer from "../../Components/CardsContainer/CardsContainer";



// class Home extends Component {
//     constructor(){
//         super();
//         this.state = {
//             peliculas: [],
//             tv: []
//         };
//     }

// componentDidMount(){
//     fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=5af2599bc48eedc0c872d98ac992b8e3")
//     .then((response)=> response.json() )
//     .then((data)=> 
//     this.setState({
//         peliculas: data.results


//     }))

//     .catch(error => console.log(error));
//     fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=5af2599bc48eedc0c872d98ac992b8e3")
//     .then((response)=> response.json())
//     .then((data)=> 
//     this.setState({
//         tv: data.results
//     }))
//     .catch(error => console.log(error));
// }



// render() {
//     return (
//       <React.Fragment>


//         <section className="titulo_categorias">
            
//           {this.state.peliculas.map((unaPelicula, idx) => {
//             if (idx < 5) {
//               return (<CardMovies
//               key={unaPelicula.title + idx}
//               datosPelicula={unaPelicula}
            
//             />)
//             } else {return (null)}
//           })}

//         </section>
//         <Link className="linkADetalle" to="/VerTodas">Ver todas</Link>
         
//     </React.Fragment>

//     );
//         }}

// export default Home
