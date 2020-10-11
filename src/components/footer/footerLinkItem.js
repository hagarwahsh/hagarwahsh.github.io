import React from "react"
import { Link } from "gatsby"

export default function FooterLinkItem({ linkItems }) {
  return linkItems.map((item, index) => {
    return (
      <li key={index} className="footer__link-list__item">
        <Link className="footer__link-list__item__link" to={item.link}>{item.text}</Link>
      </li>
    )
  })
}
