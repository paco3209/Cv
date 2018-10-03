import React from 'react'

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} className="form-control form-control-" />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

export default renderField
