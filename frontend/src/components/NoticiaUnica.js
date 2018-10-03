import React, { Component } from 'react';
import { connect } from 'react-redux';
import { buscarNoticia } from '../actions/authentication';
import { Link } from "react-router-dom";
import nl2br from 'react-nl2br';



class NoticiaUnica extends Component {
constructor(props){
  super(props);

}

componentWillMount(){
  this.props.buscarNoticia(this.props.match.params.id)



}


    render() {
        const noticia = this.props.notiUnica;

        return (



            <div className="container">

              <div className="card">

  <div className="card-body">
    <h5 className="card-title">{noticia.titulo}</h5>
    <p className="card-text">{nl2br(noticia.descripcion)}</p>
<div className="botones_votacion col-md-12">
  <div className="voto_no_positvo col-md-5">
    <a href="#" className="btn btn-danger">Aburrido</a>
  </div>
  <div className="voto_positivo col-md-5" >
    <a href="#" className="btn btn-success">Postularme</a>
</div>
</div>
  </div>
</div>
</div>


          /*    <div>
                <h1>{noticia.titulo}</h1>
              </div>
              <div>
                <p className="descripcion">{nl2br(noticia.descripcion)}</p>
              </div> */



        );
    }
}


const mapStateToProps = (state) => ({

    notiUnica: state.auth.notiUnica
})

export  default connect(mapStateToProps, { buscarNoticia })(NoticiaUnica)
