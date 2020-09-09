import styled from '@emotion/styled'
import { makeStyles } from '@material-ui/core/styles'
import { createMuiTheme } from '@material-ui/core/styles'

export const useStylesMainModal = makeStyles(() => ({
  root: {
    padding: '25px 25px 25px',
    height: '100%',
  },
}))

export const ModalContent = styled.div`
  height: 400px;
  overflow: scroll;
  max-width: 260px;
  border-left: 1px solid ${(props) => props.theme.colors.black};
`

export let theme = createMuiTheme({})
theme = {
  ...theme,
  overrides: {
    MuiPaper: {
      root: {
        width: '100%',
      },
    },
    MuiDrawer: {
      paper: {},
    },
  },
}

export const DialogContentContainer = styled.div`
  padding-left: 18px;

  .Modal_Anchor-Img {
    width: 230px;
  }
`

export const ModalCloseIncon = styled.div``

export const ModalTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 24px;
`
export const ModalTitleContent = styled.div`
  max-width: 150px;
`
export const ModalTextContent = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
`
export const ModalLinksFooter = styled.div`
  display: flex;
  align-items: center;
  padding-left: 14px;
  padding-bottom: 20px;
  padding-right: 14px;

  .Modal__Footer-Links {
    color: ${(props) => props.theme.colors.secondary};
    font-family: ${(props) => props.theme.fontFamily.secondary};
    font-size: ${(props) => props.theme.fonts.overline};
    text-decoration: none;
    text-transform: uppercase;
  }
`

export const ModalTitleFooter = styled.div`
  padding-left: 8px;
  padding-right: 15px;
  width: 100%;
  text-align: right;
`
