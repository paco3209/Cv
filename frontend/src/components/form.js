import React from 'react'
import { Field, reduxForm } from 'redux-form'

let ContactForm = props => {
  const { handleSubmit } = props
  return (

    <div class="container">


    <form onSubmit={handleSubmit}>
      <div className="form-group">

        <Field name="firstName" component="input" type="text" placeholder="nombre" />
      </div>
      <div className="form-group">

        <Field name="lastName" component="input" type="text" placeholder="apellido" />
      </div>
      <div className="form-group" >

        <Field name="email" component="input" type="email" placeholder="email" />
      </div>
      <div className="form-group">
      <button className="btn btn-primary" type="submit">Submit</button>
      </div>

    </form>
    </div>
  )
}

ContactForm = reduxForm({
  // a unique name for the form
  form: 'contact'
})(ContactForm)

export default ContactForm
