import React, { useState } from "react"

import { library } from "@fortawesome/fontawesome-svg-core"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./AccordionItem.styles.scss"

library.add(
  faChevronDown
)

const AccordionItem = ({
  buttonClassName,
  contentClassName,
  children,
  index,
  isList,
  title,
}) => {
  const [activeIndex, setActiveIndex] = useState(null)

  const handleItemClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const contentElement = isList ? (
    <ul
      className={`accordion-collapse ${contentClassName}`}
    >
      {children}
    </ul>
  ) : (
    <div
      className={`accordion-collapse ${contentClassName}`}
    >
      {children}
    </div>
  )

  return (
    <div className={`accordion-group ${activeIndex === index ? "open" : ""}`.trim()}>
      <button
        className={`accordion-button ${buttonClassName}`}
        onClick={() => handleItemClick(index)}
      >
        {title}
        <FontAwesomeIcon
          icon={["fas", "fa-chevron-down"]}
        />
      </button>
      {contentElement}
    </div>
  )
}

export default AccordionItem
