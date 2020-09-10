import React, { useState } from 'react'
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
  AnchorContentDes,
  AnchorItemsDes,
  AnchorItemsText,
} from './style'
import Icon from '~/components/Icon'
import { WidthLimiterContainer } from '../Layout/styles'
import { Tablet, Desktop } from '../Utilities/Media'
import Text from '../Utilities/Text'

const AnchorList = ({ anchorQuery }) => {
  const [open, setOpen] = useState(false)
  const [ministerState, setMinisterState] = useState(0)
  const [stateQueury, setStateQuery] = useState('')

  const links = []

  anchorQuery?.links
    ? anchorQuery.links.map((info) => {
        Object.values(info).map((values) => {
          links.push(values)
        })
      })
    : ''

  const handelClickMobile = (e) => {
    setOpen(true)
    setMinisterState(links.indexOf(e.target.innerText))
  }

  const handelClick = (e) => {
    setStateQuery(e.target.innerText)
    setMinisterState(links.indexOf(e.target.innerText))
  }

  const anchorLinksMobile = links.map((link, index) => {
    return (
      <AnchorLinksMob key={index}>
        <AnchorIconLink>
          <Icon type="add" />
        </AnchorIconLink>
        <div className="anchor_links" onClick={handelClickMobile}>
          {link}
        </div>
      </AnchorLinksMob>
    )
  })

  const test = []

  anchorQuery.ministries.map((info) => {
    if (info.anchor_title === stateQueury) {
      test.push(info)
    }
  })

  const anchorLinks = links.map((link, index) => {
    return (
      <AnchorLinks key={index}>
        <AnchorIconLink>
          <Icon type="add-des" />
        </AnchorIconLink>
        <div
          className="anchor_links"
          style={
            ministerState === index ? { color: '#CC1D27' } : { color: 'black' }
          }
          onClick={handelClick}
        >
          {link}
        </div>
      </AnchorLinks>
    )
  })

  return (
    <AncherContainer>
      <WidthLimiterContainer>
        <AnchorContent>
          <Tablet>
            <AnchorTitle as="h2" type="heading2">
              <AnchorIconTitle>
                {anchorQuery.title}
                <Icon type="cross" />
              </AnchorIconTitle>
            </AnchorTitle>
            {anchorLinksMobile ? anchorLinksMobile : ''}
            <Modal
              open={open}
              setOpen={setOpen}
              query={{
                ministries: anchorQuery.ministries,
                currentLink: links[ministerState],
                nextLink: links[ministerState + 1],
              }}
            />
          </Tablet>
          <Desktop>
            <AnchorTitle as="h2" type="heading2">
              <AnchorIconTitle>
                {anchorQuery.title}
                <Icon type="cross-des" />
              </AnchorIconTitle>
            </AnchorTitle>
            <AnchorContainerDes>
              <div>{anchorLinks ? anchorLinks : ''}</div>
              <AnchorContentDes>
                {test.length > 0 ? (
                  test.map((info, index) => {
                    return (
                      <AnchorItemsDes key={index}>
                        <img src={info.anchor_image.url} alt="" />
                        <AnchorItemsText>
                          <Text type="body">{info.anchor_text}</Text>
                        </AnchorItemsText>
                      </AnchorItemsDes>
                    )
                  })
                ) : (
                  <AnchorItemsDes>
                    <img
                      src={anchorQuery.ministries[0].anchor_image.url}
                      alt=""
                    />
                    <AnchorItemsText>
                      <Text type="body">
                        {anchorQuery.ministries[0].anchor_text}
                      </Text>
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
