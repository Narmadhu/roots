import React, { useRef } from "react"
import { Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import useScreenWidth from "../../hook/useScreenWidth"

import { library } from "@fortawesome/fontawesome-svg-core"
import { faRightLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import CategoryItem from "../CategoryItem/CategoryItem.component"

// eslint-disable-next-line import/no-unresolved, import/extensions
import "swiper/css"

import "./Directory.styles.scss"

library.add(
  faRightLeft
)

const Directory = ({ categories }) => {
  const isDesktop = useScreenWidth(992)
  const swiperRef = useRef(null)

  const swiperOptions = {
    breakpoints: {
      0: {
        centeredSlides: true,
        enabled: true,
        slidesPerView: 1.15,
        spaceBetween: 30
      },
      992: {
        enabled: false
      }
    }
  }

  return (
    <Swiper
      className="directory-container container"
      loop={!isDesktop}
      modules={[Navigation]}
      navigation={{
        nextEl: ".swiper-nav-right-custom",
      }}
      onBeforeInit={(swiper) => {
        swiperRef.current = swiper
      }}
      slidesPerView="auto"
      {...swiperOptions}
    >
      {!isDesktop && (
        <div className="swiper-nav-custom">
          <div
            className="swiper-nav-right-custom"
            onClick={() => swiperRef.current?.slideNext()}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                swiperRef.current?.slideNext()
              }
            }}
            role="button"
            tabIndex={0}
          >
            Scroll
            <FontAwesomeIcon icon={["fas", "fa-right-left"]} />
          </div>
        </div>
      )}
      {categories.map((category) => (
        <SwiperSlide
          className="directory-item"
          key={category.id}
        >
          <CategoryItem
            category={category}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Directory
