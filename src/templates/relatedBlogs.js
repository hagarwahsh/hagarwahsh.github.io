import React from "react"
import { Link } from "gatsby"

export default function RelatedBlogs({ items }) {

  return (
    <div className="col-md-4 col-12 blog-details__related-blogs">
      <h3>Related Blogs</h3>
      {items.map(item => {
        return (
          <div key={item.id} className="blog-details__related-blog-item">
            <Link className="blog-details__related-blog-item" to={item.path}>
              <img src={item.img} alt="" />
              <div className="blog-details__related-blog-item__text">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </Link>
          </div>
        )
      })}
    </div>
  )
}
