import React from "react"

import "../../static/scss/main.scss"
import "../../static/scss/vendors/fontawesome/fontawesome.scss"
import "../../static/scss/vendors/fonts/fonts.scss"
import "../../static/scss/vendors/fonts/icomoon.scss"

import Header from "../components/header"
import Hero from "../components/hero"
import Overview from "../components/overview"
import ConnectComponent from "../components/connectComponent"
import BenefitsHeader from "../components/benefitsHeader"
import PromoComponent from "../components/promoComponent"
import ImagesList from "../components/imagesList"
import Blogs from "../components/blogs"
import GetInTouch from "../components/getInTouch"
import Footer from "../components/footer/footer"

export default function HomePage({ pageContext: { imageList } }) {
  console.log(imageList);
  return (
    <div className="body">
      <Header active="index" />

      <main>
        <Hero
          heroImage="images/dozen-laptop.png"
          title="The digital workplace for the next normal."
          subTitle=""
          description="DoZen empowers enterprises to maximize productivity by personalizing the way employees connect, work, and stay informed."
          btn={true}
          showLearnMore={false}
          btnText="Learn More"
        />

        <Overview />

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

        <ConnectComponent
          background-img="images/Rectangle.png"
          text="An intuitive platform that brings together your existing systems."
          imgLayer="images/group-8.png"
          graphicElement1="images/Path.png"
          graphicElement2="images/Path2.png"
          pageName=""
        />

        <BenefitsHeader
          benefits={[
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
        />

        <PromoComponent
          title="Update your intranet(s) to one modern digital workspace."
          description="Replace your stale sites and engage employees by personalizing content, integrating applications, and focusing on the moments that matter."
          btnText="Experience DoZen"
          btnLink="/contact"
          imgSRC="images/promo-why-dozen.jpg"
          showBtn={false}
          image="left"
        />

        <PromoComponent
          title="Support the teams returning to the office with DoZen SafeAtWork."
          description="• Improve communication and collaboration.<br>• Optimize systems, procedures, and information.<br>• Support self-sufficiency and scalability."
          btnText="Experience DoZen"
          btnLink="/how-it-works"
          imgSRC="images/Home-promo-2.jpg"
          showBtn={true}
          image="right"
        />

        <Blogs
          blogs={[
            {
              title: "Remote work",
              description:
                "Remote work has become increasingly popular in the last five years with the increasing popularity...",
              img: "images/remote-blog-circle.png",
              url: "/remote-work",
            },
            {
              title: "Safe return: What does it mean, and can you do it?",
              description:
                "With the onset of COVID-19, the future of work has advanced to the present. The next normal is here... ",
              img: "images/safe-blog-circle.png",
              url: "/safe-return",
            },
            {
              title: "The Future of the Workplace ",
              description:
                "Everything about work is changing, from where we work, to how we work, and what tools and... ",
              img: "images/future-blog-circle.png",
              url: "/future-of-workplace",
            },
            {
              title: "Using Digital Collaboration Platforms ",
              description:
                "One of the most important aspects of present work is the impact it has on collaboration... ",
              img: "images/digital-blog-circle.png",
              url: "/digital-collaboration",
            },
          ]}
        />

        <GetInTouch
          title="Ready for the next normal?"
          description="Get a live demo."
          image="images/get-in-touch.png"
          responsiveImage="images/get-in-touch-mbl.png"
        />
      </main>

      <Footer />
    </div>
  )
}
