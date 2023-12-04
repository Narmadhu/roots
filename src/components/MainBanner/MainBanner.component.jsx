import React, { useRef } from "react"

import { Autoplay, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import data from "../../data/page-content.json"
import ImageBanner1 from "../../assets/images/home/home-slide-1.jpg"
import ImageBanner2 from "../../assets/images/home/home-slide-2.jpg"
import ImageBanner3 from "../../assets/images/home/home-slide-3.jpg"

// eslint-disable-next-line import/no-unresolved, import/extensions
import "swiper/css"

import "./MainBanner.styles.scss"

const MainBanner = () => {
  const swiperRef = useRef(null)
  const imageBanners = [
    ImageBanner1,
    ImageBanner2,
    ImageBanner3
  ]

  return (
    <>
      <Swiper
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        className="banner"
        modules={[Autoplay, Pagination]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper
        }}
        pagination={{
          el: ".swiper-pagination-custom",
          clickable: true
        }}
        slidesPerView="auto"
      >
        <div className="container swiper-pagination-custom" />
        {data.main_banner.map((banner, index) => (
          <SwiperSlide className="bannerSlide" key={`image-${index + 1}`}>
            <img
              className="bannerImage"
              src={imageBanners[index % imageBanners.length]}
              alt={`Banner ${index + 1}`}
            />
            <div className="container">
              <div className="bannerText">
                <p>{banner.bannerText}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default MainBanner
