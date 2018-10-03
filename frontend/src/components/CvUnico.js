import React from 'react'
import PropTypes from 'prop-types';
import {buscarCv} from '../actions/authentication';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

class CvUnico extends React.Component {
  constructor(props){
    super(props);


  }

  componentWillMount(){
    this.props.buscarCv(this.props.match.params.id)



  }


  render () {
    const cv = this.props.cvUnico;
    console.log(cv);
    return(

        <div class="container">
            <div>  <Link className="tituloNoticia" to={`/cvEditar/${cv._id}`} activeClassName="active">Editar cv</Link> </div>
            <h1>Datos Peronales</h1>

            <h2>{cv.nombre} {cv.apellido}</h2>

        </div>

    )

  }
}

const mapStateToProps = (state) => ({

    cvUnico: state.auth.cvUnico
})

export  default connect(mapStateToProps, { buscarCv })(CvUnico)
