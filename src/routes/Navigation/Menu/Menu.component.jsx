import React, { useState, useContext } from "react"

import { Link } from "react-router-dom"

import { CartContext } from "../../../contexts/cart.context"

import useScreenWidth from "../../../hook/useScreenWidth"

import CartDropdown from "../CartDropdown/CartDropdown.component"
import CartIcon from "../CartIcon/CartIcon.component"
import MenuList from "../MenuList/MenuList.component"
import MenuModal from "../MenuModal/MenuModal.component"

import Logo from "../../../assets/images/logo.png"

import "./Menu.styles.scss"

const Menu = () => {
  const isDesktop = useScreenWidth(992)
  const { isCartOpen } = useContext(CartContext)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [showModal, setShowModal] = useState(false)

  const toggleModal = () => {
    setShowModal(!showModal)

    if (!showModal) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }

  const closeModal = () => {
    setShowModal(false)

    document.body.style.overflow = "auto"
  }

  const handleScroll = () => {
    const currentPosition = window.pageYOffset
    setScrollPosition(currentPosition)
  }

  window.addEventListener("scroll", handleScroll)

  return (
    <nav
      className="navbar navbar-expand-lg sticky-top"
      id="topNavbar"
    >
      <div className="container navbar-container">
        <div className="row navbar-row">
          <div className="col-6 col-lg-11 navbar-left">
            <Link
              className="navbar-brand"
              to="/"
            >
              <img
                alt="Roots Restaurant"
                className="navbar-logo"
                src={Logo}
                height={55}
                width={55}
              />
            </Link>
            <button
              aria-label="Toggle navigation"
              className={`navbar-toggler ${showModal ? "open" : "closed"}`}
              onClick={toggleModal}
              type="button"
            >
              <span className="navbar-toggler-icon">
                <div className="hamburger-icon" />
              </span>
            </button>
            {showModal && !isDesktop ? (
              <MenuModal
                showModal={showModal}
                closeModal={closeModal}
                scrollPosition={scrollPosition}
              />
            ) : (
              <MenuList />
            )}
          </div>
          <CartIcon />
          {isCartOpen && (
            <CartDropdown />
          )}
        </div>
      </div>
    </nav>
  )
}

export default Menu
