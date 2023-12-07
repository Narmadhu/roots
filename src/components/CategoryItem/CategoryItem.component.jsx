import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button.component";

import "./CategoryItem.styles.scss";

const CategoryItem = ({ category }) => {
  const navigate = useNavigate();
  const { imageUrl, title } = category;

  return (
    <div className="category-container">
      <LazyLoadImage
        alt={title}
        className="background-image"
        height={296}
        src={imageUrl}
        width={351}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <Button
          buttonType="transparent"
          onClick={() => navigate(`/shop/${title.toLowerCase()}`)}
        >
          Shop Now
        </Button>
      </div>
    </div>
  );
};

export default CategoryItem;
