import React from 'react'
import "./Header.css"
import {Link} from 'react-router-dom'
import Search from '../Search/search'


function Header() {
    return (
        <header className="header">
            <div className="header_izq">
                <img className="logo" src="/img/moviestar3.jpg"/>
                <h1 className="nombre_web">MovieStar </h1>
            </div>
           
            <div className="header_der">
                <ul className="listaHeader">
                    <li className="boton_header"><Link to='/' className="link">Pagina Principal</Link></li>
                    <li>|</li>
                    <li className="boton_header"><Link to='/Favorites' className="link">Favoritos </Link></li>
                    <li>|</li>
                    <li className="boton_header">Categorias</li>
                </ul>
                 <Search/>
                <div className="info_perfil">
                    <img className="foto_perfil" src="/img/logoPredeterminado.jpg"/>
                    <p className="nombre_perfil">Juan</p>
                </div>

               
            </div>
        </header>
    )
}

export default Header