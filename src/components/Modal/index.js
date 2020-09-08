import React from 'react'
import { Dialog } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles'
import Icon from '~/components/Icon'
import PropTypes from 'prop-types'
import {
  theme,
  useStylesMainModal,
  DialogTitle,
  DialogContentContainer,
} from './styles'
import Title from '../Utilities/Title'

const Modal = ({ open, setOpen, query }) => {
  const classes = useStylesMainModal()

  return (
    <ThemeProvider theme={theme}>
      <Dialog fullScreen onClose={() => setOpen(false)} open={open}>
        <div className={classes.root}>
          <DialogContentContainer>
            <DialogTitle>
              <Title>{query.link}</Title>
              <div onClick={() => setOpen(false)}>
                <Icon type="clear" />
              </div>
            </DialogTitle>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
              alias ullam iure!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
              alias ullam iure!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
              alias ullam iure!
            </p>
          </DialogContentContainer>
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
