import React from "react"

import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.component"
import FoundersList from "../../components/FoundersList/FoundersList.component"
import PageBanner from "../../components/PageBanner/PageBanner.component"
import TextMedia from "../../components/TextMedia/TextMedia.component"
import TextVideo from "../../components/TextVideo/TextVideo.component"

const About = () => {
  return (
    <>
      <PageBanner label="About" />
      <Breadcrumbs label="About Us" />
      <TextVideo />
      <FoundersList />
      <TextMedia />
    </>
  )
}

export default About
