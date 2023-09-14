import React, { Component } from "react";
import CardPopMovies from "../../Components/Card/CardPopMovies";
import VerPopular from "./VerPopulares.css";

class VerPopulares extends Component {
    constructor(props){
        super(props);
        this.state={
            peliculasPop: [],
            n_pagina: 1, //dato al que lo voy sumando para poder agregar las paginas
        }

    }
    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=5af2599bc48eedc0c872d98ac992b8e3')
            .then((res) => res.json())
            .then((data) =>
                this.setState({
                    peliculasPop: data.results,
            })
        )
        .catch();
    }
    agregarPeliculas(){
        
    }
    render(){
        return(
            <React.Fragment>
            <section className="contenedor">
            {this.state.peliculasPop.map((unaPelicula, idx) => {
                if (idx < 100) {
                return (<CardPopMovies
                key={unaPelicula.title + idx}
                datosPelicula={unaPelicula}
                />)
                } else {return (null)}
            })}
            </section>
            </React.Fragment>
        )
    }
    
}





export default VerPopulares