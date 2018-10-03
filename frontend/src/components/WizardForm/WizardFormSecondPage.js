import React from 'react'
import { Field,FieldArray, reduxForm } from 'redux-form'
import validate from './validate'


const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label} className="form-control" />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)


const renderMembers = ({ fields, meta: { error, submitFailed }, hasvalue }) => (
  <ul>
    <li>
      <button type="button" onClick={() => fields.push({})}>
        Agregar Estudio
      </button>
      {submitFailed && error && <span>{error}</span>}
    </li>
    {fields.map((experiencia, index) => (
      <li key={index}>
        <button
          type="button"
          title="Eliminar Eduacion"
          onClick={() => fields.remove(index)}
        />
        <h4>Eduacion #{index + 1}</h4>
        <Field
          name={`${experiencia}.Instituto`}
          type="text"
          component={renderField}
          label="Institucion"
        />
        <div className="row">
          <div className="fecha col-md-5">
        <label>Tipo de estudio</label>
        <div>
          <Field name="TipoEstudio" component="select">

            <option value="" disabled selected>Seleccione</option>
            <option value="Primario">Primario</option>
            <option value="Universitario">Universitario</option>
            <option value="Terciario">Terciario</option>
            <option value="Cursito">Cursito</option>

          </Field>
        </div>
      </div>
      </div>
        <div className="row">
          <div className="fecha col-md-3">
            <Field
              name={`${experiencia}.fechaIngreso`}
              type="date"
              component = {renderField}
              label="Fecha de ingreso"
              />
          </div>
          <div>
              <label htmlFor="employed">Employed</label>
              <div>
                <Field name="employed" id="employed" component="input" type="checkbox"/>
              </div>
          </div>

          <div className="fecha col-md-3">
            <Field
              name={`${experiencia}.fechaEgreso`}
              type="date"
              component = {renderField}
              label="Fecha de egreso"
              />
          </div>
        </div>
        <Field
          name={`${experiencia}.titulo`}
          type="text"
          component={renderField}
          label="titulo"
        />

      </li>
    ))}
  </ul>
)



const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false

const WizardFormSecondPage = props => {
  const { handleSubmit, previousPage } = props
  return (
    <form onSubmit={handleSubmit}>

      <div className="container">
        <h1>Educacion</h1>
            <FieldArray name="educacion" component={renderMembers} />
      </div>
      <div>
        <button type="button" className="previous" onClick={previousPage} className="btn btn-secondary">
          Previous
        </button>
        <button type="submit" className="next" className="btn btn-primary">
          Next
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'wizard', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardFormSecondPage)
