import React, { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import Button from "../Button/Button.component";

import "./ProductCard.styles.scss";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;

  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);
  const folderName = imageUrl.split("-");
  return (
    <div className="product-card-container">
      <img src={`/food/${folderName[0]}/${imageUrl}.jpg`} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;
