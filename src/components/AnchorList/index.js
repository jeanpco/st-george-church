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

const AnchorList = ({ anchorQuery }) => {
  const [open, setOpen] = useState(false)
  const [ministerState, setMinisterState] = useState(0)
  const [stateQuery, setStateQuery] = useState('')
  const [links, setLinks] = useState([])

  useEffect(() => {
    setLinks(linksArray)
  }, [])

  const linksArray = []

  anchorQuery?.links
    ? anchorQuery.links.map((info) => {
        Object.values(info).map((values) => {
          linksArray.push(values)
        })
      })
    : ''

  const anchorArray = []

  anchorQuery?.ministries?.length > 0
    ? anchorQuery.ministries.map((info) => {
        if (info.list_title.text === stateQuery) {
          anchorArray.push(info)
        }
      })
    : ''

  const handelClickMobile = (e) => {
    setOpen(true)
    setMinisterState(links.indexOf(e.target.innerText))
    setStateQuery(e.target.innerText)
  }

  const handelClick = (e) => {
    setStateQuery(e.target.innerText)
    setMinisterState(links.indexOf(e.target.innerText))
  }

  const anchorTitle = anchorQuery?.title ? anchorQuery.title : ''

  const anchorFirstImage = anchorQuery?.ministries[0]?.list_image?.localFile
    ?.childImageSharp?.fluid
    ? anchorQuery.ministries[0].list_image.localFile.childImageSharp.fluid
    : ''

  const anchorFirstText = anchorQuery?.ministries[0]?.list_text
    ? anchorQuery.ministries[0].list_text
    : ''

  const anchorNextLink = anchorQuery?.ministriesData?.next_link_text
    ? anchorQuery.ministriesData.next_link_text
    : ''

  const anchorPrevLink = anchorQuery?.ministriesData?.prev_link_text
    ? anchorQuery.ministriesData.prev_link_text
    : ''

  const anchorLinksMobile =
    links?.length > 0
      ? links.map((link, index) => {
          return (
            <AnchorLinksMob key={index}>
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
            </AnchorLinksMob>
          )
        })
      : ''

  const anchorLinks =
    links?.length > 0
      ? links.map((link, index) => {
          return (
            <AnchorLinks key={` AnchorLinks -${index}`}>
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
            </AnchorLinks>
          )
        })
      : ''

  return (
    <AncherContainer>
      <WidthLimiterContainer>
        <AnchorContent>
          <Tablet>
            <AnchorTitle as="h2" type="heading2">
              <AnchorIconTitle>
                {anchorTitle}
                <Icon type="cross" />
              </AnchorIconTitle>
            </AnchorTitle>
            {anchorLinksMobile}
            <Modal
              open={open}
              setOpen={setOpen}
              clickFunction={handelClick}
              query={{
                ministries: anchorQuery.ministries,
                currentLink: links[ministerState],
                links: links,
                linkIndex: ministerState,
                nextLinkText: anchorNextLink,
                prevLinkText: anchorPrevLink,
              }}
            />
          </Tablet>
          <Desktop>
            <AnchorTitle as="h2" type="heading2">
              <AnchorIconTitle>
                {anchorTitle}
                <Icon type="cross-des" />
              </AnchorIconTitle>
            </AnchorTitle>
            <AnchorContainerDes>
              {anchorLinks ? (
                <AnchorLinksContainerDes>{anchorLinks}</AnchorLinksContainerDes>
              ) : (
                ''
              )}
              <AnchorContentDes>
                {anchorArray?.length > 0 ? (
                  anchorArray.map((info, index) => {
                    const AnchorImage = info?.list_image?.localFile
                      ?.childImageSharp?.fluid
                      ? info.list_image.localFile.childImageSharp.fluid
                      : ''
                    return (
                      <AnchorItemsDes key={index}>
                        {AnchorImage ? (
                          <Img fluid={AnchorImage} alt="ministries image" />
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
                      <Img fluid={anchorFirstImage} alt="ministries image" />
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
