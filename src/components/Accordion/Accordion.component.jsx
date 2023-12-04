import React from "react"

const Accordion = ({
  children,
  className
}) => {
  return (
    <div className={`accordion ${className}`}>
      {children}
    </div>
  )
}

export default Accordion
