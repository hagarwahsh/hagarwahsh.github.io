import React from "react"

export default function FooterAccordionItem({ items }) {
  return items.map(item => {
    return (
      <div key={item.itemId} className="footer__accordion__item">
        <div className="footer__accordion_item__header">
          <h5 className="mb-0">
            <button
              className="footer__accordion__item__header__title"
              data-toggle="collapse"
              data-target={`#${item.itemId}`}
              aria-expanded="false"
              aria-controls={item.itemId}
            >
              {item.title}
            </button>
          </h5>
        </div>
        <div
          id={item.itemId}
          className="collapse"
          data-parent="#footer__accordion"
        >
          <div className="footer__accordion__item__body">
            <p>{item.address}</p>
            <p>{`Tel: ${item.tel}`}</p>
          </div>
        </div>
      </div>
    )
  })
}
