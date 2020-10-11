import React from "react"
import { Link } from "gatsby"

export default function Hero({title, subTitle, description, btn, btnText, showLearnMore, heroImage, customClass,}) {
  return (
    <section className="hero @@hero-class">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-xl-6 hero__content">
            <div className="hero__text">
              <h1>{title}</h1>
              {subTitle !== "" && <h2>{subTitle}</h2>}
              <p>{description}</p>
            </div>
            <div className="hero__buttons">
              {btn === true && (
                <Link className="btn hero__get-btn" to="/about-us">
                  {btnText}
                </Link>
              )}
              {showLearnMore === true && (
                <Link className="hero__link" to="/why-dozen">
                  Learn more
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${heroImage})` }}
        className={`hero__image ${customClass}`}
      ></div>
    </section>
  )
}
