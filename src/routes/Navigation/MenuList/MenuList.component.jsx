import React, { useContext } from "react"

import { Link, useLocation } from "react-router-dom"

import { signOutUser } from "../../../utils/firebase/firebase.utils"

import data from "../../../data/page-content.json"

import useScreenWidth from "../../../hook/useScreenWidth"

import { UserContext } from "../../../contexts/user.context"

import "./MenuList.styles.scss"

const MenuList = ({ showModal }) => {
  const isDesktop = useScreenWidth(992)
  const { currentUser } = useContext(UserContext)
  const location = useLocation()

  const isActive = (to) => {
    return to === location.pathname
  }

  return (
    <div
      className={`navbar-collapse offset-lg-1 ${!showModal ? "collapse" : ""}`.trim()}
    >
      <ul
        className={`navbar-nav mx-auto mb-lg-0 ${isDesktop ? "mb-2" : ""}`.trim()}
      >
        {data.header_links.map((link) => (
          <li
            className="nav-item"
            key={link.text}
          >
            <Link
              aria-current="page"
              className={`nav-link navbar-link mx-lg-3 ${isActive(link.href) ? "active" : ""}`.trim()}
              to={link.href}
            >
              {link.text}
            </Link>
          </li>
        ))}
        <li className="nav-item">
          {currentUser ? (
            <span
              className={`nav-link navbar-link ${location.pathname.includes("/auth") ? "active" : ""}`.trim()}
              onClick={signOutUser}
            >
              Sign Out
            </span>
          ) : (
            <Link
              className={`nav-link navbar-link ${location.pathname.includes("/auth") ? "active" : ""}`.trim()}
              to="/auth"
            >
              Sign In
            </Link>
          )}
        </li>
      </ul>
    </div>
  )
}

export default MenuList
