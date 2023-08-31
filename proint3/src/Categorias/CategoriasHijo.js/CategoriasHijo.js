import React from 'react'
import "../Categorias.css"
function CategoriasHijo(props) {
    return (
            <section className="contenedor_pelicula"><img className="portada_pelicula" src={props.foto}/><p className="titulo_pelicula">{props.titulo}</p></section>
    )
}

export default CategoriasHijo