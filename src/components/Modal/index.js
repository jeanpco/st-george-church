import React, { useState, useEffect, useRef } from 'react'

import { Dialog } from '@material-ui/core'
import Icon from '~/components/Icon'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
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
} from './styles'
import Title from '../Utilities/Title'
import Text from '../Utilities/Text'
import Fade from 'react-reveal/Fade'
import AnimatedImage from '../AnimatedImage'

const Modal = ({ open, setOpen, query }) => {
  const isFirstRun = useRef(true)
  const classes = useStylesMainModal()
  const [linkState, setLinkState] = useState(query.linkIndex)

  const linksArray = query.links
  const currentLink = linksArray[linkState]
  const nextLink = linksArray[linkState + 1]

  const ministriesArray = query.ministries
  const ministriesContent = []

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
    setLinkState(query.linkIndex)
  }, [query.linkIndex])

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

  const nextLinkText = query.nextLinkText
  const prevLinkText = query.prevLinkText

  return (
    <Dialog fullScreen onClose={() => setOpen(false)} open={open}>
      <div className={classes.root}>
        <ModalTitleContainer>
          <Fade bottom distance="30px">
            <ModalTitleContent>
              {currentLink ? (
                <Title as="h2" type="heading4">
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
                    <DialogContentContainer key={index}>
                      <div>
                        {info?.list_image?.localFile?.childImageSharp?.fluid ? (
                          <AnimatedImage>
                            <Img
                              fluid={
                                info.list_image.localFile.childImageSharp.fluid
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
                          {info?.list_text ? (
                            <Text type="body">{info.list_text}</Text>
                          ) : (
                            ''
                          )}
                        </ModalTextContent>
                      </Fade>
                    </DialogContentContainer>
                  )
                })
              : ''}
          </ModalContent>
        </ModalDialogContainer>
        <ModalLinksFooter>
          {query.links[0] && currentLink ? (
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
    </Dialog>
  )
}

Modal.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func.isRequired,
  query: PropTypes.object,
}
export default Modal
