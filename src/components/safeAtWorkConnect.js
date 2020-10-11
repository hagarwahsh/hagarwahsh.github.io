import React from "react"

export default function SafeAtWorkConnect({ pageName, text, description, imgClass, imgLayer, graphicElement1, graphicElement2 }) {
  return (
    <section className={`connect-component ${pageName}`}>
      <div className="connect-component-wrapper container">
        <div className="row">
          <div className="connect-content col-xs-12 col-md-6 offset-md-6 col-xl-4 offset-xl-8">
            <div className="wrapper">
              <header>
                <h4 className="">{text}</h4>
              </header>
              <div className="imagery-content">
                <p className="">{description}</p>
              </div>
            </div>
          </div>
          {pageName === "how-it-works" && (
            <div
              className={`col-md-7 peopleImg ${imgClass}`}
              style={{ backgroundImage: `url(${imgLayer})` }}
            ></div>
          )}
        </div>
      </div>

      <img alt="graphic1" src={graphicElement1} className="above-wave" />

      {pageName !== "how-it-works" && (
        <div
          className="peopleImg"
          style={{ backgroundImage: `url(${imgLayer})` }}
        ></div>
      )}

      <img alt="graphic2" src={graphicElement2} className="bottom-wave" />
    </section>
  )
}
