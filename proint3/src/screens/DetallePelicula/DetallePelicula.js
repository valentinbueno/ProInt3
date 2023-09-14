import React, { Component } from "react";

class DetallePelicula extends Component{
    constructor(props){
        super(props)
        this.state={
            id:this.props.match.params.id,
            peliculasPop:[]
        }
    }
    componentDidMount(){
        let idMovie= this.state.id
        fetch(`https://api.themoviedb.org/3/movie/${idMovie}?api_key=5af2599bc48eedc0c872d98ac992b8e3`)
            .then((res) => res.json())
            .then((data) =>
                this.setState({
                peliculasPop: data,
                })
            )
            .catch();
    }
    render(){
        console.log(this.state.peliculasPop);
        console.log(this.state.peliculasPop.genres);
        return(
            <React.Fragment>
                <p className="nombre_categoria">{this.state.peliculasPop.title}</p>
                <div>
                    <img src={`https://image.tmdb.org/t/p/w500/${this.state.peliculasPop.poster_path}`} alt="imagenPelicula"/>
                </div>
                <div>
                    
                    <li>Valoracion:{this.state.peliculasPop.vote_average}</li>
                    <li>Fecha de Estreno:{this.state.peliculasPop.release_date}</li>
                    <li>Duracion:{this.state.peliculasPop.runtime} mins</li>
                    <li>Sinopsis:{this.state.peliculasPop.overview}</li>
                    <ul>
                         {
                          //this.state.peliculasPop.genres.map(generos => <li>{generos.name}</li>)
                        } 
                    </ul>
                    
                </div>
            </React.Fragment>
        );
                    }}
export default DetallePelicula;