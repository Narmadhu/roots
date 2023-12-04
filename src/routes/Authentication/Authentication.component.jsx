import React from "react"

import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.component"
import SignIn from "../../components/SignIn/SignIn.component"
import SignUp from "../../components/SignUp/SignUp.component"

import "./Authentication.style.scss"

const Authentication = () => {
  return (
    <div className="authentication-container container">
      <Breadcrumbs label="Authenticate" />
      <SignIn />
      <SignUp />
    </div>
  )
}

export default Authentication
