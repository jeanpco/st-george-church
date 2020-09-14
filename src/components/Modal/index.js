import React, { useState, useEffect, useRef } from 'react'
import { Dialog } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles'
import Icon from '~/components/Icon'
import PropTypes from 'prop-types'
import {
  theme,
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
// import Customize from '../Utilities/CustomizeText'
import Title from '../Utilities/Title'
import Text from '../Utilities/Text'

const Modal = ({ open, setOpen, query }) => {
  const classes = useStylesMainModal()
  const [linkState, setLinkState] = useState(query.linkIndex)

  const linksArray = query.links
  const currentLink = linksArray[linkState]
  const nextLink = linksArray[linkState + 1]

  const ministriesArray = query.ministries
  const ministriesContent = []

  ministriesArray.map((info) => {
    if (currentLink === info.anchor_title) {
      ministriesContent.push(info)
    }
  })

  const isFirstRun = useRef(true)
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
    }
  }

  const handleClickPrev = () => {
    let i = linkState
    if (i > 0) {
      setLinkState(linkState - 1)
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Dialog fullScreen onClose={() => setOpen(false)} open={open}>
        <div className={classes.root}>
          <ModalTitleContainer>
            <ModalTitleContent>
              <Title as="h2" type="heading4">
                {currentLink}
              </Title>
            </ModalTitleContent>
            <ModalCloseIncon onClick={() => setOpen(false)}>
              <Icon type="clear" />
            </ModalCloseIncon>
          </ModalTitleContainer>
          <ModalDialogContainer>
            <ModalContent>
              {ministriesContent.map((info, index) => {
                return (
                  <DialogContentContainer key={index}>
                    <div>
                      <img
                        src={info.anchor_image.url}
                        alt=""
                        className="Modal_Anchor-Img"
                      />
                    </div>
                    <ModalTextContent>
                      <Text type="body">{info.anchor_text}</Text>
                    </ModalTextContent>
                  </DialogContentContainer>
                )
              })}
            </ModalContent>
          </ModalDialogContainer>
          <ModalLinksFooter>
            <div className="Modal__Footer-Links" onClick={handleClickPrev}>
              Prev
            </div>
            <ModalTitleFooter>
              <Title as="h4" type="heading5">
                {nextLink}
              </Title>
            </ModalTitleFooter>
            <div
              className="Modal__Footer-Links"
              to="/"
              onClick={handleClickNext}
            >
              Next
            </div>
          </ModalLinksFooter>
        </div>
      </Dialog>
    </ThemeProvider>
  )
}

Modal.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func.isRequired,
  query: PropTypes.object,
}
export default Modal
