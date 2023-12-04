import React, { useEffect, useRef, useState } from "react"

import { createPortal } from "react-dom"

import useScreenWidth from "../../hook/useScreenWidth"

import data from "../../data/page-content.json"

import { library } from "@fortawesome/fontawesome-svg-core"
import { faPlay } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { LazyLoadImage } from "react-lazy-load-image-component"

import aboutDesktop from "../../assets/images/about/about-desktop.jpg"
import aboutMobile from "../../assets/images/about/about-mobile.jpg"
import aboutVideo from "../../assets/images/about/video.mp4"
import aboutVideoImg from "../../assets/images/about/video.jpg"

import "./TextVideo.styles.scss"

library.add(
  faPlay
)

const TextVideo = () => {
  const [showModal, setShowModal] = useState(false)
  const videoModalRef = useRef(null)
  const isDesktop = useScreenWidth(992)

  const handleClick = () => {
    setShowModal(true)
  }

  const handleClose = () => {
    setShowModal(false)
  }

  useEffect(() => {
    if (showModal) {
      document.body.style.overflowY = "hidden"
    } else {
      document.body.style.overflowY = "auto"
    }
  }, [showModal])

  return (
    <div className="container">
      <div className="row about-video">
        <div className="col-12 col-lg-5 about-media">
          {
            isDesktop ? (
              <LazyLoadImage
                src={aboutDesktop}
                alt="Desktop About Image"
                width={1280}
                height={1920}
              />
            ) : (
              <LazyLoadImage
                src={aboutMobile}
                alt="Mobile About Image"
                width={991}
                height={631}
              />
            )
          }

          <button
            type="button"
            className="play-video"
            data-bs-toggle="modal"
            data-bs-target={videoModalRef}
            onClick={handleClick}
          >
            <FontAwesomeIcon icon={["fas", "fa-play"]} />
          </button>

          {showModal && createPortal(
            <div
              className={`modal fade video-modal ${showModal ? "show" : ""}`.trim()}
              ref={videoModalRef}
              tabindex="-1"
              aria-labelledby="aboutVideolLabel"
              aria-hidden={showModal}
            >
              <div className="modal-dialog">
                <video
                  className="modal-video"
                  controls="controls"
                  autoplay="false"
                  loop="false"
                  muted
                  poster={aboutVideoImg}
                >
                  <source
                    src={aboutVideo}
                    type="video/mp4"
                  />
                </video>
              </div>
              <div
                className="modal-overlay"
                onClick={handleClose}
              />
            </div>,
            document.getElementById("modal-root")
          )}
        </div>

        <div className="col-12 col-lg-7 about-content">
          <h2>{data.about_copy.heading}</h2>

          {data.about_copy.copy.map((copy, index) => {
            return (
              <p key={index}>
                {copy.text}
              </p>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default TextVideo
