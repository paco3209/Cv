import React from 'react'

const Textarea = ({ input, label, type,textareas, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <textarea {...input} placeholder={label} className="form-control form-control-" rows="4" />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

export default Textarea;
