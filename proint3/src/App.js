import Categorias from "./Components/Categorias/Categorias";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

function App() {
  return (
    <>
        <Header />
        <section className="titulo_categorias"><h1 className="nombre_categoria">Peliculas mas populares</h1><button className="ver_mas">Ver mas...</button></section>
        <Categorias />
        <section className="titulo_categorias"><h1 className="nombre_categoria">Peliculas en tendencia</h1><button className="ver_mas">Ver mas...</button></section>
        <Categorias />
        <Footer />
    </>    
        );
}

export default App