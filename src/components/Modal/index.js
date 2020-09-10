import React, { useEffect } from 'react'
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
  useStyles,
} from './styles'
import Title from '../Utilities/Title'
import Text from '../Utilities/Text'
import { LinearProgress } from '@material-ui/core'

const Modal = ({ open, setOpen, query }) => {
  const classes = useStylesMainModal()
  const classesLinear = useStyles()

  const ref = React.createRef()

  useEffect(() => {
    console.log(ref)
  })

  const hangdleClick = () => {
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

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
            <div style={{ display: 'flex' }}>
              <div>
                {query?.ministries
                  ? query.ministries.map((info, index) => {
                      return (
                        <DialogContentContainer key={index} ref={ref}>
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
                    })
                  : ''}
              </div>
              <h2>Hello</h2>
              <div className={classesLinear.root}>
                <LinearProgress variant="determinate" value={10} />
              </div>
            </div>
          </ModalContent>
        </div>
        <ModalLinksFooter>
          <div className="Modal__Footer-Links" onClick={hangdleClick}>
            Prev
          </div>
          <ModalTitleFooter>
            <Title as="h4" type="heading5">
              {query.nextLink}
            </Title>
          </ModalTitleFooter>
          <div className="Modal__Footer-Links" to="/" onClick={hangdleClick}>
            Next
          </div>
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
