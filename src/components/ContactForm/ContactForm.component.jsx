import React, { useState } from "react"

import FormInput from "../FormInput/FormInput.component"
import Button from "../Button/Button.component"

import "./ContactForm.styles.scss"

const defaultFormFields = {
  name: "",
  email: "",
  textMessage: ""
}

const ContactForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { name, email, textMessage } = formFields
  const [message, setMessage] = useState(null)

  const handleFormSubmit = (event) => {
    event.preventDefault()

    const input = event.target.elements.email
    const email = input.value.trim()

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (emailRegex.test(email)) {
      setMessage({ type: "success", content: "Thank you for contacting us. Someone will get in touch soon!" })
      input.value = ""
    } else {
      setMessage({ type: "error", content: "Please enter a valid email address." })
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <div className="container">
      {message && (
        <div className={`contact-message ${message.type}`}>
          {message.content}
        </div>
      )}
      {message?.type !== "success" && (
        <>
          <h2 className="form-heading">Leave Message</h2>

          <form onSubmit={handleFormSubmit}>
            <FormInput
              label="Name"
              name="name"
              onChange={handleChange}
              required
              type="name"
              value={name}
            />

            <FormInput
              label="Email"
              name="email"
              onChange={handleChange}
              required
              type="email"
              value={email}
            />

            <FormInput
              label="Message"
              name="textMessage"
              onChange={handleChange}
              required
              textarea
              value={textMessage}
            />

            <Button
              buttonType="primary"
              type="submit"
            >
              Send Message
            </Button>
          </form>
        </>
      )}
    </div>
  )
}

export default ContactForm
