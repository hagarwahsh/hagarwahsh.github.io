import React from "react"
import Header from "../components/header"
import Hero from "../components/hero"
import Footer from "../components/footer/footer"
import GetInTouch from "../components/getInTouch"
import BlogContentSection from "./blogContentSection"

export default function BlogPost({ pageContext } ) {
  const { data } = pageContext;
  console.log(data);

  return (
    <div className="body">
      <Header active="" />

      <main>
        <Hero
          heroImage={data.fullImg}
          title={data.header}
          subTitle={data.subHeader}
        />

        {/* Content */}
        <BlogContentSection
          content={data.childContentfulBlogContentRichTextNode.json.content[0].content[0].value}
        />

        {/* related blogs component */}

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
