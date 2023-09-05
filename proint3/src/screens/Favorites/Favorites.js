import React from "react";
import Favoritos from "../../Components/Favoritos/Favoritos";

function Favorites() {
    return(
        <React.Fragment>
            <section className="titulo_categorias"><h1 className="nombre_categoria">Peliculas Favoritas</h1></section>
            <Favoritos/>
        </React.Fragment>
    );   
}













export default Favorites