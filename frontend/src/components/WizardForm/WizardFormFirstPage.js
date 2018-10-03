import React from 'react'
import { Field, reduxForm } from 'redux-form'


import validate from './validate'
import renderField from './renderField';
import Textarea from './Textarea';

const WizardFormFirstPage = props => {
  const { handleSubmit } = props
  return (
    <div className="container">
    <form onSubmit={handleSubmit}>
    <div>
      <h1>Datos personales</h1>
    </div>
        <Field
          name="nombre"
          type="text"
          component={renderField}
          label="First Name"

        />
        <Field
          name="apellido"
          type="text"
          component={renderField}
          label="Last Name"
        />
        <Field
          name="email"
          type="email"
          component={renderField}
          label="Email"
         />
         <Field
           name="Telefono"
           type="number"
           component={renderField}
           label="Telefono"
         />
         <Field
           name="Direccion"
           type="text"
           component={renderField}
           label="Direccion"
         />
         <Field
           name="Informacion Personal"
           type="text"
           component={Textarea}
           label="Informacion Personal"
         />



        <div>
          <button type="submit" className="next" className="btn btn-primary">
            Siguiente
          </button>
        </div>
      </form>
    </div>
  )
}

export default reduxForm({
  form: 'wizard', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardFormFirstPage)
