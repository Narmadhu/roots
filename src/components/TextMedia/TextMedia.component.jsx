import React from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"

import data from "../../data/page-content.json"

import "./TextMedia.styles.scss"

const imagePaths = [
  require("../../assets/images/about/bottles.png"),
  require("../../assets/images/about/flavours.png"),
  require("../../assets/images/about/egg.png")
]

const TextMedia = () => {
  return (
    <div className="text-media">
      <div className="container">
        {data.text_medias.map((text_media, index) => {
          const imagePath = imagePaths[index % imagePaths.length]

          return (
            <div
              className={`row ${text_media.reverseLayout ? "text-media-reverse" : ""}`.trim()}
              key={index}
            >
              <div className="col-12 col-lg-6 text-media-content">
                <h2>{text_media.heading}</h2>
                <p>{text_media.content}</p>
              </div>

              <div className="col-12 col-lg-6 text-media-image">
                <LazyLoadImage
                  src={imagePath}
                  alt={`${text_media.heading} image`}
                  width={460}
                  height={365}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TextMedia
