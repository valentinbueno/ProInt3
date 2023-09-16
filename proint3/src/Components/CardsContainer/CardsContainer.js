import React, { Component } from "react";
import CardPopMovies from "../Card/CardPopMovies";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class CardsContainer extends Component {
  constructor() {
    super();
    this.state = {
      peliculasPop: [],
      peliculasFavoritas: [],
    };
  }
  componentDidMount() {
    let Url= this.props.url
    fetch(Url)
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          peliculasPop: data.results,
        })
      )
      .catch();
  }
  render() {
    return (
      <React.Fragment>
        <section className="contenedor">
          {this.state.peliculasPop.map((unaPelicula, idx) => {
            if (idx < 5) {
              return (<CardPopMovies
              key={unaPelicula.title + idx}
              datosPelicula={unaPelicula}
            />)
            } else {return (null)}
          })}
        </section>
      </React.Fragment>
    );
  }
}

export default CardsContainer;