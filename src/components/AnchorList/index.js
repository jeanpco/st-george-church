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
    setStateQuery(e.target.innerText)
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

  const anchorArray = []

  anchorQuery.ministries.map((info) => {
    if (info.anchor_title === stateQueury) {
      anchorArray.push(info)
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
              clickFunction={handelClick}
              query={{
                ministries: anchorQuery.ministries,
                currentLink: links[ministerState],
                links: links,
                linkIndex: ministerState,
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
                {anchorArray.length > 0 ? (
                  anchorArray.map((info, index) => {
                    return (
                      <AnchorItemsDes key={index}>
                        <img src={info.anchor_image.url} alt="" />
                        <AnchorItemsText>
                          <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Praesentium quam tempora, placeat aspernatur
                            quos magnam aliquam esse doloribus maiores eum iure
                            id eligendi, impedit reiciendis consectetur possimus
                            suscipit fugiat mollitia vitae repellat rem
                            blanditiis quasi dicta voluptates. Laboriosam nemo
                            architecto, labore doloremque vitae totam laudantium
                            temporibus. Perspiciatis quas a officiis beatae nemo
                            molestias consequuntur reprehenderit saepe quis et
                            neque maiores culpa, error odit consequatur unde
                            voluptate praesentium nobis fugit excepturi incidunt
                            corrupti! Officiis animi vitae, quia consectetur
                            neque itaque modi architecto? Omnis assumenda rem
                            voluptatibus amet cum itaque excepturi ducimus ipsam
                            magni nam? Aut minus a reprehenderit. Molestias,
                            quis ipsa!s
                          </p>
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
