import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { truncateBody } from '../../utils/functions/truncate'
import LocaleContext from '../../context/LocaleProvider'

import Img from 'gatsby-image'

import { WidthLimiterContainer } from '../Layout/styles'
import Title from '../Utilities/Title'
import Text from '../Utilities/Text'
import Icon from '~/components/Icon'
import GallerySliderContent from '../GallerySlider'
import { Link } from 'gatsby'
import { useTheme } from '@material-ui/core/styles'
import { useMediaQuery } from '@material-ui/core'
import { Tablet, Desktop } from '../Utilities/Media'

import {
  GalleryContainer,
  GalleryContentContainer,
  GallerSliderHeader,
  GallerySliderContainer,
  GallerySliderItemsContainer,
  GallerySliderTitle,
  GallerySliderText,
  GallerySliderIcon,
  GalleryImgText,
  GalleryUpperImg,
} from './styles'

const Gallery = ({ query: { title, uid, ghostData, blogPageLink } }) => {
  const theme = useTheme()

  const isMobile = useMediaQuery(theme.breakpoints.down('960'))
  const isTablet = useMediaQuery(theme.breakpoints.down('1120'))
  const isDesktop = useMediaQuery(theme.breakpoints.up('960'))
  const lang = React.useContext(LocaleContext)
  const i18n = lang.i18n[lang.locale]

  let slideToShow = 1

  let infinite = false

  if (isDesktop) {
    slideToShow = ghostData.length < 3 ? ghostData.length : 2
    infinite = false
  }

  if (isTablet) {
    slideToShow = 2
    infinite = false
  }

  if (isMobile) {
    slideToShow = 1.4
    infinite = false
  }

  return (
    <GalleryContainer id={uid}>
      <WidthLimiterContainer>
        <GalleryContentContainer>
          <GallerSliderHeader>
            {title ? (
              <Title as="h2" type="heading2">
                {title}
              </Title>
            ) : (
              ''
            )}
            <Tablet>
              <Icon type="cross" />
            </Tablet>
            <Desktop>
              <Icon type="cross-des" />
            </Desktop>
          </GallerSliderHeader>
          {ghostData?.length > 0 ? (
            <GallerySliderContainer>
              <GallerySliderContent
                slidesToShow={slideToShow}
                slidesToScroll={1}
                infinite={infinite}
                galleryImageLength={ghostData.length}
              >
                {ghostData
                  ? ghostData.filter((post) => {
                      const galleryFilterTag =
                        post.tags.length > 0
                          ? post.tags.map((value) => {
                              return value.slug
                            })
                          : ''
                        
                      return !galleryFilterTag.includes('orthoflash')
                    }).map((post, index) => {
                      return (
                        <Fragment key={`Gallery__Slider - ${index}`}>
                          <GalleryImgText>
                            {post?.tags?.length > 0
                              ? post.tags.map((tag, index) => {
                                  if (tag.slug === 'gallery') {
                                    return (
                                      <Fragment
                                        key={`Gallery-Upper-Text - ${index}`}
                                      >
                                        <GalleryUpperImg className="gallery-upper-text">
                                          <Icon type="image-icon" />
                                        </GalleryUpperImg>
                                      </Fragment>
                                    )
                                  }
                                })
                              : ''}
                          </GalleryImgText>
                          <GallerySliderItemsContainer>
                            {post?.slug ? (
                              <>
                                <Link
                                  to={
                                    i18n.locale === 'en-ca'
                                      ? `/blog/${post.slug}`
                                      : `/fr/blog/${post.slug}`
                                  }
                                  className="Gallery__Slider_Link"
                                >
                                  {post?.localFeatureImage?.childImageSharp
                                    ?.fluid ? (
                                    <Img
                                      fluid={
                                        post.localFeatureImage.childImageSharp
                                          .fluid
                                      }
                                      alt="Gallery Slider Image"
                                    />
                                  ) : (
                                    ''
                                  )}
                                  {post?.title ? (
                                    <GallerySliderTitle>
                                      <Title as="h3" type="heading8">
                                        {post.title}
                                      </Title>
                                    </GallerySliderTitle>
                                  ) : (
                                    ''
                                  )}
                                  {post?.excerpt ? (
                                    <GallerySliderText>
                                      <Text type="smallText700">
                                        {truncateBody(post.excerpt)}
                                      </Text>
                                    </GallerySliderText>
                                  ) : (
                                    ''
                                  )}
                                </Link>
                              </>
                            ) : (
                              ''
                            )}
                          </GallerySliderItemsContainer>
                          <GallerySliderIcon className="Gallery__Flower-Icon">
                            <Icon type="flower" />
                          </GallerySliderIcon>
                        </Fragment>
                      )
                    })
                  : ''}
              </GallerySliderContent>
              {blogPageLink ? (
                <Link to="/blog" className="allArticles__Gallery-Link">
                  {blogPageLink}
                </Link>
              ) : (
                ''
              )}
            </GallerySliderContainer>
          ) : (
            ''
          )}
        </GalleryContentContainer>
      </WidthLimiterContainer>
    </GalleryContainer>
  )
}

Gallery.propTypes = {
  query: PropTypes.object,
  uid: PropTypes.string,
  ghostData: PropTypes.object,
}

export default Gallery