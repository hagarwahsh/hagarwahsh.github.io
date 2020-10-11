import React from "react"

export default function ConnectComponent({ pageName, text, imgLayer, graphicElement1, graphicElement2, }) {
  return (
    <section className={`connect-component ${pageName}`}>
      <div className="connect-component-wrapper container">
        <div className="row">
          <div className="connect-content col-xs-12 col-md-5 offset-md-7 col-xl-4 offset-xl-8">
            {text}
          </div>
          {pageName === "how-it-works" && (
            <div
              className="col-md-7 peopleImg"
              style={{ backgroundImage: `url('${imgLayer}')` }}
            ></div>
          )}
        </div>
      </div>

      <img alt="graphicElement1" src={graphicElement1} className="above-wave" />
      {pageName !== "how-it-works" && (
        <div
          className="peopleImg"
          style={{  backgroundImage: `url('${imgLayer}')` }}
        ></div>
      )}
      <img alt="graphicElement2" src={graphicElement2} className="bottom-wave" />
    </section>
  )
}
