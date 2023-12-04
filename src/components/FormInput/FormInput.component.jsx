import React from "react"

import "./FormInput.style.scss"

const FormInput = ({
  emailForm,
  label,
  textarea,
  ...otherProps
}) => {
  return (
    <div className={`group ${emailForm ? "emailGroup" : ""}`.trim()}>
      {!textarea && (
        <input
          aria-label={label}
          className="form-input"
          {...otherProps}
        />
      )}

      {textarea && (
        <textarea
          aria-label={label}
          className="form-input"
          rows="3"
          {...otherProps}
        />
      )}

      {
        label && (
          <label
            className={`form-input-label ${otherProps.value.length ? "shrink" : ""}`.trim()}
          >
            {label}
          </label>
        )
      }
    </div>
  )
}

export default FormInput
