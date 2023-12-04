import React from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { Link, useLocation } from "react-router-dom"

import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { faAngleUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import FooterForm from "./FooterForm/FooterForm.component"

import Logo from "../../assets/images/logo.png"

import data from "../../data/page-content.json"

import "./Footer.styles.scss"

library.add(
  faAngleUp,
  fab
)

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const location = useLocation()

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <footer className="footer">
      <div className="footer-backtop" onClick={handleScrollToTop}>
        <FontAwesomeIcon
          icon={["fas", "fa-angle-up"]}
          size="2x"
        />
      </div>
      <div className="container footer-container">
        <div className="row">
          <div className="col-12 col-lg-4">
            <Link
              className="footer-logo"
              to="/"
            >
              <LazyLoadImage
                alt="Roots Restaurant"
                src={Logo}
                height={55}
                width={55}
              />
            </Link>
            <ul className="footer-address">
              <li className="footer-address-item">
                {data.business_details.address.street}
              </li>
              <li className="footer-address-item">
                {data.business_details.address.city}
              </li>
              <li className="footer-address-item">
                {data.business_details.address.state}
              </li>
              <li className="footer-address-item">
                {data.business_details.address.county}
              </li>
              <li className="footer-address-item">
                {data.business_details.address.postal_code}
              </li>
              <li className="footer-address-item">
                {data.business_details.address.email}
              </li>
            </ul>
          </div>
          <div className="col-12 col-lg-4">
            <h4 className="footer-heading">
              {data.footer_copy.links_heading}
            </h4>
            <div className="footer-pages">
              <ul className="footer-pages-list">
                {data.footer_links
                  .sort((a, b) => a.ul_list - b.ul_list || a.order - b.order)
                  .filter(link => link.ul_list === 1)
                  .map((link, index) => (
                    <li key={index}>
                      <Link
                        className={`footer-pages-link ${
                          link.href === location.pathname
                            ? "footer-pages-link-active"
                            : ""
                        }`.trim()}
                        to={link.href}
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
              </ul>
              <ul className="footer-pages-list">
                {data.footer_links
                  .sort((a, b) => a.ul_list - b.ul_list || a.order - b.order)
                  .filter(link => link.ul_list === 2)
                  .map((link, index) => (
                    <li key={index}>
                      <Link
                        className={`footer-pages-link ${
                          link.href === location.pathname
                            ? "footer-pages-link-active"
                            : ""
                        }`.trim()}
                        to={link.href}
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <h4 className="footer-heading">{data.footer_copy.newsletter_heading}</h4>
            <p className="footer-bodycopy">{data.footer_copy.newsletter_copy}</p>
            <FooterForm />
            <ul className="footer-social">
              <li className="footer-social-list">
                <Link
                  className="footer-social-link"
                  rel="noreferrer"
                  target="_blank"
                  to="https://en-gb.facebook.com/"
                >
                  <FontAwesomeIcon
                    icon={["fab", "fa-facebook-f"]}
                  />
                </Link>
              </li>
              <li className="footer-social-list">
                <Link
                  className="footer-social-link"
                  rel="noreferrer"
                  target="_blank"
                  to="https://twitter.com/"
                >
                  <FontAwesomeIcon
                    icon={["fab", "fa-twitter"]}
                  />
                </Link>
              </li>
              <li className="footer-social-list">
                <Link
                  className="footer-social-link"
                  rel="noreferrer"
                  target="_blank"
                  to="https://www.instagram.com/"
                >
                  <FontAwesomeIcon
                    icon={["fab", "fa-instagram"]}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="row">
            <div className="col-12 col-lg-6">
              <span className="footer-copyright-text">
                Copyright &copy; {currentYear}. All rights reserved | Roots Healthy Restaurant
              </span>
            </div>
            <div className="col-12 col-lg-6">
              <ul className="footer-payment">
                <li className="footer-payment-list">
                  <FontAwesomeIcon
                    icon={["fab", "fa-cc-visa"]}
                    size="2x"
                  />
                </li>
                <li className="footer-payment-list">
                  <FontAwesomeIcon
                    icon={["fab", "fa-cc-mastercard"]}
                    size="2x"
                  />
                </li>
                <li className="footer-payment-list">
                  <FontAwesomeIcon
                    icon={["fab", "fa-cc-paypal"]}
                    size="2x"
                  />
                </li>
                <li className="footer-payment-list">
                  <FontAwesomeIcon
                    icon={["fab", "fa-cc-amex"]}
                    size="2x"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
