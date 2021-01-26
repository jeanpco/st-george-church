import React from 'react'
import BlogLayout from '../components/pages/Blog'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

export const query = graphql`
  query BlogFrPageQuery($locale: String) {
    allGhostPost(filter: { tags: { elemMatch: { slug: { eq: $locale } } } }) {
      nodes {
        tags {
          slug
        }
        slug
        title
        localFeatureImage {
          childImageSharp {
            fluid(maxWidth: 359, maxHeight: 252) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        html
        excerpt
      }
    }
    prismicBlog(lang: { eq: $locale }) {
      data {
        blog_title {
          text
        }
        blog_subtitle {
          text
        }
        orthoflash_title {
          text
        }
        orthoflash_subtitle {
          text
        }
      }
    }
  }
`

const Blog = ({ location, data }) => {
  return <BlogLayout data={data} location={location} />
}

Blog.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
}

export default Blog
