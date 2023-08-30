import React from 'react'
import "./Header.css"
function Header() {
    return (
        <header className="header">
            <img className="logo" src="/img/logoPredeterminado.jpg"/>
            <ul className="listaHeader">
                <li>Pagina Principal</li>
                <li>Favoritos</li>
                <li>Categorias</li>
            </ul>
        </header>
    )
}

export default Header