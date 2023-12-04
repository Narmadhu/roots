import React from "react"
import { Link } from "react-router-dom"

import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.component"
import PageBanner from "../../components/PageBanner/PageBanner.component"

import "./Documents.styles.scss"

const Sitemap = () => {
  return (
    <>
      <PageBanner label="Sitemap" />
      <Breadcrumbs label="Sitemap" />

      <div className="container documents-container">
        <div className="row">
          <div className="col-12">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
                <ul>
                  <li>
                    <Link to="/shop/curry">Curry</Link>
                  </li>
                  <li>
                    <Link to="/shop/deserts">Deserts</Link>
                  </li>
                  <li>
                    <Link to="/shop/drinks">Drinks</Link>
                  </li>
                  <li>
                    <Link to="/shop/pasta">Pasta</Link>
                  </li>
                  <li>
                    <Link to="/shop/pizza">Pizza</Link>
                  </li>
                  <li>
                    <Link to="/shop/salad">Salad</Link>
                  </li>
                  <li>
                    <Link to="/shop/soup">Soup</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/coronavirus-faq">Coronavirus FAQ</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/sitemap">Our Sitemap</Link>
              </li>
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/sustainability">Sustainability</Link>
              </li>
              <li>
                <Link to="/terms-and-conditions">Terms and Conditions</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sitemap
