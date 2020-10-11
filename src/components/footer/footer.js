import React from "react"
import FooterLinkItem from "./footerLinkItem"
import FooterAccordionItem from "./footerAccordionItem"
import { Link } from "gatsby"

export default function Footer({ title, imageList, btnLink }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
          <Link className="footer__logo" to="/why-dozen"><img src="images/logo-footer.png" alt="" /></Link>
            <p>Building technologies that make employees happier</p>
            <ul className="footer__link-list">
              <FooterLinkItem
                linkItems={[
                  { link: "/why-dozen", text: "Why DoZen" },
                  { link: "/how-it-works", text: "How it Works" },
                  { link: "/about-us", text: "Contact" },
                ]}
              />
            </ul>
          </div>
          <div className="col-md-6">
            <p className="footer__title">Contact</p>
            <div id="footer__accordion" className="footer__accordion">
              <FooterAccordionItem
                items={[
                  {
                    itemId: "usa-office-2",
                    title: "California, USA",
                    address:
                      "3000 El Camino Real, Building 4, Suite 200, Palo Alto, California, 94306",
                    tel: "+1 860 656 6336",
                  },
                  {
                    itemId: "usa-office",
                    title: "Connecticut, USA",
                    address:
                      "20 Batterson Park Rd., Suite 360 Farmington, CT 06032",
                    tel: "+1 860 656 6336",
                  },
                  {
                    itemId: "switzerland-office",
                    title: "Zurich, Switzerland",
                    address: "Grabenstrasse 1 CH-8952 Schlieren Switzerland",
                    tel: "+41 78 955 68 99",
                  },
                  {
                    itemId: "egypt-office",
                    title: "Cairo, Egypt",
                    address: "Nasr City, Free Zone, Area 7B, Block J",
                    tel: "+20 2 2673 6111",
                  },
                  {
                    itemId: "dubai-office",
                    title: "Dubai, UAE",
                    address:
                      "Dubai Internet City Block DIC, Building 17, Office 256 & 257 P.O. Box 500814",
                    tel: "+9714 4370 833",
                  },
                  {
                    itemId: "abudhabi-office",
                    title: "Abu Dhabi, UAE",
                    address:
                      "Al Falah St, 18_3 East Unit, Block 146, Floor 3, Office 307",
                    tel: "+9712 4930 211",
                  },
                ]}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="footer__copyrights">
              <p>
                © 2020 ITWorx All rights reserved |{" "}
                <a
                  className="footer__privacy"
                  href="https://www.itworx.com/privacy-policy/"
                >
                  Privacy Policy
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
