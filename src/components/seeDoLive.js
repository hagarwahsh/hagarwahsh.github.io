import React from "react"
import { Link } from "gatsby"

export default function SeeDoLive({ title, seeSec, doSec, liveSec, btnLink }) {
  return (
    <section className="see-do-live">
      <div className="container">
        <span className="title">{title}</span>

        <h3 className="bold">See</h3>
        <div className="row">
          {seeSec.map((item, index) => {
            return (
              <div key={index} className="col-6 col-md-4">
                <span className={`icon-${item.icon}`}></span>
                <span className="item-title">{item.title}</span>
                <span className="item-desc">{item.description}</span>
              </div>
            )
          })}
        </div>

        <h3 className="bold">Do</h3>
        <div className="row">
          {doSec.map((item, index) => {
            return (
              <div key={index} className="col-6 col-md-4">
                <span className={`icon-${item.icon}`}></span>
                <span className="item-title">{item.title}</span>
                <span className="item-desc">{item.description}</span>
              </div>
            )
          })}
        </div>

        <h3>Live</h3>
        <div className="row">
          {liveSec.map((item, index) => {
            return (
              <div key={index} className="col-6 col-md-4">
                <span className={`icon-${item.icon}`}></span>
                <span className="item-title">{item.title}</span>
                <span className="item-desc">{item.description}</span>
              </div>
            )
          })}
        </div>

        <div className="w-100 col-12 text-center">
          <Link className="btn get-btn" to={btnLink}>
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  )
}
