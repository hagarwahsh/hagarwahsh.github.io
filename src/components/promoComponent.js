import React from "react"
import { Link } from "gatsby"

export default function PromoComponent({ image, title, description, showBtn, btnText, btnLink, imgSRC, }) {
  return (
    <section className={`imagery-component ${image}`}>
      <div className="container ">
        <div className="row">
          <div className=" col-xs-12 col-lg-5 content-wrapper">
            <div className="wrapper">
              <header>
                <h4 className="">{title}</h4>
              </header>
              <div className="imagery-content">
                <p className="">{description}</p>
                {showBtn === true && (
                  <Link className="imagery-btn" to={btnLink}>
                    {btnText}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="imagrey-img"
        style={{ backgroundImage: `url(${imgSRC})` }}
      ></div>
    </section>
  )
}
