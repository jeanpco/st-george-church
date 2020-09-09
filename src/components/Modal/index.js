import React from 'react'
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
} from './styles'
import Title from '../Utilities/Title'
import Text from '../Utilities/Text'
import { Link } from 'gatsby'

const Modal = ({ open, setOpen, query }) => {
  const classes = useStylesMainModal()

  console.log(query.currentLink)

  console.log(query.nextLink)

  return (
    <ThemeProvider theme={theme}>
      <Dialog fullScreen onClose={() => setOpen(false)} open={open}>
        <div className={classes.root}>
          <ModalTitleContainer>
            <ModalTitleContent>
              <Title as="h2" type="heading4">
                {query.currentLink}
              </Title>
            </ModalTitleContent>
            <ModalCloseIncon onClick={() => setOpen(false)}>
              <Icon type="clear" />
            </ModalCloseIncon>
          </ModalTitleContainer>
          <ModalContent>
            <div>
              {query.ministries.map((info, index) => {
                return (
                  <DialogContentContainer key={index}>
                    <img
                      src={info.anchor_image.url}
                      alt=""
                      className="Modal_Anchor-Img"
                    />
                    <ModalTextContent>
                      <Text type="body">{info.anchor_text}</Text>
                    </ModalTextContent>
                  </DialogContentContainer>
                )
              })}
            </div>
          </ModalContent>
        </div>
        <ModalLinksFooter>
          <Link className="Modal__Footer-Links" to="/">
            Prev
          </Link>
          <ModalTitleFooter>
            <Title as="h4" type="heading5">
              {query.nextLink}
            </Title>
          </ModalTitleFooter>
          <Link className="Modal__Footer-Links" to="/">
            Next
          </Link>
        </ModalLinksFooter>
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
