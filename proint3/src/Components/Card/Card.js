import React , {Component} from 'react'
import Characters from '../Characters/Characters'
class Card extends Component{
    constructor(props){
        super(props);
        this.state = {pelicula:{}}

    }
    componentDidMount(){
        let Url=this.props.url
        fetch(Url)
        .then(response => response.json())
        .then(data =>this.setState({
            pelicula: data.results,
        }))
        .catch(error => console.log('El problema esta en'+ error))
    }

   render(){
    return(
        <section className="contenedor">

        </section>
    )
   
        {/* <Characters/>
        <Characters/>
        <Characters/>
        <Characters/>
        <Characters/> */}
    
   }
}
export default Card

// // return (
//         <section className="contenedor">
//             <Characters/>
//             <Characters/>
//             <Characters/>
//             <Characters/>
//             <Characters/>
//         </section>
//     )
    