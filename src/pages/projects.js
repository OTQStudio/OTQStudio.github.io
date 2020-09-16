import React from 'react'
import { Link } from 'gatsby'

//import Bio from "../components/bio"
import Layout from '../components/layout'
import SEO from "../components/seo"
//import { rhythm } from "../utils/typography"
import Img from "gatsby-image"
import '../styles/layout.scss'

const ProjectPage = ({ data, location }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="PROJECTS" />
      <div className="pageTitle">
        <h2>OTQ Projects</h2>
        <p>Higher Quality and More Creativity</p>
      </div>
      <div className="projectFlex">
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug}>
            <Link to={node.fields.slug}>
                <Img sizes={node.frontmatter.featuredImage.childImageSharp.sizes} />
                <h3>{title}</h3>
            </Link>
          </article>
        )
      })}
      </div>

    </Layout>
  )
}

export default ProjectPage

export const projectQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark( filter: { frontmatter: { category: { eq: "projects" } } }, sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            featuredImage {
              childImageSharp {
                sizes(maxWidth: 630) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`
