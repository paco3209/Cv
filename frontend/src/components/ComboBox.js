import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { listarCategoria } from '../actions/authentication';


class ComboBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      categoria:[]
    }
  }

componentDidMount(){
  this.props.listarCategoria();
}

  render () {
    const categoria = this.props.categoria;
    return(
      <div className="form-group">
   <label for="exampleFormControlSelect1">Example select</label>
   <select className="form-control" id="exampleFormControlSelect1">
     {categoria.map(data => (
       <option>{data.descripcion}</option>
     ))}
     </select>
 </div>
    )
  }
}

const mapStateToProps = (state) => ({

    categoria: state.auth.categorias
})

export  default connect(mapStateToProps, { listarCategoria })(ComboBox);
