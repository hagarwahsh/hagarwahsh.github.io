import React from "react"

const NotFoundPage = ({ data, location }) => {
  console.log(`Couldn't load this page with location: ${location}, and data: ${data}`)
  return (
    <>
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </>
  )
}

export default NotFoundPage
