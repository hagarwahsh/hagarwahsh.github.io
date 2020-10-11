import React from "react"
import Header from "../components/header"
import Hero from "../components/hero"
import Features from "../components/features"
import SafeAtWorkConnect from "../components/safeAtWorkConnect"
import ImagesList from "../components/imagesList"
import GetInTouch from "../components/getInTouch"
import Footer from "../components/footer/footer"

export default function SafeAtWork() {
  return (
    <div className="body">
      <Header active="safe-at-work" />
      <main>
        <Hero
          heroImage="images/dozen-people.png"
          subTitle="Resume business. Stay safe."
          title="SafeAtWork"
          description="DoZen’s corporate solution for keeping employees safe by managing COVID-19-related workflows privately and securely."
          customClass="hero__image--small"
          btn={true}
          showLearnMore={false}
          btnText="Get in Touch"
        />

        <Features
          btnLink="/about-us"
          title=""
          features={[
            {
              icon: "proactive-monitoring",
              title: "PROACTIVE MONITORING",
              description: "Securely monitor the health of employees.",
            },
            {
              icon: "degrees360",
              title: "360 DEGREE ANALYSIS",
              description:
                "Keep track of your work environment and safety measures.",
            },
            {
              icon: "inteligent-alerting",
              title: "INTELLIGENT ALERTING",
              description: "Alert employees of potential exposure by location.",
            },
            {
              icon: "reassure-employees",
              title: "REASSURE EMPLOYEES",
              description:
                "Provide your team with the resources they need to feel safe.",
            },
            {
              icon: "identify-risk",
              title: "IDENTIFY RISK",
              description:
                "Know the risk levels in your workplace settings so you can act accordingly.",
            },
            {
              icon: "daily-symptoms-screening",
              title: "DAILY SYMPTOM SCREENING",
              description:
                "Ensure company-wide safety through daily employee symptom screenings.",
            },
            {
              icon: "Interation-tracking",
              title: "INTERACTION TRACKING",
              description:
                "Track potential exposure between employees manually and automatically.",
            },
            {
              icon: "get-notified",
              title: "GET NOTIFIED IMMEDIATELY",
              description:
                "Get exposure alerts and recommended actions to take. ",
            },
          ]}
        />

        <SafeAtWorkConnect
          text="Instant private cloud-deployment and high customizability."
          description="Respond to the most current urgent needs with future-proof solutions."
          imgLayer="images/iphone-safeAtWork.png"
          imgClass="mobile-mockup"
          graphicElement1="images/Path.png"
          graphicElement2="images/Path2.png"
          pageName="how-it-works"
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
          image="images/get-in-touch-3.png"
          responsiveImage="images/get-in-touch-mbl-3.png"
        />
      </main>

      <Footer />
    </div>
  )
}
