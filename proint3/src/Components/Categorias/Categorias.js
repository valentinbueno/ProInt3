import React from 'react'
import "./Categorias.css"
import CategoriasHijo from './CategoriasHijo.js/CategoriasHijo'
function Categorias() {
    return (
        <section className="categoria_contenedor">
            <CategoriasHijo foto="/img/portadaPredeterminada.jpg" titulo="Spiderman"/>
            <CategoriasHijo foto="/img/portadaPredeterminada.jpg" titulo="Spiderman"/>
            <CategoriasHijo foto="/img/portadaPredeterminada.jpg" titulo="Spiderman"/>
            <CategoriasHijo foto="/img/portadaPredeterminada.jpg" titulo="Spiderman"/>
            <CategoriasHijo foto="/img/portadaPredeterminada.jpg" titulo="Spiderman"/>
        </section>
    )
}

export default Categorias