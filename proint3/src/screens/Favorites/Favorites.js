import React, { Component } from "react";
import FavoritosHijo from "../../Components/Favoritos/FavoritosHijo/FavoritosHijo";

class Favorites extends Component{
    render(){
        return(
            <React.Fragment>
                <section className="titulo_categorias"><h1 className="nombre_categoria">Peliculas Favoritas</h1></section>
                <FavoritosHijo/>
            </React.Fragment>
        );
    }

}

export default Favorites