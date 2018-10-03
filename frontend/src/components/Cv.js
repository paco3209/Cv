import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {listadocv} from '../actions/authentication';
import {Link} from "react-router-dom";

class Cv extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      listado: []
    }
  }

  componentDidMount(){


  this.props.listadocv();

  }


  render () {
    const listado = this.props.listado;
    console.log(listado);
    return(
      <div class="container">
        <h1>Listados CV </h1>
          <div>
            {  listado.map(data => (

                   <div className="noticia" key={data.id}>
                    <div className="titulo">
                    <h2><Link
                      className="tituloNoticia"
                      to={`/cvu/${data._id}`}
                      activeClassName="active">{data.nombre}
                    </Link>
                  </h2>
                  <div>
                     <Link
                       className="tituloNoticia"
                       to={`/cvEditar/${data._id}`}
                       activeClassName="active">Editar cv
                     </Link>
                  </div>
                </div>
                    <hr />
                   </div>

              ))
            }
      </div>
    </div>
    )

  }
}


const mapStateToProps = (state) => ({

    listado: state.auth.listadocv
})

export  default connect(mapStateToProps, { listadocv })(Cv);
