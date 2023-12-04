import React, { useContext } from "react"

import { CartContext } from "../../../contexts/cart.context"

import { library } from "@fortawesome/fontawesome-svg-core"
import { faBagShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./CartIcon.styles.scss"

library.add(
  faBagShopping
)

const CartIcon = () => {
  const {
    cartCount,
    isCartOpen,
    setIsCartOpen
  } = useContext(CartContext)

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)

  return (
    <div className="col-6 col-lg-1 navbar-right">
      <button
        className="navbar-product-icon"
        onClick={toggleIsCartOpen}
      >
        <FontAwesomeIcon
          icon={["fas", "fa-bag-shopping"]}
          size="2x"
        />
        <span className="navbar-product-icon-value">
          {cartCount}
        </span>
      </button>
    </div>
  )
}

export default CartIcon
