import React from "react"

import { Link } from "react-router-dom"

import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./SocialList.styles.scss"

library.add(
  fab
)

const SocialList = () => {
  return (
    <ul className="top-header-social-list">
      <li className="top-header-social-item">
        <Link
          className="top-header-social-link"
          rel="noreferrer"
          target="_blank"
          to="https://en-gb.facebook.com/"
        >
          <FontAwesomeIcon
            icon={["fab", "fa-facebook-f"]}
          />
        </Link>
      </li>
      <li className="top-header-social-item">
        <Link
          className="top-header-social-link"
          rel="noreferrer"
          target="_blank"
          to="https://twitter.com/"
        >
          <FontAwesomeIcon
            icon={["fab", "fa-twitter"]}
          />
        </Link>
      </li>
      <li className="top-header-social-item">
        <Link
          className="top-header-social-link"
          rel="noreferrer"
          target="_blank"
          to="https://www.instagram.com/"
          >
          <FontAwesomeIcon
            icon={["fab", "fa-instagram"]}
          />
        </Link>
      </li>
    </ul>
  )
}

export default SocialList
