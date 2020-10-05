import React, { Fragment, useState, useEffect } from 'react'
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
  const [galleryState, setGalleryState] = useState([])

  useEffect(() => {
    setGalleryState(galleryImageArray)
  }, [])

  const galleryImageArray = []
  query?.content?.length > 0
    ? query.content.map((info) => {
        galleryImageArray.push(info)
      })
    : ''

  return (
    <div>
      <GalleryContainer id={query.uid}>
        <WidthLimiterContainer>
          <GalleryContentContainer>
            <Desktop>
              <GallerSliderHeader>
                {query?.title ? (
                  <Title as="h2" type="heading2">
                    {query.title}
                  </Title>
                ) : (
                  ''
                )}
                <Icon type="cross-des" />
              </GallerSliderHeader>
              {query?.content?.length > 0 ? (
                <GallerySliderContainer>
                  <GallerySliderContent
                    slidesToShow={3}
                    slidesToScroll={2}
                    infinite={true}
                  >
                    {query?.content
                      ? query.content.map((info, index) => {
                          const sliderImage = info?.gallery_img?.localFile
                            ?.childImageSharp?.fluid
                            ? info.gallery_img.localFile.childImageSharp.fluid
                            : ''
                          return (
                            <Fragment key={index}>
                              <GalleryItemContent>
                                <GallerySliderItemsContainer>
                                  {sliderImage ? (
                                    <Img fluid={sliderImage} />
                                  ) : (
                                    ''
                                  )}
                                  <GallerSliderTitle>
                                    {info?.gallery_section_title?.text ? (
                                      //CHANGE TITLE
                                      <Title as="h3" type="heading8">
                                        {info.gallery_section_title.text}
                                      </Title>
                                    ) : (
                                      ''
                                    )}
                                  </GallerSliderTitle>
                                  <GallerySliderText>
                                    {info?.gallery_section_text ? (
                                      <Text type="smallText700">
                                        {info.gallery_section_text}
                                      </Text>
                                    ) : (
                                      ''
                                    )}
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
              ) : (
                ''
              )}
            </Desktop>

            <Tablet>
              <GallerSliderHeader>
                {query?.title ? (
                  <Title as="h2" type="heading2">
                    {query.title}
                  </Title>
                ) : (
                  ''
                )}
                <Icon type="cross" />
              </GallerSliderHeader>
              <GallerySliderContainer>
                <GallerySliderContent
                  slidesToShow={1.4}
                  slidesToScroll={1}
                  galleryImageLength={galleryState.length}
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
                              {sliderImage ? (
                                <Img
                                  fluid={sliderImage}
                                  alt="photo gallery slider image"
                                />
                              ) : (
                                ''
                              )}

                              <GallerSliderTitle>
                                {info.gallery_section_title.text ? (
                                  <Title as="h3" type="heading8">
                                    {info.gallery_section_title.text}
                                  </Title>
                                ) : (
                                  ''
                                )}
                              </GallerSliderTitle>
                              <GallerySliderText>
                                {info?.gallery_section_text ? (
                                  <Text type="smallText700">
                                    {info.gallery_section_text}
                                  </Text>
                                ) : (
                                  ''
                                )}
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
    </div>
  )
}

Gallery.propTypes = {
  query: PropTypes.object,
}

export default Gallery
