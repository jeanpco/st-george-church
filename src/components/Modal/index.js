import React, { useState, useEffect, useRef, Fragment } from 'react'

import { Dialog } from '@material-ui/core'
import Icon from '~/components/Icon'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import ContactDrawer from '../ContactDrawer'

import {
  useStylesMainModal,
  DialogContentContainer,
  ModalCloseIncon,
  ModalContent,
  ModalTitleContainer,
  ModalTitleContent,
  ModalTextContent,
  ModalLinksFooter,
  ModalTitleFooter,
  ModalDialogContainer,
  MinisterContactContainer,
  MinistriesContactImg,
  MinistriesContactIcon,
  MinistriesContactSection,
  MinistriesContactInfo,
  MinistriesPostionTitle,
  MinistriesFullName,
  MinistriesContactTitle,
} from './styles'
import Title from '../Utilities/Title'
import Text from '../Utilities/Text'
import Fade from 'react-reveal/Fade'
import AnimatedImage from '../AnimatedImage'

const Modal = ({
  open,
  setOpen,
  query: {
    ministries,
    links,
    linkIndex,
    nextLinkText,
    prevLinkText,
    contactBody,
    contactFlyoutTitle,
    contactFlyoutAddress,
    contactFlyoutNumber,
    contactFormTitle,
    contactFormInformation,
  },
}) => {
  const isFirstRun = useRef(true)
  const classes = useStylesMainModal()
  const [linkState, setLinkState] = useState(linkIndex)

  const linksArray = links
  const currentLink = linksArray[linkState]
  const nextLink = linksArray[linkState + 1]

  const ministriesArray = ministries
  const ministriesContent = []

  const [toggleDrawer, setToggleDrawer] = useState(false)
  const [contactPerson, setContactPerson] = useState('')

  ministriesArray?.length > 0
    ? ministriesArray.map((info) => {
        if (currentLink === info.list_title.text) {
          ministriesContent.push(info)
        }
      })
    : ''

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false
      return
    }
    setLinkState(linkIndex)
  }, [linkIndex])

  const handleClickNext = () => {
    let i = linkState
    if (i >= 0 && i < linksArray.length - 1) {
      setLinkState(linkState + 1)
    } else if (i === linksArray.length - 1) {
      setLinkState(0)
    }
  }

  const handleClickPrev = () => {
    let i = linkState
    if (i > 0) {
      setLinkState(linkState - 1)
    } else if (i === 0) {
      setLinkState(linksArray.length - 1)
    }
  }

  const onClickHandler = (e) => {
    setToggleDrawer(!toggleDrawer)

    setContactPerson(e.currentTarget.childNodes[1].childNodes[1].innerText)
  }

  return (
    <Dialog fullScreen onClose={() => setOpen(false)} open={open}>
      <div className={classes.root}>
        <ModalTitleContainer>
          <Fade bottom distance="30px">
            <ModalTitleContent>
              {currentLink ? (
                <Title as="h2" type="heading3">
                  {currentLink}
                </Title>
              ) : (
                ''
              )}
            </ModalTitleContent>
            <ModalCloseIncon onClick={() => setOpen(false)}>
              <Icon type="clear" />
            </ModalCloseIncon>
          </Fade>
        </ModalTitleContainer>
        <ModalDialogContainer>
          <ModalContent>
            {ministriesContent?.length > 0
              ? ministriesContent.map((info, index) => {
                  return (
                    <Fragment key={index}>
                      <Fade bottom distance="30px">
                        <DialogContentContainer>
                          <div>
                            {info?.list_image?.localFile?.childImageSharp
                              ?.fluid ? (
                              <AnimatedImage>
                                <Img
                                  fluid={
                                    info.list_image.localFile.childImageSharp
                                      .fluid
                                  }
                                  alt="Ministries Image"
                                  className="Modal_Anchor-Img"
                                />
                              </AnimatedImage>
                            ) : (
                              ''
                            )}
                          </div>
                          <Fade bottom distance="30px">
                            <ModalTextContent>
                              {info?.list_text?.html ? (
                                <Text
                                  type="body"
                                  dangerouslySetInnerHTML={{
                                    __html: info.list_text.html,
                                  }}
                                />
                              ) : (
                                ''
                              )}
                            </ModalTextContent>
                          </Fade>
                        </DialogContentContainer>
                        <MinistriesContactSection>
                          <MinistriesContactTitle as="h5">
                            {contactFlyoutTitle}
                          </MinistriesContactTitle>
                          {info.ministries_group_contact.document.data.body.map(
                            (info) => {
                              return info.items.map((contact, index) => {
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
                                          contact.single_contact_link.document
                                            .data.contact_img.localFile
                                            .childImageSharp.fluid
                                        }
                                        alt="Minister Section Contact Image"
                                        className="Ministries__Contact-Img"
                                      />
                                    </MinistriesContactImg>
                                    <MinistriesContactInfo>
                                      <MinistriesPostionTitle as="h5">
                                        {
                                          contact.single_contact_link.document
                                            .data.contact_position
                                        }
                                      </MinistriesPostionTitle>
                                      <MinistriesFullName as="h4">
                                        {
                                          contact.single_contact_link.document
                                            .data.contact_name.text
                                        }
                                      </MinistriesFullName>
                                    </MinistriesContactInfo>
                                  </MinisterContactContainer>
                                )
                              })
                            }
                          )}
                        </MinistriesContactSection>
                      </Fade>
                    </Fragment>
                  )
                })
              : ''}
          </ModalContent>
        </ModalDialogContainer>
        <ModalLinksFooter>
          {links[0] && currentLink ? (
            <div className="Modal__Footer-Links" onClick={handleClickPrev}>
              {prevLinkText}
            </div>
          ) : (
            ''
          )}

          <ModalTitleFooter>
            {nextLink || linksArray[0] ? (
              <Title as="h4" type="heading5">
                {nextLink ? nextLink : linksArray[0]}
              </Title>
            ) : (
              ''
            )}
          </ModalTitleFooter>
          <div className="Modal__Footer-Links" to="/" onClick={handleClickNext}>
            {nextLinkText}
          </div>
        </ModalLinksFooter>
      </div>
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
    </Dialog>
  )
}

Modal.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func.isRequired,
  query: PropTypes.object,
}
export default Modal
