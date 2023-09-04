import React from "react";
import CategoriasHijo from "../../Components/Categorias/CategoriasHijo.js/CategoriasHijo";
import Categorias from "../../Components/Categorias/Categorias";

function Home() {
    return(

        <React.Fragment>
            <p> La mejor plataforma para ver tus peliculas favoritas </p>
            <section className="titulo_categorias"><h1 className="nombre_categoria">Peliculas mas populares</h1><button className="ver_mas">Ver mas...</button></section>
            <Categorias></Categorias>
            <section className="titulo_categorias"><h1 className="nombre_categoria">Peliculas en tendencia</h1><button className="ver_mas">Ver mas...</button></section>
            <Categorias></Categorias>
        </React.Fragment>
    );
}
export default Home