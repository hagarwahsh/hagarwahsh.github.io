import React from "react"
import { Link } from "gatsby"

export default function Blogs({ blogs }) {
  return (
    <section className="blogs">
      <div className="container">
        <div className="w-100 blogs__title">
          <h2>Stay in the know</h2>
          <p>Our latest insights and resources.</p>
        </div>
        <div className="row">
          {blogs &&
            blogs.map((blog, index) => {
              return (
                <div
                  key={index}
                  className="col-12 col-md-6 col-lg-3 blogs__card"
                >
                  <div className="blogs__card-img">
                    <img src={blog.img} alt=""/>
                  </div>
                  <div className="blogs__card-title">{blog.title}</div>
                  <div className="blogs__card-content">
                    <p>{blog.description}</p>
                  </div>
                  <div className="blogs__card-button">
                      <Link to={blog.path}><button>Read more</button></Link>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </section>
  )
}
