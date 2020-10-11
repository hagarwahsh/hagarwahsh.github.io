import React, { useEffect } from "react"
import Header from "../components/header"
import Hero from "../components/hero"
import Footer from "../components/footer/footer"
import GetInTouch from "../components/getInTouch"
import RelatedBlogs from "./relatedBlogs"

export default function BlogPreview({ pageContext }) {
  const { data, relatedBlogs } = pageContext
  const content =
    data.childContentfulBlogContentRichTextNode.json.content[0].content[0].value
  console.log(data)

  useEffect(() => {
    let target = document.getElementById("contentful-content")
    if (target) {
      target.insertAdjacentHTML("afterend", content)
      target.parentNode.removeChild(target)
    }
  }, [content])

  return (
    <div className="body">
      <Header active="" />

      <main>
        <Hero
          heroImage={data.fullImg}
          title={data.header}
          subTitle={data.subHeader}
        />

        <section className="blog-details">
          <div className="container">
            <div className="row">
              {/* Content */}
              <div key={`content-body`} id="contentful-content" />

              {/* Related Blogs */}
              <RelatedBlogs items={relatedBlogs} />
            </div>
          </div>
        </section>

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
