import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Modal from '../Modal'
import {
  AncherContainer,
  AnchorContent,
  AnchorTitle,
  AnchorLinks,
  AnchorIconLink,
  AnchorIconTitle,
} from './style'
import Icon from '~/components/Icon'
import { WidthLimiterContainer } from '../Layout/styles'
import { Tablet, Desktop } from '../Utilities/Media'

const AnchorList = ({ anchorQuery }) => {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const links = []

  anchorQuery.links.map((info) => {
    Object.values(info).map((values) => {
      links.push(values)
    })
  })

  console.log(anchorQuery.ministries)

  const ministries = []

  anchorQuery.ministries.map((info) => {
    if (info.anchor_title === links[index]) {
      ministries.push(info)
    }
  })

  const handelClick = (e) => {
    setOpen(true)
    setIndex(links.indexOf(e.target.innerText))
  }

  const anchorLinks = links.map((link, index) => {
    return (
      <AnchorLinks key={index}>
        <AnchorIconLink>
          <Icon type="add" />
        </AnchorIconLink>
        <div className="anchor_links" onClick={handelClick}>
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
            {anchorLinks}
            <Modal
              open={open}
              setOpen={setOpen}
              query={{
                ministries: anchorQuery.ministries,
                currentLink: links[index],
                nextLink: links[index + 1],
              }}
            />
          </Tablet>
          <Desktop>
            <h1>Desktop</h1>
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
