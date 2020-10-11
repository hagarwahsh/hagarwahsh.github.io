import React from "react"

export default function GetInTouch({ title, description, image, responsiveImage,}) {
  return (
    <section className="get-in-touch">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 z-id-1">
            <div className="get-in-touch__content">
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
            <a className="get-in-touch__btn" href="mailto:hello@dozen.ai">
              E-mail Us
            </a>
            <div className="get-in-touch__thanks-message" hidden>
              <p>
                Thanks for your interest in DoZen. We will connect with you very
                soon to schedule a demo.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="get-in-touch__image__dtp"
        title="Employee working from home"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div
        className="get-in-touch__image__mbl"
        title="Employee working from home"
        style={{ backgroundImage: `url(${responsiveImage})` }}
      ></div>
    </section>
  )
}
