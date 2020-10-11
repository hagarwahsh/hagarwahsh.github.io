import React from "react"
import { Link } from "gatsby"

export default function Header({ active }) {
  return (
    <header className="header">
      <div className="container">
        <Link className="logo" to="/"><img alt="DoZen logo" src="/images/dozen-logo-2c-primary.png" /></Link>
        <a href="/" className="burger-menu">
          <span></span>
          <span></span>
          <span></span>
        </a>
        <ul className="navigation float-right">
          <li><Link className={`black ${ active === 'why-dozen' ? "active" : "" }`} to="/why-dozen">Why DoZen</Link></li>
          <li><Link className={`${ active === 'how-it-works' ? "active" : "" }`} to="/how-it-works">How It Works</Link></li>
          <li><Link className={`${ active === 'safe-at-work' ? "active" : "" }`} to="/safe-at-work">COVID-19</Link></li>
          <li><Link className={`black ${ active === 'about-us' ? "active" : "" }`} to="/about-us">Contact</Link></li>
          <li><Link className={`bordered ${ active === 'contact' ? "active" : "" }`} to="/contact">Demo DoZen</Link></li>
        </ul>
      </div>
    </header>
  )
}
