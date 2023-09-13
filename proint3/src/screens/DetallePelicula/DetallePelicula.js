import React, { Component } from "react";

class DetallePelicula extends Component{
    constructor(props){
        super(props)
        this.state={
            id:this.props.match.params.id
        }
    }
    render(){
        console.log(this.state.id);
        return(
            <p>{this.state.id}</p>
        )
    }
}
export default DetallePelicula