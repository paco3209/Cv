import React from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'
import validate from './validate'
import Textarea from './Textarea';
const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet']

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label} className="form-control" />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

const renderHobbies = ({ fields, meta: { error } }) => (
  <ul>
    <li>
      <button type="button" onClick={() => fields.push()}>
        Add Hobby
      </button>
    </li>
    {fields.map((hobby, index) => (
      <li key={index}>
        <button
          type="button"
          title="Remove Hobby"
          onClick={() => fields.remove(index)}
        />
        <Field
          name={hobby}
          type="text"
          component={renderField}
          label={`Hobby #${index + 1}`}
        />
      </li>
    ))}
    {error && <li className="error">{error}</li>}
  </ul>
)

const renderMembers = ({ fields, meta: { error, submitFailed } }) => (
  <ul>
    <li>
      <button type="button" onClick={() => fields.push({})}>
        Agregar Experiencia
      </button>
      {submitFailed && error && <span>{error}</span>}
    </li>
    {fields.map((experiencia, index) => (
      <li key={index}>
        <button
          type="button"
          title="Remove Member"
          onClick={() => fields.remove(index)}
        />
        <h4>Experiencia #{index + 1}</h4>
        <Field
          name={`${experiencia}.empresa`}
          type="text"
          component={renderField}
          label="Nombre Empresa"
        />
        <div className="row">
          <div className="fecha col-md-3">
            <Field
              name={`${experiencia}.fechaIngreso`}
              type="date"
              component = {renderField}
              label="Fecha de ingreso"
              />
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
          name={`${experiencia}.puesto`}
          type="text"
          component={renderField}
          label="Puesto"
        />
        <Field
          name={`${experiencia}.Descripcion`}
          type="text"
          component={Textarea}
          label="Descripcion de tareas"
        />

      </li>
    ))}
  </ul>
)


const WizardFormThirdPage = props => {

    const { handleSubmit, pristine, reset, submitting, previousPage } = props
    return (
      <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Experiencia</h1>

        <FieldArray name="experiencia" component={renderMembers} />
        <div className="row">
          <div className="col-md-4">
          <button type="button" className="previous" onClick={previousPage} className="btn btn-secondary">
          Previous
        </button>


        <button type="submit"  className="btn btn-success">
          Submit
        </button>
      </div>
        </div>
      </form>
      </div>
    )
}
export default reduxForm({
  form: 'wizard', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardFormThirdPage)
