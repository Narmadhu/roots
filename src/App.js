import React from "react"

import { Route, Routes } from "react-router-dom"

import About from "./routes/About/About.component"
import Authentication from "./routes/Authentication/Authentication.component"
import Checkout from "./routes/Checkout/Checkout.component"
import Contact from "./routes/Contact/Contact.component"
import CoronavirusFAQ from "./routes/Documents/CoronavirusFaq.component"
import FAQ from "./routes/Documents/Faq.component"
import Footer from "./components/Footer/Footer.component"
import Home from "./routes/Home/Home.component"
import Navigation from "./routes/Navigation/Navigation.component"
import PrivacyPolicy from "./routes/Documents/PrivacyPolicy.component"
import Shop from "./routes/Shop/Shop.component"
import Sitemap from "./routes/Documents/Sitemap.component"
import Sustainability from "./routes/Documents/Sustainability.component.jsx"
import TermsConditions from "./routes/Documents/TermsConditions.component"

import "./styles/styles.scss"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="about" element={<About />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="contact" element={<Contact />} />
          <Route path="coronavirus-faq" element={<CoronavirusFAQ />} />
          <Route path="faq" element={<FAQ />} />
          <Route index element={<Home />}  />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="sitemap" element={<Sitemap />} />
          <Route path="sustainability" element={<Sustainability />} />
          <Route path="terms-and-conditions" element={<TermsConditions />} />
        </Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
