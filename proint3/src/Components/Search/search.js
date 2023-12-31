import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Search extends Component{
    constructor(props){
        super(props);
        this.state={
            search: "",
            resultados: false
        }
    }
    prevenir(evento){
        evento.preventDefault()
    }
    buscar(evento){
        this.setState(
            {
                search: evento.target.value
            }
        )
    }
    render(){
        return(
            <>
            <div className="search">
            <form className="lupita" onSubmit={(evento)=> this.prevenir(evento)}>
                <input className="lupita" type="text" name="search" placeholder="buscador peliculas.." onChange={(evento)=>this.buscar(evento)} value= {this.state.search}/>
               <Link to={`/searchResults/${this.state.search}`}> 
               <button type="submit" className="botonbusqueda"><i className="boton"></i>Buscar</button></Link>
            </form> 
            </div>
            </>
        )
    }

    
}
export default Search;