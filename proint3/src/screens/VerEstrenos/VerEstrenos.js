import React, { Component } from "react";
import CardPopMovies from "../../Components/Card/CardPopMovies";


class VerEstrenos extends Component {
    constructor(props){
        super(props);
        this.state={
            peliculasEst: [],
            n_pagina: 1,
        }

    }
    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=5af2599bc48eedc0c872d98ac992b8e3')
            .then((res) => res.json())
            .then((data) =>
                this.setState({
                    peliculasEst: data.results,
            })
        )
        .catch();
    }
    render(){
        return(
            <React.Fragment>
            <section className="contenedor">
            {this.state.peliculasEst.map((unaPelicula, idx) => {
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
export default VerEstrenos;