import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { WidthLimiterContainer } from '../Layout/styles'
import Title from '../Utilities/Title'
import Text from '../Utilities/Text'
import Icon from '~/components/Icon'
import GallerySliderContent from '../GallerySlider'
import { Tablet, Desktop } from '../Utilities/Media'

import {
  GalleryContainer,
  GalleryContentContainer,
  GallerSliderHeader,
  GallerySliderContainer,
  GallerySliderItemsContainer,
  GallerSliderTitle,
  GallerySliderText,
  GallerySliderIcon,
  GalleryItemContent,
} from './styles'

const Gallery = ({ query }) => {
  const galleryImageArray = []
  query?.content?.length > 0
    ? query.content.map((info) => {
        galleryImageArray.push(info)
      })
    : ''

  const galleryImageLength = galleryImageArray.length

  return (
    <GalleryContainer>
      <WidthLimiterContainer>
        <GalleryContentContainer>
          <Desktop>
            <GallerSliderHeader>
              <Title type="heading2">{query?.title ? query.title : ''}</Title>
              <Icon type="cross-des" />
            </GallerSliderHeader>
            <GallerySliderContainer>
              <GallerySliderContent
                slidesToShow={3}
                slidesToScroll={2}
                infinite={true}
              >
                {query.content?.length > 0
                  ? query.content.map((info, index) => {
                      const sliderImage = info?.gallery_img?.localFile
                        ?.childImageSharp?.fluid
                        ? info.gallery_img.localFile.childImageSharp.fluid
                        : ''
                      return (
                        <Fragment key={index}>
                          <GalleryItemContent>
                            <GallerySliderItemsContainer>
                              <Img fluid={sliderImage} />
                              <GallerSliderTitle>
                                <Title as="h3" type="heading3">
                                  {info.gallery_section_title.text
                                    ? info.gallery_section_title.text
                                    : ''}
                                </Title>
                              </GallerSliderTitle>
                              <GallerySliderText>
                                <Text type="smallText700">
                                  {info?.gallery_section_text
                                    ? info.gallery_section_text
                                    : ''}
                                </Text>
                              </GallerySliderText>
                            </GallerySliderItemsContainer>
                            <GallerySliderIcon>
                              <Icon type="flower" />
                            </GallerySliderIcon>
                          </GalleryItemContent>
                        </Fragment>
                      )
                    })
                  : ''}
              </GallerySliderContent>
            </GallerySliderContainer>
          </Desktop>

          <Tablet>
            <GallerSliderHeader>
              <Title type="heading2">{query?.title ? query.title : ''}</Title>
              <Icon type="cross" />
            </GallerSliderHeader>
            <GallerySliderContainer>
              <GallerySliderContent
                slidesToShow={1.4}
                slidesToScroll={1}
                galleryImageLength={galleryImageLength}
                infinite={false}
              >
                {query.content?.length > 0
                  ? query.content.map((info, index) => {
                      const sliderImage = info?.gallery_img?.localFile
                        ?.childImageSharp?.fluid
                        ? info.gallery_img.localFile.childImageSharp.fluid
                        : ''
                      return (
                        <Fragment key={index}>
                          <GallerySliderItemsContainer>
                            <Img
                              fluid={sliderImage}
                              alt="photo gallery slider image"
                            />
                            <GallerSliderTitle>
                              <Title as="h3" type="heading3">
                                {info.gallery_section_title.text
                                  ? info.gallery_section_title.text
                                  : ''}
                              </Title>
                            </GallerSliderTitle>
                            <GallerySliderText>
                              <Text type="smallText700">
                                {info.gallery_section_text}
                              </Text>
                            </GallerySliderText>
                          </GallerySliderItemsContainer>
                          <GallerySliderIcon>
                            <Icon type="flower" />
                          </GallerySliderIcon>
                        </Fragment>
                      )
                    })
                  : ''}
              </GallerySliderContent>
            </GallerySliderContainer>
          </Tablet>
        </GalleryContentContainer>
      </WidthLimiterContainer>
    </GalleryContainer>
  )
}

Gallery.propTypes = {
  query: PropTypes.object,
}

export default Gallery
