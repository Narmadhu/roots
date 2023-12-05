import React, { useState } from "react"

import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.component"
import SignIn from "../../components/SignIn/SignIn.component"
import SignUp from "../../components/SignUp/SignUp.component"

import "./Authentication.style.scss"

const Authentication = () => {
  const [showSignIn, setShowSignIn] = useState(true)

  const toggleAuthenticationComponent = () => {
    setShowSignIn(!showSignIn)
  }

  return (
    <div className="authentication-container container">
      <Breadcrumbs label={showSignIn ? "Login" : "Create Account"} />
      {showSignIn ? (
        <SignIn toggleComponent={toggleAuthenticationComponent} />
      ) : (
        <SignUp toggleComponent={toggleAuthenticationComponent} />
      )}
    </div>
  )
}

export default Authentication
