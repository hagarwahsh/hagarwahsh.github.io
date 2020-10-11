import React from "react"
import Header from "../components/header"
import Hero from "../components/hero"
import SeeDoLive from "../components/seeDoLive"
import ConnectComponent from "../components/connectComponent"
import GetInTouch from "../components/getInTouch"
import ImagesList from "../components/imagesList"
import Footer from "../components/footer/footer"

export default function HowItWorks() {
  return (
    <div className="body">
      <Header active="how-it-works" />

      <main>
        <Hero
          heroImage="images/dozen-people.png"
          title="The unified platform for work."
          subTitle=""
          description="Your content, tools, and workflows-all in one place."
          customClass="hero__image--small"
          btn={true}
          showLearnMore={false}
          btnText="Get in Touch"
        />

        <SeeDoLive
          btnLink="/contact"
          title="Communicate, collaborate, collect information, and complete essential tasks— for everyone, anywhere, on any device."
          seeSec={[
            {
              icon: "Internal-Communications1",
              title: "BROADCAST CRITICAL INFORMATION",
              description:
                "Send and track critical information to each employee across channels at scale. ",
            },
            {
              icon: "Metrics1",
              title: "WORLD CLASS CONTENT MANAGEMENT",
              description:
                "Easily manage the full spectrum of content across all channels- and connect the dots between content and employee behavior.",
            },
            {
              icon: "Personalized-Content1",
              title: "PERSONALIZE WITH PRECISION",
              description:
                "The only employee experience platform that actively matches the relevant content to every employee in their preferred language & media.",
            },
            {
              icon: "Internal-Communications1",
              title: "MARKETING AUTOMATION",
              description:
                "Create targeted and relevant communications that leverage all your employee data while reducing the manual efforts required.",
            },
            {
              icon: "Personalized-Content1",
              title: "CONSOLIDATE EXISTING INTRANET SILOS",
              description:
                "Breakdown silos by providing a single platform for all your departments to efficiently create apps, pages, and sites.",
            },
            {
              icon: "Metrics1",
              title: "ENGAGEMENT INSIGHTS",
              description:
                "Measure your impact with real-time metrics to capture and control data that helps you get an end-to-end picture of the employee interactions through their journey, all while keeping costs down and controlling for privacy.",
            },
          ]}
          doSec={[
            {
              icon: "Transform-work2",
              title: "ZENBOX",
              description:
                "Enable employees to do the job from one single platform that aggregates tasks from the third-party applications and lets you prioritize them in one place.",
            },
            {
              icon: "Launchpad1",
              title: "HUMANIZE LEGACY APPS",
              description:
                "Reimagine enterprise applications by bringing human centered design for legacy applications to empower employees and attain business goals.",
            },
            {
              icon: "Forms-Workflow1",
              title: "QUICK ACTIONS",
              description:
                "Enable employees to access and submit what they need for work efficiently through quick actions widgets.",
            },
          ]}
          liveSec={[
            {
              icon: "Self-Service1",
              title: "SELF-SERVICE",
              description: "Take control of what you need, when you need it.",
            },
            {
              icon: "Milestones1",
              title: "MOMENTS THAT MATTER",
              description: "Engage with content and info for major milestones.",
            },
            {
              icon: "Collaboration1",
              title: "EMPLOYEE FIRST EXPERIENCE",
              description:
                "Organize content how employees want to see it, rather than based on the departments in the organization. ",
            },
          ]}
        />

        <ConnectComponent
          text="Personalized and targeted employee experiences —anywhere, on any device."
          imgLayer="images/iPad - 01.png"
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
