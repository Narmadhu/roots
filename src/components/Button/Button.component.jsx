import React from "react"

import "./Button.styles.scss"

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
  inline: "inline",
  primary: "primary",
  secondary: "secondary",
  transparent: "transparent"
}

const Button = ({
  children,
  buttonType,
  ...otherProps
}) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  )
}

export default Button
