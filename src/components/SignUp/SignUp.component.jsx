import React, { useState } from "react"

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth
} from "../../utils/firebase/firebase.utils"

import FormInput from "../FormInput/FormInput.component"
import Button from "../Button/Button.component"

import "./SignUp.styles.scss"

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: ""
}

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const {
    displayName,
    email,
    password,
    confirmPassword
  } = formFields

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (password !== confirmPassword) {
      alert("passwords do not match")
      return
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      )

      await createUserDocumentFromAuth(user, {displayName})

      resetFormFields()
    } catch(error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use")
      } else {
        console.log("user creation encountered an error", error)
      }
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <div className="sign-up-container col-12 col-lg-6">
      <h1>Don&apos;t have an account?</h1>
      <div className="sign-up-text">
        sign up with Roots:
      </div>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button
          buttonType="primary"
          type="submit"
        >
          Sign Up
        </Button>
      </form>
    </div>
  )
}

export default SignUp
