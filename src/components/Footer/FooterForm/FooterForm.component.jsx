import React, { useState } from "react"

import Button from "../../Button/Button.component"
import FormInput from "../../FormInput/FormInput.component"

import "./FooterForm.styles.scss"

const defaultFormFields = {
  email: ""
}

const FooterForm = () => {
  const [message, setMessage] = useState(null)
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email } = formFields

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormFields({ ...formFields, [name]: value })
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()

    const input = event.target.elements.email
    const email = input.value.trim()

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (emailRegex.test(email)) {
      setMessage({ type: "success", content: "Thank you for subscribing!" })
      input.value = ""
    } else {
      setMessage({ type: "error", content: "Please enter a valid email address." })
    }
  }

  return (
    <>
      {message && (
        <div className={`footer-message ${message.type}`}>
          {message.content}
        </div>
      )}
      {message?.type !== "success" && (
        <form
          className="footer-form"
          onSubmit={handleFormSubmit}
        >
          <FormInput
            label="Enter Your Email"
            name="email"
            onChange={handleChange}
            required
            type="email"
            value={email}
          />
          <Button
            buttonType="inline"
            type="submit"
          >
            Subscribe
          </Button>
        </form>
      )}
    </>
  )
}

export default FooterForm
