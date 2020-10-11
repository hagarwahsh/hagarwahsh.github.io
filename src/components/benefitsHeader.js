import React from "react"

export default function BenefitsHeader({ benefits }) {
  let benefitsCounter = 5
  return (
    <section className="benefits-header">
      <div className="container">
        <h2 className="benefits-header__title">Why start using DoZen?</h2>
        <div className="row">
          <div className="col-md-4 col-8 benefits-header__items-list">
            {benefits && benefits.slice(0, benefitsCounter).map((benefit, index) => {
              return (
                <div
                  key={index}
                  className="benefits-header__item benefits-header__item--right text-md-right text-left"
                >
                  <i className={`icon-${benefit.icon}`}></i>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.body}</p>
                </div>
              )
            })}
          </div>
          <div className="col-md-4 d-none d-md-block benefits-header__mockup text-center">
            <img src="images/iphone-x.png" alt="iPhone x" />
          </div>

          <div className="col-md-4 col-8 offset-4 offset-md-0 benefits-header__items-list">
            {benefits && benefits.slice(benefitsCounter, benefits.length).map((benefit, index) => {
              return (
                <div
                  key={index}
                  className="benefits-header__item benefits-header__item--left text-left"
                >
                  <i className={`icon-${benefit.icon}`}></i>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.body}</p>
                </div>
              )
            })}
          </div>
          {/* <!-- <div className="w-100 col-12 text-center">
        <a href="contact.html" className="btn benefits-header__get-btn">Get in Touch</a>
    </div> --> */}
        </div>
      </div>
    </section>
  )
}
