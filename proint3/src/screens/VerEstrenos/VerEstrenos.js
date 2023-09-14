import React, { Component } from "react";
import CardPopMovies from "../../Components/Card/CardPopMovies";
import VerEstreno from "./VerEstreno.css";

class VerEstrenos extends Component {
    constructor(props){
        super(props);
        this.state={
            peliculasEst: [],
            n_pagina: 1,
        }

    }
    componentDidMount(){
        this.agregarPeliculas()
    }
    agregarPeliculas(){
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=5af2599bc48eedc0c872d98ac992b8e3&page=${this.state.n_pagina}`)
        .then((res) => res.json())
        .then((data) =>
            this.setState({
                peliculasEst: this.state.peliculasEst.concat(data.results),
                n_pagina: this.state.n_pagina + 1
            })
        )
        .catch(error => console.log(error));
    }
    render(){
        return(
            <React.Fragment>
            
            <button onClick={this.agregarPeliculas()}className="boton_detalle">Ver mas</button>
            <section className="contenedor">
            {this.state.peliculasEst.map((unaPelicula) => {
                return (<CardPopMovies
                key={unaPelicula.title}
                datosPelicula={unaPelicula}
                />)
            })}
            </section>
            </React.Fragment>
        )
    }   
}
export default VerEstrenos;