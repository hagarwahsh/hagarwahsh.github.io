import React, { useEffect } from "react"
import { Link } from "gatsby"

export default function BlogContentSection({ content }) {
    useEffect(() => {
        let target = document.getElementById('contentful-content');
        target.insertAdjacentHTML( 'afterend', content )
        //target.parentNode.removeChild(target);
      }, [content]);

  return (
    <section className="blog-details">
      <div className="container">
        <div className="row">
          <div
            key={`content-body`}
            id="contentful-content"
          />

          <div className="col-md-4 col-12 blog-details__related-blogs">
            <h3>Related Blogs</h3>
            <div className="blog-details__related-blog-item">
              <Link
                className="blog-details__related-blog-item"
                to="/remote-work"
              >
                <img src="images/remote-blog-circle.png" alt="" />
                <div className="blog-details__related-blog-item__text">
                  <h4>Remote work</h4>
                  <p>
                    Remote work has become increasingly popular in the last
                    five...
                  </p>
                </div>
              </Link>
            </div>
            <div className="blog-details__related-blog-item">
              <Link
                className="blog-details__related-blog-item"
                to="/safe-return"
              >
                <img src="images/safe-blog-circle.png" alt="" />
                <div className="blog-details__related-blog-item__text">
                  <h4>Safe return: What does it mean, and can you do it?</h4>
                  <p>With the onset of COVID-19, the future of work...</p>
                </div>
              </Link>
            </div>
            <div className="blog-details__related-blog-item">
              <Link
                className="blog-details__related-blog-item"
                to="/future-of-workplace"
              >
                <img src="images/future-blog-circle.png" alt="" />
                <div className="blog-details__related-blog-item__text">
                  <h4>The Future of the Workplace</h4>
                  <p>
                    Everything about work is changing, from where we work...
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
