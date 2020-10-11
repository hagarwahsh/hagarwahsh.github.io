import React from "react"

export default function InnerPromoComponent({ img1, img2, pageName, cards, innerPromoDesc,}) {
  return (
    <section
      style={{ backgroundImage: `url(${img1}), url(${img2})` }}
      className={`inner-promo-wrapper ${pageName}`}
    >
      <div className="container cards-wrapper">
        <div className="row">
          <div className="card-content-wrapper">
            {cards.map((card, index) => {
              return (
                <div key={index} className="card-wrapper">
                  <i className={`icon-${card.icon}`}></i>
                  <h3 className="card-title">{card.title}</h3>
                  <p>{card.body}</p>
                </div>
              )
            })}
          </div>
        </div>
        <div className="row">
          <div className="inner-promo-descripiton col-md-10">
            {innerPromoDesc}
          </div>
        </div>
      </div>
    </section>
  )
}
