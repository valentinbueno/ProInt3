import React, {Component} from 'react';
import Card from '../Card/Card';
import {Link} from 'react-router-dom'

class Characters extends Component{

constructor(props){
    super(props)
    this.state = {description:false, texto:"Descripcion", pelicula:[]}
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

        
        {/* {
            this.state.pelicula.map((Obj, i)=>{
                console.log(this.state);
                if (i<5) {           // Con esta línea llevamos solo 5 peliculas y no las 20 que guardamos en this.state
                    return( <CategoriasHijo title={ this.props.esPeli ? Obj.title : Obj.name} poster={Obj.poster_path} description={Obj.overview} id={Obj.id}/> )
                } else{ return (null)}     
            })
        } */}
                
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




export default Characters
