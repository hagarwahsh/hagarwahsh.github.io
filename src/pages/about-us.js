import React from "react"
import Header from "../components/header"
import Hero from "../components/hero"
import InnerPromoComponent from "../components/innerPromoComponent"
import ImagesList from "../components/imagesList"
import GetInTouch from "../components/getInTouch"
import Footer from "../components/footer/footer"

export default function AboutUs() {
  return (
    <div className="body">
      <Header active="about-us" />

      <main>
        <Hero
          heroImage="images/dozen-about.png"
          title="We work hard to make your work better."
          subTitle=""
          description="DoZen is a global technology provider dedicated to improving employee experiences across enterprise organizations."
          customClass="hero--with-bg-img hide-img"
          btn={true}
          showLearnMore={false}
          btnText="Get in Touch"
        />

        <InnerPromoComponent
          cards={[
            {
              icon: "Collaboration1",
              title:
                "Over 25 years of expertise in digital and employee experience.  ",
            },
            {
              icon: "Collaboration1",
              title:
                "A team of X industry experts working around the globe and around the clock.",
            },
            {
              icon: "Happy-Employee2",
              title:
                "Successfully deployed solutions that have made millions of employees happier and better performing. ",
            },
          ]}
          innerPromoDesc="DoZen started with the central purpose to build technologies that make employees happier. We believe that when you invest in the needs of people over the end goals of products you will prove value time and time again. We pride ourselves on providing the most intuitive and enjoyable employee experiences no matter who you are, where you work, or what you do. "
          img-1="images/gradient-circle-1.png"
          img-2="images/gradient-circle-2.png"
          pageName="about-us"
        />

        <ImagesList
          title="Trusted by leading organizations that invest in their employees."
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
          title="Ready to start working smarter?"
          description="Get a live demo to see how DoZen can help you empower employees with easy and enjoyable experiences."
          image="images/get-in-touch-4.png"
          responsiveImage="images/get-in-touch-mbl-4.png"
        />
      </main>
      <Footer />
    </div>
  )
}
