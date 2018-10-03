import React from 'react'
import PropTypes from 'prop-types'

class Searchbar extends React.Component {
constructor(props){
  super(props);
  this.state = {
    descripcionBusqueda: ''
  };
  this.onChange = this.onChange.bind(this);
  this.onSubmit = this.onSubmit.bind(this);
}

onChange(e){
  this.setState({[e.target.name]:e.target.value})
}

onSubmit(e){
  e.preventDefault();
  const post = {
    descripcionBusqueda : this.state.descripcionBusqueda
  };

this.props.nuevaNoticia(post);


}

  render () {
  return(
    <div className="searchba col-md-12">
      <form className="" action="index.html" onSubmit={this.onSubmit} method="post">

<div className="col-auto boton">
  <button className="btn btn-success" type="submit" name="button" >Buscar</button>
</div>
<div className="col-md-4 searchtext">
<input className="form-control" name="descripcionBusqueda" type="text" placeholder="Buscar" aria-label="Search" value={this.state.descripcionBusqueda} onChange={this.onChange} />
</div>


</form>
    </div>

  )
  }
}

export default Searchbar;
