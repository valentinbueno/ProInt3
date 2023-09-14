import React, {Component} from "react";

import CardsContainer from "../../Components/CardsContainer/CardsContainer";

class ResultadoBusqueda extends Component {
    constructor(props){
        super(props);
        this.state = {
            search: this.props.match.params.search,
            peliculasPop: [],
            peliculasFavoritas: [],
        }
    }

    componentDidMount() {
        let Url=`https://api.themoviedb.org/3/search/movie?query=${this.props.match.params.search}&api_key=5af2599bc48eedc0c872d98ac992b8e3`
        fetch(Url)
          .then((res) => res.json())
          .then((data) =>
            this.setState({
              peliculasPop: data.results
            })
          )
          .catch();
      }



render(){
    return(
        <>
        <section>    
        <h2>Resultados de búsqueda: {this.props.match.params.search}</h2>


        {this.state.peliculasPop.length >0 ? 
        
        
        
        
        
        <CardsContainer info={this.state.peliculasPop} esPelicula={true} esBusqueda={true}/> : "No se encontraron pelicul que coincidan con la búsqueda"}
        </section>
    
        </>
    );
}

}

export default ResultadoBusqueda;