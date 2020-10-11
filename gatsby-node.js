// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Query for markdown nodes to use in creating pages.
  const result = await graphql(
    `
      {
        allContentfulBlog {
          nodes {
            id
            img
            header
            subHeader
            fullImg
            title
            childContentfulBlogDescriptionTextNode {
              description
            }
            childContentfulBlogContentRichTextNode {
              childContentfulRichText {
                id
              }
              json
            }
            path
          }
        }
      }
    `
  )

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const nodes = result.data.allContentfulBlog.nodes

  const listItems = nodes.map(node => {
    return {
      id: node.id,
      title: node.title,
      description: node.childContentfulBlogDescriptionTextNode.description,
      path: node.path,
      img: node.img
    }
  });

  // create home page with the blogs
  const homeComponent = path.resolve(`src/components/home.js`)
  createPage({
    path: "/",
    component: homeComponent,
    context: {
      data: listItems,
    },
  })

  // Create pages for each blog file.
  const blogPostTemplate = path.resolve(`src/templates/blogPreview.js`)
  nodes.forEach(node => {
    createPage({
      path: node.path,
      component: blogPostTemplate,
      context: {
        data: node,
        relatedBlogs: listItems.filter(item => item.id !== node.id)
      },
    })
  })
}
