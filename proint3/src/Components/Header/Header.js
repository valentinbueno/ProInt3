import React from 'react'
import "./Header.css"
import {Link} from 'react-router-dom'
function Header() {
    return (
        <header className="header">
            <div className="header_izq">
                <img className="logo" src="/img/logo1.png"/>
                <h1 className="nombre_web">VOLKS MOVIE</h1>
            </div>
            <div className="header_der">
                <ul className="listaHeader">
                    <li><Link to='/'>Pagina Principal</Link></li>
                    <li>|</li>
                    <li><Link to='/Favorites'>Favoritos </Link></li>
                    <li>|</li>
                    <li>Categorias</li>
                </ul>
                <div className="info_perfil">
                    <img className="foto_perfil" src="/img/logoPredeterminado.jpg"/>
                    <p className="nombre_perfil">Juan</p>
                </div>
            </div>
        </header>
    )
}

export default Header