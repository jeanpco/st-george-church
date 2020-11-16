import React from 'react'
import BlogLayout from '../components/pages/Blog'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

export const query = graphql`
  query BlogPageQuery($locale: String) {
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
    prismicPhotoGallery(lang: { eq: $locale }) {
      data {
        blog_page_title {
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
