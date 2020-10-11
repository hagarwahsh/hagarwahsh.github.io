import React from "react"

export default function ImagesList({ title, imageList, btnLink }) {
  return (
    <section className="images-list">
      <div className="container">
        <span className="images-list-title">{title}</span>
        <ul>
          {imageList.map((image, index) => {
            return (
              <li key={index}>
                <a href={image.link}>
                  <img alt={image.title} src={image.src} />
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
