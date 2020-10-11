import React from "react"
import Header from "../components/header"
import Hero from "../components/hero"
import Footer from "../components/footer/footer"
import ContactForm from "../components/contactForm"


export default function Contact() {
  return (
    <div className="body">
      <Header active="contact" />

      <main>
      <Hero
          heroImage="images/dozen-about.png"
          title="We work hard to make your work better."
          subTitle=""
          description="DoZen is a global technology provider dedicated to improving employee experiences across enterprise organizations."
          customClass="hero--with-bg-img"
          btn={false}
          showLearnMore={false}
        />

        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
