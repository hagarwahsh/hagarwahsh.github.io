import React from "react"
import Header from "../components/header"
import Hero from "../components/hero"
import InnerPromoComponent from "../components/innerPromoComponent"
import PromoComponent from "../components/promoComponent"
import ImagesList from "../components/imagesList"
import GetInTouch from "../components/getInTouch"
import Footer from "../components/footer/footer"

export default function WhyDoZen() {
  return (
    <div className="body">
      <Header active="why-dozen" />
      <main>
        <Hero
          heroImage="images/dozen-laptop.png"
          title="A transformative workplace solution."
          subTitle=""
          description="The future of work is here. DoZen is the platform for your digital transformation."
          btn={true}
          showLearnMore={false}
          btnText="Get in Touch"
        />

        <InnerPromoComponent
          cards={[
            {
              title: "See what matters.",
              body: "Manage and deliver personalized content at scale.",
              icon: "Web-Icone-Happiness",
            },
            {
              title: "Know what's important.",
              body: "Send relevant critical information to every employee.",
              icon: "Web-Icone-Collaboration",
            },
            {
              title: "Be more productive.",
              body: "Manage and complete all tasks from within DoZen.",
              icon: "Web-Icone-WorkLifeBalance",
            },
            {
              title: "Do more with less.",
              body: "Unify your apps and services onto one platform.",
              icon: "Web-Icone-Development",
            },
            {
              title: "Work how you want.",
              body: "Connect your entire workforce, no matter where they are.",
              icon: "Web-Icone-Development",
            },
            {
              title: "Focus on the essential.",
              body: "Easily guide employees through moments that matter.",
              icon: "Web-Icone-FlexibleWork",
            },
            {
              title: "Understand your data.",
              body:
                "Integrated analytics to enable you to easily measure engagment and goals.",
              icon: "Web-Icone-Personalized",
            },
            {
              title: "Know the difference.",
              body:
                "Differentiate between participation and successful engagment. ",
              icon: "Web-Icone-Performance",
            },
            {
              title: "Retain employees.",
              body:
                "Understand engagment trends and drive retention with purpose-built tools to reduce turnover. ",
              icon: "Web-Icone-WorkAnywhere",
            },
            {
              title: "Extend your experience.",
              body:
                "Use our developer toolkit to build your own custom apps with DoZen. ",
              icon: "Web-Icone-WorkAnywhere",
            },
          ]}
          innerPromoDesc="DoZen was purpose built to help you and your employees to work securely from anywhere with anyone on any device. "
          img-1="images/waves-1.png"
          img-2="images/waves-2.png"
        />

        <PromoComponent
          title="The best of internal communications, HR and IT."
          description="Seamlessly bring together your departments, systems, process and people."
          btnText="Get in Touch"
          btnLink="/contact"
          imgSRC="images/promo-why-dozen.jpg"
          showBtn={true}
          image="left"
        />

        <PromoComponent
          title="Designed with people in mind."
          description="Create personalized and targeted solutions that reflect your organization’s diverse ways of working."
          btnText="Experience DoZen"
          btnLink="/contact"
          imgSRC="images/promo-5.png"
          showBtn={false}
          image="right"
        />

        <PromoComponent
          title="A more livable way to work."
          description="DoZen mimics the ways we engage digitally every day, making it easy to collaborate, communicate, and get work done anywhere and on any device."
          btnText="Get in Touch"
          btnLink="/contact"
          imgSRC="images/Home-promo-3.jpg"
          showBtn={true}
          image="left"
        />

        <ImagesList
          title="Powered by best-in-class software. Integrates seamlessly with existing applications."
          imageList={[
            {
              src: "images/Sitecore-Logo.png",
              link: "https://www.sitecore.com/",
              title: "Sitecore",
            },
            {
              src: "images/Microsoft-Logo.png",
              link: "https://www.microsoft.com/",
              title: "Microsoft",
            },
            {
              src: "images/SAP_logo.png",
              link: "https://www.sap.com/index.html",
              title: "SAP",
            },
            {
              src: "images/Office365.png",
              link: "https://www.office.com/",
              title: "Office 365",
            },
            {
              src: "images/Yammer-logo.png",
              link: "https://www.yammer.com/",
              title: "Yammer",
            },
            {
              src: "images/servicenow.png",
              link: "https://www.servicenow.com/",
              title: "Servicenow",
            },
            {
              src: "images/Microsoft-Teams.png",
              link:
                "https://www.microsoft.com/en/microsoft-365/microsoft-teams/group-chat-software",
              title: "Microsoft Teams",
            },
          ]}
        />

        <GetInTouch
          title="Ready for the next normal?"
          description="Get a live demo."
          image="images/get-in-touch-2.png"
          responsiveImage="images/get-in-touch-mbl-2.png"
        />
      </main>

      <Footer />
    </div>
  )
}
