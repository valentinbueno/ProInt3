import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class CategoriasHijo extends Component{

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
        console.log('Me monte');
        console.log(this.state);
    return (
            <article className="contenedor_pelicula">
                
                <div className="portada_detalle">
                    <img className="portada_pelicula" src={this.props.foto}/>
                    {this.state.description ?
                        <div>
                            <p className="detalle_pelicula">Esta es la descripcion de la Pelicula</p>
                        </div>
                    : false}
                    <button className="boton_detalle"><Link to="/DetallePelicula/id/:id" className="link">Detalle pelicula</Link></button>
                </div>
                <section className="boton_titulo">
                    <p className="titulo_pelicula">{this.props.titulo}</p>
                    <button onClick={() => this.mostrar_descripcion()} className="boton_descripcion" >{this.state.texto}</button>
                </section>
            </article>
    )}
    
}


export default CategoriasHijo