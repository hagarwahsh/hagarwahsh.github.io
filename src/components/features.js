import React from "react"
import { Link } from "gatsby"

export default function Features({ title, features, btnLink }) {
  return (
    <section className="see-do-live">
      <div className="container">
        <span className="title">{title}</span>

        <div className="row">
          {features.map((feature, index) => {
            return (
              <div key={index} className="col-6 col-md-4">
                <span className={`icon-${feature.icon}`}></span>
                <span className="item-title">{feature.title}</span>
                <span className="item-desc">{feature.description}</span>
              </div>
            )
          })}
        </div>

        <div className="w-100 col-12 text-center">
            <Link className="btn get-btn" to={btnLink}>Get in Touch</Link>
        </div>
      </div>
    </section>
  )
}
