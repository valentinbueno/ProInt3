import React from 'react'
import "./Header.css"
function Header() {
    return (
        <header className="header">
            <div className="header_izq">
                <img className="logo" src="/img/logo1.png"/>
                <h1 className="nombre_web">Nombre Pagina</h1>
            </div>
            <div className="header_der">
                <ul className="listaHeader">
                    <li>Pagina Principal</li>
                    <li>Favoritos</li>
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