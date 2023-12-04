import React from "react"
import { Link } from "react-router-dom"

import "./Breadcrumbs.styles.scss"

const Breadcrumbs = ({ label }) => {
  return (
    <div className="breadcrumb-container container">
      <div className="row">
        <div className="col-12">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li
                className="breadcrumb-item active"
                aria-current="page"
              >
                {label}
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Breadcrumbs
