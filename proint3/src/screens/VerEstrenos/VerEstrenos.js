import React, { Component } from "react";
import CardPopMovies from "../../Components/Card/CardPopMovies";
import CardsContainer from "../../Components/CardsContainer/CardsContainer";

class VerEstrenos extends Component {
    constructor(props){
        super(props);
        this.state={
            peliculasEst: [],
            n_pagina: 1,
            valor:10
   
        }

    }
    componentDidMount(){
        console.log('En component ');
        this.agregarPeliculas()
    }
    agregarPeliculas(){
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=5af2599bc48eedc0c872d98ac992b8e3&page=${this.state.n_pagina}`)
        .then((res) => res.json())
        .then((data) =>
            this.setState({
                
                peliculasEst: this.state.peliculasEst.concat(data.results),
                n_pagina: this.state.n_pagina + 1,
                //valor:this.state.valor + 5 --> bucle infinito
            })
        )
        .catch(error => console.log(error));
    }
    verMas(){
        this.setState({
            largo_peliculas : this.state.largo_peliculas + 5
        })
    }
    render(){
        console.log(this.state.peliculasEst);
        let valor= this.state.valor
        return(
        <section className="contenedor">
        <button onClick={this.agregarPeliculas()}className="boton_descripcion">Ver mas</button>
                
                {this.state.peliculasEst.map((peli, idx) => {
                    if (idx < valor) {
                    return (<CardPopMovies key={peli + idx} datosPelicula={peli}/>)
                    } else {return (null)}
            })}    

            
        </section> 
        )   
    }
}
export default VerEstrenos;