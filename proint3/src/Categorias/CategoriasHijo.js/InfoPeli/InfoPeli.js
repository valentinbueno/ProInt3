import React, {Component} from 'react';
let buscador_detalle = document.getElementsByClassName("detalle_pelicula")
console.log(buscador_detalle);

class InfoPeli extends Component{
    mostrar_info(){
        buscador_detalle.style.display = 'block';
    };
    render(){
        return(
            <button onClick={() => this.mostrar_info()} className="boton_descripcion" >Descripcion</button>
        )};
    }

export default InfoPeli