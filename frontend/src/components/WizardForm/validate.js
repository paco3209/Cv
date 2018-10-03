const validate = values => {
  const errors = {}
  if (!values.firstName) {
    errors.firstName = 'Debe ingresar el nombre'
  }
  if (!values.lastName) {
    errors.lastName = 'Debe ingresar el apellido'
  }
  if (!values.email) {
    errors.email = 'Debe ingresar email'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Email invalido'
  }
  if (!values.Telefono) {
    errors.Telefono = 'Debe ingresar el numero de telefono'
  }
  if (!values.sex) {
    errors.sex = 'Required'
  }
  if (!values.favoriteColor) {
    errors.favoriteColor = 'Required'
  }
  return errors
}

export default validate
