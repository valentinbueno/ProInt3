import React from 'react'
import "../Categorias.css"
function CategoriasHijo(props) {
    return (
        <ul className="categoria_contenedor">
            <li className="contenedor_pelicula"><img className="portadaPelicula" src={props.foto}/><p className="titulo_pelicula">{props.titulo}</p></li>
        </ul>
    )
}

export default CategoriasHijo