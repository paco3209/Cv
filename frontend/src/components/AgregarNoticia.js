import React from 'react';
import Proptypes from 'prop-types';
import {connect} from 'react-redux';
import { nuevaNoticia } from '../actions/authentication';
import ComboBox from './ComboBox.js'


class AgregarNoticia extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      titulo: '',
      descripcion: '',
      selectedFile: null

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
          titulo: this.state.titulo,
          descripcion: this.state.descripcion
        };

        this.props.nuevaNoticia(post);

        this.props.history.push('/noticia');


    }

fileSelectedHandler = event => {
  this.setState({
    selectedFile: event.target.files[0]
  })
}

fileUploadHandler = () => {

}

    render () {

    return(
      <div className="container nuevoAviso">
         <h1>Publicar Aviso</h1>
         <form className="" action="index.html" onSubmit={this.onSubmit} method="post">
          <div className="form-group">

            <input className="form-control form-control-lg" type="text" name="titulo" value={this.state.titulo} onChange={this.onChange} placeholder="Puesto / Título del aviso " />
          </div>
          <br />
          <div className="">


            <textarea className="form-control form-control-lg" placeholder="Descripción del puesto y tareas" name="descripcion" form="usrform" value={this.state.descripcion} rows="7"onChange={this.onChange} >Enter text here...</textarea>
          </div>
          <br />
          <div class="col-md-5 mb-3">


          <input type="file" onChange={this.fileSelectedHandler} />

         </div>
         <div>
         <ComboBox />
         </div>
         <div class="col-md-5">
              <button onClick={this.fileUploadHandler}>Cargar Archivo</button>
         </div>


  <br />
  <div class="col-md-12">
    <button className="btn btn-success" type="submit" name="button" >Publicar</button>
  </div>


           </form>
      </div>

    )

  }
}

AgregarNoticia.Proptypes = {
  nuevaNoticia: Proptypes.func.isRequired
}


const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});
export default connect(mapStateToProps, {nuevaNoticia})(AgregarNoticia);
