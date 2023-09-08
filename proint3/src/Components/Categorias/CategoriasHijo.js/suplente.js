import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class suplente extends Component{

constructor(props){
    super(props)
    this.state = {description:false, texto:"Descripcion", pelicula:{}}
}
componentDidMount(){
    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=5af2599bc48eedc0c872d98ac992b8e3")
    .then(response => response.json())
    .then(data =>this.setState({
        pelicula: data.results,
    }))
    .catch(error => console.log('El problema esta en'+ error))
}

mostrar_descripcion(){
    if(this.state.description === false){
        this.setState({
            description:true,
            texto:"Ocultar"
        })
    }
    else{
        this.setState({
            description:false,
            texto:"Descripcion"
        })
    }
}

    render(){
        
    return (
            <ul>
                {this.state.pelicula.map((peli,idx)=><li key={peli+idx}>{peli}</li>)}
            </ul>
    )}
    
}


export default suplente