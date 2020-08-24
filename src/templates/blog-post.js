import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'
import get from 'lodash/get'
import { graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import PropTypes from 'prop-types'
import Bio from '../components/Bio'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.cosmicjsPosts
    const siteTitle = get(
      this.props,
      'data.cosmicjsSettings.metadata.site_title'
    )
    const author = get(this, 'props.data.cosmicjsSettings.metadata')
    const { previous, next } = this.props.pageContext

    return (
      <>
        <Helmet title={`${post.title} | ${siteTitle}`} />
        <div>
          <Link to="/">← Back to Posts</Link>
        </div>
        <h1>{post.title}</h1>
        <p>{post.created}</p>
        <BackgroundImage
          Tag="div"
          className="post-hero"
          fluid={post.metadata.hero.local.childImageSharp.fluid}
          backgroundColor={`#007ACC`}
        />
        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <hr />
        <Bio settings={author} />

        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            padding: 0,
          }}
        >
          {previous && (
            <li>
              <Link to={`posts/${previous.slug}`} rel="prev">
                ← {previous.title}
              </Link>
            </li>
          )}

          {next && (
            <li>
              <Link to={`posts/${next.slug}`} rel="next">
                {next.title} →
              </Link>
            </li>
          )}
        </ul>
      </>
    )
  }
}

BlogPostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object,
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    cosmicjsPosts(slug: { eq: $slug }) {
      id
      content
      title
      created(formatString: "MMMM DD, YYYY")
      metadata {
        hero {
          local {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
    cosmicjsSettings(slug: { eq: "general" }) {
      metadata {
        site_title
        author_name
        author_bio
        author_avatar {
          imgix_url
        }
      }
    }
  }
`
