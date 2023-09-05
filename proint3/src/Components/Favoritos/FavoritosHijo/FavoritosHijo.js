import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class FavoritosHijo extends Component{

    constructor(props){
        super(props)
        this.state = {
            description:false,
            texto:"Descripcion",
            favoritos:[]}
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

export default FavoritosHijo