import React from "react";
import Categorias from "../../Components/Card/Card";
import {Link} from 'react-router-dom'
function Home() {
    return(

        <React.Fragment>
            <section className="titulo_categorias"><h1 className="nombre_categoria">Peliculas mas populares</h1><Link to='/VerPopulares' className="link"><button className="ver_mas">Ver mas...</button></Link></section>
            <Categorias></Categorias>
            <section className="titulo_categorias"><h1 className="nombre_categoria">Peliculas en tendencia</h1><Link to='/VerTendencia' className="link"><button className="ver_mas">Ver mas...</button></Link></section>
            <Categorias></Categorias>
        </React.Fragment>
    );
}
export default Home