import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Modal from '../Modal'
import {
  AncherContainer,
  AnchorContent,
  AnchorTitle,
  AnchorLinksMob,
  AnchorLinks,
  AnchorIconLink,
  AnchorIconTitle,
  AnchorContainerDes,
  AnchorLinksContainerDes,
  AnchorContentDes,
  AnchorItemsDes,
  AnchorItemsText,
} from './style'
import Icon from '~/components/Icon'
import { WidthLimiterContainer } from '../Layout/styles'
import { Tablet, Desktop } from '../Utilities/Media'
import Text from '../Utilities/Text'
import Img from 'gatsby-image'
import Fade from 'react-reveal/Fade'
import AnimatedImage from '../AnimatedImage'

const AnchorList = ({
  anchorQuery: { ministriesLinks, title, ministries, ministriesData, uid },
}) => {
  const [open, setOpen] = useState(false)
  const [ministerState, setMinisterState] = useState(0)
  const [stateQuery, setStateQuery] = useState('')
  const [statelinks, setStateLinks] = useState([])

  useEffect(() => {
    setStateLinks(linksArray)
  }, [])

  const linksArray = []

  ministriesLinks
    ? ministriesLinks.map((info) => {
        Object.values(info).map((values) => {
          linksArray.push(values)
        })
      })
    : ''

  const anchorArray = []

  ministries?.length > 0
    ? ministries.map((info) => {
        if (info.list_title.text === stateQuery) {
          anchorArray.push(info)
        }
      })
    : ''

  const handelClickMobile = (e) => {
    setOpen(true)
    setMinisterState(statelinks.indexOf(e.target.innerText))
    setStateQuery(e.target.innerText)
  }

  const handelClick = (e) => {
    setStateQuery(e.target.innerText)
    setMinisterState(statelinks.indexOf(e.target.innerText))
  }

  const anchorTitle = title ? title : ''

  const anchorFirstImage = ministries[0]?.list_image?.localFile?.childImageSharp
    ?.fluid
    ? ministries[0].list_image.localFile.childImageSharp.fluid
    : ''

  const anchorFirstText = ministries[0]?.list_text
    ? ministries[0].list_text
    : ''

  const anchorNextLink = ministriesData?.next_link_text
    ? ministriesData.next_link_text
    : ''

  const anchorPrevLink = ministriesData?.prev_link_text
    ? ministriesData.prev_link_text
    : ''

  const anchorLinksMobile =
    statelinks?.length > 0
      ? statelinks.map((link, index) => {
          return (
            <AnchorLinksMob key={index}>
              <Fade bottom distance="30px">
                <AnchorIconLink>
                  <Icon type="add" />
                </AnchorIconLink>
                {link ? (
                  <div className="anchor_links" onClick={handelClickMobile}>
                    {link}
                  </div>
                ) : (
                  ''
                )}
              </Fade>
            </AnchorLinksMob>
          )
        })
      : ''

  const anchorLinks =
    statelinks?.length > 0
      ? statelinks.map((link, index) => {
          return (
            <AnchorLinks key={` AnchorLinks -${index}`}>
              <Fade bottom distance="30px">
                <AnchorIconLink>
                  <Icon type="add-des" />
                </AnchorIconLink>
                {link ? (
                  <div
                    className="anchor_links"
                    style={
                      ministerState === index
                        ? { color: '#CC1D27' }
                        : { color: 'black' }
                    }
                    onClick={handelClick}
                  >
                    {link}
                  </div>
                ) : (
                  ''
                )}
              </Fade>
            </AnchorLinks>
          )
        })
      : ''

  return (
    <AncherContainer id={uid}>
      <WidthLimiterContainer>
        <AnchorContent>
          <Tablet>
            <Fade bottom distance="30px">
              <AnchorTitle as="h2" type="heading2">
                <AnchorIconTitle>
                  {anchorTitle}
                  <Icon type="cross" />
                </AnchorIconTitle>
              </AnchorTitle>
            </Fade>
            {anchorLinksMobile}
            <Modal
              open={open}
              setOpen={setOpen}
              clickFunction={handelClick}
              query={{
                ministries: ministries,
                currentLink: statelinks[ministerState],
                links: statelinks,
                linkIndex: ministerState,
                nextLinkText: anchorNextLink,
                prevLinkText: anchorPrevLink,
              }}
            />
          </Tablet>
          <Desktop>
            <Fade bottom distance="30px">
              <AnchorTitle as="h2" type="heading2">
                {anchorTitle ? (
                  <AnchorIconTitle>
                    {anchorTitle}
                    <Icon type="cross-des" />
                  </AnchorIconTitle>
                ) : (
                  ''
                )}
              </AnchorTitle>
            </Fade>
            <AnchorContainerDes>
              {anchorLinks ? (
                <AnchorLinksContainerDes>{anchorLinks}</AnchorLinksContainerDes>
              ) : (
                ''
              )}
              <AnchorContentDes>
                <Fade bottom distance="30px">
                  <>
                    {anchorArray?.length > 0 ? (
                      anchorArray.map((info, index) => {
                        const AnchorImage = info?.list_image?.localFile
                          ?.childImageSharp?.fluid
                          ? info.list_image.localFile.childImageSharp.fluid
                          : ''
                        return (
                          <AnchorItemsDes key={index}>
                            {AnchorImage ? (
                              <AnimatedImage>
                                <Img
                                  fluid={AnchorImage}
                                  alt="ministries image"
                                />
                              </AnimatedImage>
                            ) : (
                              ''
                            )}
                            <AnchorItemsText>
                              {info?.list_text ? (
                                <Text type="body">{info.list_text}</Text>
                              ) : (
                                ''
                              )}
                            </AnchorItemsText>
                          </AnchorItemsDes>
                        )
                      })
                    ) : (
                      <AnchorItemsDes>
                        {anchorFirstImage ? (
                          <AnimatedImage>
                            <Img
                              fluid={anchorFirstImage}
                              alt="ministries image"
                            />
                          </AnimatedImage>
                        ) : (
                          ''
                        )}
                        <AnchorItemsText>
                          {anchorFirstText ? (
                            <Text type="body">{anchorFirstText}</Text>
                          ) : (
                            ''
                          )}
                        </AnchorItemsText>
                      </AnchorItemsDes>
                    )}
                  </>
                </Fade>
              </AnchorContentDes>
            </AnchorContainerDes>
          </Desktop>
        </AnchorContent>
      </WidthLimiterContainer>
    </AncherContainer>
  )
}

AnchorList.propTypes = {
  anchorQuery: PropTypes.object,
}
export default AnchorList
