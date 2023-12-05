import React, { useState } from "react"

import {
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup
} from "../../utils/firebase/firebase.utils"

import Button from "../Button/Button.component"
import FormInput from "../FormInput/FormInput.component"

import "./SignIn.styles.scss"

const defaultFormFields = {
  email: "",
  password: ""
}

const SignIn = ({ toggleComponent }) => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const signInWithGoogle = async () => {
    await signInWithGooglePopup()
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      await signInAuthUserWithEmailAndPassword(email, password)
      resetFormFields()
    } catch (error) {
      console.log("User sign in failed", error)
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <div className="col-12 col-md-8 col-lg-5 mx-auto sign-in-container">
      <h1>Login to Roots</h1>

      <form
        className="login-form"
        onSubmit={handleSubmit}
      >
        <div className="social-login">
          <Button
            buttonType="google"
            type="button"
            onClick={signInWithGoogle}
          >
            Google Sign In
          </Button>
          <div className="social-text">
            or login with your email:
          </div>
        </div>

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

        <Button
          buttonType="secondary"
          type="submit"
        >
          Sign In
        </Button>
      </form>
      <Button
        buttonType="inverted"
        onClick={toggleComponent}
      >
        Register An Account
      </Button>
    </div>
  )
}

export default SignIn
