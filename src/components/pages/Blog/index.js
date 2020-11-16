import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Title from '../../Utilities/Title'
import Text from '../../Utilities/Text'
import { truncateBody, truncateHeader } from '../../../utils/functions/truncate'
import InfiniteScroll from 'react-infinite-scroll-component'

import { WidthLimiterContainer } from '../../Layout/styles'
import Img from 'gatsby-image'
import Icon from '~/components/Icon'
import { Link } from 'gatsby'

import {
  BlogPageHeader,
  BlogContainer,
  BlogPostContainer,
  BlogPostTitle,
  BlogPostText,
  BlogPostIcon,
} from './styles'

const BlogLayout = ({ data }) => {
  const ghostData = data?.allGhostPost?.nodes

  const galleryData = data?.prismicPhotoGallery?.data

  const [hasMore, setMore] = useState(true)
  const [currentList, setCurrentList] = useState([...ghostData.slice(0, 6)])

  const fetchMoreData = () => {
    const currentLength = currentList.length
    const more = currentLength < ghostData.length
    const nextEdges = more
      ? ghostData.slice(currentLength, currentLength + 3)
      : []

    if (currentLength >= ghostData.length) {
      setMore(false)
    }

    setTimeout(() => {
      setCurrentList([...currentList, ...nextEdges])
    }, 500)
  }

  return (
    <WidthLimiterContainer>
      <BlogPageHeader>
        {galleryData?.blog_page_title?.text ? (
          <Title as="h2" type="heading2">
            {galleryData.blog_page_title.text}
          </Title>
        ) : (
          ''
        )}
      </BlogPageHeader>
      <InfiniteScroll
        dataLength={currentList.length}
        next={fetchMoreData}
        hasMore={hasMore}
      >
        <BlogContainer>
          {currentList?.length > 0
            ? currentList.map((info, index) => {
                return (
                  <div key={index}>
                    <BlogPostContainer>
                      {info?.slug ? (
                        <>
                          <Link to={info.slug} className="Blog__Slider_Link">
                            {info?.localFeatureImage?.childImageSharp?.fluid ? (
                              <Img
                                fluid={
                                  info.localFeatureImage.childImageSharp.fluid
                                }
                                alt="Gallery Slider Image"
                              />
                            ) : (
                              ''
                            )}
                            {info?.title ? (
                              <BlogPostTitle>
                                <Title
                                  as="h3"
                                  type="heading8"
                                  className="BlogPost__Title"
                                >
                                  {truncateHeader(info.title)}
                                </Title>
                              </BlogPostTitle>
                            ) : (
                              ''
                            )}
                            {info?.excerpt ? (
                              <BlogPostText>
                                <Text type="smallText700">
                                  {truncateBody(info.excerpt)}
                                </Text>
                              </BlogPostText>
                            ) : (
                              ''
                            )}
                          </Link>
                        </>
                      ) : (
                        ''
                      )}
                    </BlogPostContainer>
                    <BlogPostIcon className="Blog__Flower-Icon">
                      <Icon type="flower" />
                    </BlogPostIcon>
                  </div>
                )
              })
            : ''}
        </BlogContainer>
      </InfiniteScroll>
    </WidthLimiterContainer>
  )
}
BlogLayout.propTypes = {
  data: PropTypes.object,
}

export default BlogLayout
