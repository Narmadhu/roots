import React, { useContext } from "react"

import { ProductsContext } from "../../contexts/products.context"

import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.component"
import PageBanner from "../../components/PageBanner/PageBanner.component"
import ProductCard from "../../components/ProductCard/ProductCard.component"

import "./Shop.styles.scss"

const Shop = () => {
  const { products } = useContext(ProductsContext)

  return (
    <>
      <PageBanner label="Shop" />
      <Breadcrumbs label="Shop" />
      <div className="products-container container">
        {
          products.map(({ product }) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))
        }
      </div>
    </>
  )
}

export default Shop
