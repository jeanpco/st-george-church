import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Modal from '../Modal'
import ContactDrawer from '../ContactDrawer'
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

import {
  MinistriesContactSection,
  MinisterContactContainer,
  MinistriesContactImg,
  MinistriesContactIcon,
  MinistriesContactInfo,
} from '../Modal/styles'
import Icon from '~/components/Icon'
import { WidthLimiterContainer } from '../Layout/styles'
import { Tablet, Desktop } from '../Utilities/Media'
import Text from '../Utilities/Text'
import Title from '../Utilities/Title'

import Img from 'gatsby-image'
import Fade from 'react-reveal/Fade'
import AnimatedImage from '../AnimatedImage'

const AnchorList = ({
  anchorQuery: { title, ministries, ministriesData, uid, contactData },
}) => {
  const [open, setOpen] = useState(false)
  const [ministerState, setMinisterState] = useState(0)
  const [stateQuery, setStateQuery] = useState('')
  const [statelinks, setStateLinks] = useState([])
  const [anchorInfo, setanchorInfo] = useState([])
  const [toggleDrawer, setToggleDrawer] = useState(false)
  const [contactPerson, setContactPerson] = useState('')

  const contactFormData = contactData.contact_form.document.data

  const contactBody = contactData?.body[0]?.items
    ? contactData.body[0].items
    : ''

  const contactFlyoutTitle = contactData?.contact_flyout_title?.text
    ? contactData.contact_flyout_title.text
    : ''

  const contactFlyoutAddress = contactData?.contact_flyout_address
    ? contactData.contact_flyout_address
    : ''

  const contactFlyoutNumber = contactData?.contact_flyout_number
    ? contactData.contact_flyout_number
    : ''

  const contactFormTitle = contactData?.contact_form_title
    ? contactData.contact_form_title
    : ''

  const contactFormInformation = contactData?.contact_form?.document?.data
    ? contactData.contact_form.document.data
    : ''

  console.log(contactFormData)
  useEffect(() => {
    setStateLinks(linksArray)
  }, [])

  useEffect(() => {
    setanchorInfo([ministries[0]])
  }, [])

  const linksArray = []

  ministries
    ? ministries.map((info) => {
        linksArray.push(info.list_title.text)
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
    ministries?.length > 0
      ? ministries.map((info) => {
          if (e.target.innerText === info.list_title.text) {
            setanchorInfo([info])
          }
        })
      : ''
  }

  const onClickHandler = (e) => {
    setToggleDrawer(!toggleDrawer)

    setContactPerson(e.currentTarget.childNodes[1].childNodes[1].innerText)
  }

  const anchorTitle = title ? title : ''

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
                targetLink: statelinks[ministerState],
                links: statelinks,
                linkIndex: ministerState,
                nextLinkText: anchorNextLink,
                prevLinkText: anchorPrevLink,
                contactBody: contactBody,
                contactFlyoutTitle: contactFlyoutTitle,
                contactFlyoutAddress: contactFlyoutAddress,
                contactFlyoutNumber: contactFlyoutNumber,
                contactFormTitle: contactFormTitle,
                contactFormInformation: contactFormInformation,
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
                    {anchorInfo?.length > 0
                      ? anchorInfo.map((info, index) => {
                          const AnchorImage = info?.list_image?.localFile
                            ?.childImageSharp?.fluid
                            ? info.list_image.localFile.childImageSharp.fluid
                            : ''
                          return (
                            <>
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
                                <MinistriesContactSection>
                                  <Title as="h5" type="contactHeading">
                                    Contact
                                  </Title>
                                  {info.ministries_group_contact.document.data.body.map(
                                    (values) => {
                                      return values.items.map(
                                        (contact, index) => {
                                          return (
                                            <MinisterContactContainer
                                              key={index}
                                              onClick={onClickHandler}
                                            >
                                              <MinistriesContactImg
                                                style={{ width: '117px' }}
                                              >
                                                <MinistriesContactIcon>
                                                  <Icon type="border-mob" />
                                                </MinistriesContactIcon>
                                                <Img
                                                  fluid={
                                                    contact.single_contact_link
                                                      .document.data.contact_img
                                                      .localFile.childImageSharp
                                                      .fluid
                                                  }
                                                  alt="Minister Section Contact Image"
                                                  className="Ministries__Contact-Img"
                                                />
                                              </MinistriesContactImg>
                                              <MinistriesContactInfo>
                                                <Text type="bigText400">
                                                  {
                                                    contact.single_contact_link
                                                      .document.data
                                                      .contact_position
                                                  }
                                                </Text>
                                                <Title as="h4" type="heading4">
                                                  {
                                                    contact.single_contact_link
                                                      .document.data
                                                      .contact_name.text
                                                  }
                                                </Title>
                                              </MinistriesContactInfo>
                                            </MinisterContactContainer>
                                          )
                                        }
                                      )
                                    }
                                  )}
                                </MinistriesContactSection>
                              </AnchorItemsDes>
                            </>
                          )
                        })
                      : ''}
                  </>
                </Fade>
              </AnchorContentDes>
            </AnchorContainerDes>
            <ContactDrawer
              toggleDrawer={toggleDrawer}
              setToggleDrawer={setToggleDrawer}
              query={{
                contactCurrent: contactPerson,
                title: contactFlyoutTitle,
                address: contactFlyoutAddress,
                number: contactFlyoutNumber,
                formTitle: contactFormTitle,
                contactFormInformation: contactFormInformation,
                formInformation: contactBody,
                contactFlyoutTitle: contactFlyoutTitle,
              }}
            />
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
