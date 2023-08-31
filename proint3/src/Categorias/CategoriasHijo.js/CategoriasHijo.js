import React from 'react'
import "../Categorias.css"
import InfoPeli from './InfoPeli/InfoPeli'
function CategoriasHijo(props) {
    return (
            <section className="contenedor_pelicula">
                <section className="portada_detalle">
                    <img className="portada_pelicula" src={props.foto}/>
                    <p className="detalle_pelicula">Esta es la descripcion de la Pelicula</p>
                </section>
                <section className="boton_titulo">
                    <p className="titulo_pelicula">{props.titulo}</p>
                    <InfoPeli />
                </section>
            </section>
    )
}

export default CategoriasHijo