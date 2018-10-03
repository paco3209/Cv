import React, { Component } from 'react';
import { connect } from 'react-redux';
import { listarNoticiaPaginacion, limpiarNoticias } from '../actions/authentication';
import { Link } from "react-router-dom";
import moment from 'moment';
import 'moment/locale/es';
import AutocompleGoogle from './AutocompleGoogle';



import Searchbar from './Searchbar';
moment.locale("es");


class Noticia extends Component {
constructor(props){
  super(props);
  this.state = {
    noticia: [],
    page:0
  }
this.loadItems = this.loadItems.bind(this);
}

componentDidMount(){


this.props.listarNoticiaPaginacion(this.state.page);
this.setState(prevState => ({
  page: prevState.page + 1
}));
}

loadItems(){

  this.setState(prevState => ({
      page: prevState.page + 1

    }

  ),this.props.listarNoticiaPaginacion(this.state.page))



}

componentWillUnmount(){
  this.props.limpiarNoticias();
}


    render() {


        moment.lang("es");

        const noticia = this.props.noticias;
        return (
          <div>
    <Searchbar />
            <div className="container">

              <div>
                  <i className="fa fa-spinner fa-spin fa-3x fa-fw"></i>
                  <span className="sr-only">Loading...</span>
              </div>
              <div>
                <h1>Empleos </h1>
              </div>
              <div>
                <AutocompleGoogle />
              </div>
              <div className="Noticias">
                <br />
                {  noticia.map(data => (

                       <div className="noticia" key={data.id}>
                        <div className="titulo"><h2><Link className="tituloNoticia" to={`/noticiaUnica/${data._id}`} activeClassName="active">{data.titulo}</Link></h2></div>
                        <div className="descripcion">{data.descripcion}</div>

                        <div className="dia">Publicado hace: {moment(new Date(data.date)).fromNow()}</div>
                        <br />
                        <hr />
                       </div>

                  ))
                }
             </div>
         <a onClick={this.loadItems}>Cargar mas</a>

             }

            </div>
</div>
        );
    }
}


const mapStateToProps = (state) => ({

    noticias: state.auth.noticias
})

export  default connect(mapStateToProps, { listarNoticiaPaginacion, limpiarNoticias })(Noticia)
