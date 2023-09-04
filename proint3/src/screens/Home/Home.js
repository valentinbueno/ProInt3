import React from "react";
import CategoriasHijo from "../../Components/Categorias/CategoriasHijo.js/CategoriasHijo";
import Categorias from "../../Components/Categorias/Categorias";
import {Link} from 'react-router-dom'
function Home() {
    return(

        <React.Fragment>
            <p> La mejor plataforma para ver tus peliculas favoritas </p>
            <section className="titulo_categorias"><h1 className="nombre_categoria">Peliculas mas populares</h1><Link to='/VerPopulares'><button className="ver_mas">Ver mas...</button></Link></section>
            <Categorias></Categorias>
            <section className="titulo_categorias"><h1 className="nombre_categoria">Peliculas en tendencia</h1><Link to='/VerTendencia'><button className="ver_mas">Ver mas...</button></Link></section>
            <Categorias></Categorias>
        </React.Fragment>
    );
}
export default Home