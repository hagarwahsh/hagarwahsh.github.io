import React from "react"

export default function ContactForm({ title, features, btnLink }) {
  return (
    <section className="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>Hello</h2>
            <p>
              Fill in the form below and we'll be in touch with you shortly.
            </p>
            <p>Don't worry, we will never share your email with anyone.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-7">
            <span>fields marked with an * are required</span>
            <form action="" id="contact-us">
              <div className="form-row">
                <div className="col-md-6">
                  <label for="first-name" className="required">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    placeholder="Please enter your first name"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label for="last-name" className="required">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    placeholder="Please enter your last name"
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="col-md-6">
                  <label for="contact-email" className="required">
                    Email
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    placeholder="Please enter your email adress"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label for="phone">Phone</label>
                  <input
                    type="text"
                    id="phone"
                    placeholder="Please enter your phone number"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="col-md-6">
                  <label for="organization">Organization</label>
                  <input
                    type="text"
                    id="organization"
                    placeholder="Please enter your Organization"
                  />
                </div>
                <div className="col-md-6">
                  <label for="job-title">Job Title</label>
                  <input
                    type="text"
                    id="job-title"
                    placeholder="Please enter your Job Title"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="col">
                  <label for="message">How can we help?</label>
                  <textarea
                    name="message"
                    id="message"
                    rows="10"
                    placeholder="your message here"
                  ></textarea>
                  <button type="submit">Contact Me</button>
                </div>
              </div>
            </form>
            <p className="contact__thanks-message" hidden>
              Thanks for your interest in DoZen. We received your inquiry and we
              will connect with you very soon.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
