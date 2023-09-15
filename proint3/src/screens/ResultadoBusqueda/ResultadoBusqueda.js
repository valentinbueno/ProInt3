import React, {Component} from "react";

import CardPopMovies from "../../Components/Card/CardPopMovies"

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
        <React.Fragment>

            {this.state.peliculasPop.length > 0 ?
            <>
                <h2 className="nombre_categoria">Resultados de: {this.props.match.params.search}</h2>

               
        
        <section className="contenedor">


                {this.state.peliculasPop.map((peli, idx) => {
                if (idx < 5) {
                return (<CardPopMovies key={peli + idx} datosPelicula={peli}/>)
                } else {return (null)}
            })}    

            
        </section> </>:
        
         <h3>No se encontro ningun resultado para {this.props.match.params.search} </h3>}
        
        </React.Fragment>
        )
    }
    
}

export default ResultadoBusqueda;