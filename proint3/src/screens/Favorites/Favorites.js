import React, { Component } from "react";

import CardPopMovies from "../../Components/Card/CardPopMovies"


class Favorites extends Component{
constructor(props){
    super(props);
    this.state = {
        favoritos: []
    }
}
componentDidMount(){
    let favs = [];
    let recuperoStoragePelis = localStorage.getItem("favoritos")
    if(recuperoStoragePelis !== null){
        let pelisArray = JSON.parse(recuperoStoragePelis);
        favs = pelisArray
        let pelisLista = []
    
        favs.forEach((id)=> {
            fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=5af2599bc48eedc0c872d98ac992b8e3`)
            .then(response => response.json())
            .then( favs =>{
                pelisLista.push(favs);
                this.setState({favoritos: pelisLista})
            })
            .catch(error => console.log(error))
        })
    }
}


render(){
    console.log(this.state);
    return(
        <React.Fragment>
        <h2 className="nombre_categoria">Tus Peliculas Favoritas:</h2>

        {this.state.favoritos.length > 0 ?
        <section className="contenedor">
               {this.state.favoritos.map(
                        (peliFavorita, idx) => <CardPopMovies key={peliFavorita + idx} datosPelicula={peliFavorita}/>
                    )
                }
               
        </section>: 
        <h3 className="loading">Loading...</h3>}

        </React.Fragment>
    )
}
}
export default Favorites;