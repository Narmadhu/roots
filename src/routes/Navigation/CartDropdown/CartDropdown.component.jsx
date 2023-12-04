import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"

import { CartContext } from "../../../contexts/cart.context"

import Button from "../../../components/Button/Button.component"
import CartProducts from "../CartProducts/CartProducts.component"

import "./CartDropdown.styles.scss"

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext)
  const navigate = useNavigate()

  const goToCheckoutHandler = () => {
    navigate("/checkout")
  }

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {
          cartItems.map(item => (
            <CartProducts
              key={item.id}
              CartItem={item}
            />
          )
        )}
      </div>
      <Button
        buttonType="primary"
        onClick={goToCheckoutHandler}
      >
        CHECKOUT
      </Button>
    </div>
  )
}

export default CartDropdown
