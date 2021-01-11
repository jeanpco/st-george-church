import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { WidthLimiterContainer } from '../components/Layout/styles'
import Title from '../components/Utilities/Title'
import Text from '../components/Utilities/Text'

import {
  PostContainer,
  PostItemsContainer,
  PostContentContainer,
} from '../components/templates/Blog/postStyles'

/**
 * Single post view (/:slug)
 *
 * This file renders a single post and loads all the content.
 *
 */
// location={location}
const Post = ({ data, location }) => {
  const post = data.ghostPost

  return (
    <PostContainer location={location}>
      <WidthLimiterContainer>
        <PostContentContainer className="container">
          <PostItemsContainer className="content">
            <Title as="h2" type="heading2">
              {post.title}
            </Title>

            {/* The main post content */}
            <Text
              className="content-body load-external-scripts"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </PostItemsContainer>
        </PostContentContainer>
      </WidthLimiterContainer>
    </PostContainer>
  )
}

Post.propTypes = {
  data: PropTypes.shape({
    ghostPost: PropTypes.shape({
      codeinjection_styles: PropTypes.object,
      title: PropTypes.string.isRequired,
      html: PropTypes.string.isRequired,
      feature_image: PropTypes.string,
    }).isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
}

export default Post

export const postQuery = graphql`
  query($slug: String!) {
    ghostPost(slug: { eq: $slug }) {
      ...GhostPostFields
    }
  }
`
