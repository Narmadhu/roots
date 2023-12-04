import React from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"

import data from "../../data/page-content.json"

import "./FoundersList.styles.scss"

const imagePaths = [
  require("../../assets/images/about/danielle-sanchez.png"),
  require("../../assets/images/about/nicole-gabbiadini.png")
]

const FoundersList = () => {
  return (
    <div className="container founders">
      <h2 className="founders-main-heading">
        {data.founders.foundersMainHeading}
      </h2>
      <div className="row">
        {data.founders.list.map((founder, index) => {
          const imagePath = imagePaths[index % imagePaths.length]

          return (
            <div className="col-12 col-lg-6 founders-item">
              <LazyLoadImage
                src={imagePath}
                className="founders-image mx-auto"
                alt={`${founder.heading} founder image`}
                width={350}
                height={407}
              />
              <h3 className="founders-name">{founder.heading}</h3>
              <p className="founders-copy">{founder.content}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FoundersList
