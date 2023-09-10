import React, { Component } from "react";
import Card from "../../Components/Card/Card";
import {Link} from 'react-router-dom'
class Home extends Component {
    render(){
        return(
            <section className="titulo_categorias"><h1 className="nombre_categoria">Peliculas mas populares</h1><Link to='/VerPopulares' className="link"><button className="ver_mas">Ver mas...</button></Link></section>
            
        )
        
        
            // <section className="titulo_categorias"><h1 className="nombre_categoria">Peliculas mas populares</h1><Link to='/VerPopulares' className="link"><button className="ver_mas">Ver mas...</button></Link></section>
            // <Card url="https://api.themoviedb.org/3/movie/top_rated?api_key=5af2599bc48eedc0c872d98ac992b8e3"/>
            // <section className="titulo_categorias"><h1 className="nombre_categoria">Peliculas en tendencia</h1><Link to='/VerTendencia' className="link"><button className="ver_mas">Ver mas...</button></Link></section>
            // <Card url="https://api.themoviedb.org/3/tv/top_rated?api_key=5af2599bc48eedc0c872d98ac992b8e3"/>
        
    }
}
export default Home