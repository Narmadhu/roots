import React from "react"

import BannerBg from "../../assets/images/shared/banner.jpg"

import "./PageBanner.styles.scss"

const PageBanner = ({ label }) => {
  return (
    <div className="banner page-banner">
      <img
        src={BannerBg}
        alt="Vegetable Banner"
        className="banner-image"
      />
      <div className="banner-overlay" />
      <div className="container">
        <h1 className="banner-heading">
          {label}
        </h1>
      </div>
    </div>
  )
}

export default PageBanner
