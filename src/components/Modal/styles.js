import styled from '@emotion/styled'
import { makeStyles } from '@material-ui/core/styles'
import Title from '../Utilities/Title'
import Text from '../Utilities/Text'
export const useStylesMainModal = makeStyles(() => ({
  root: {
    height: '100%',
  },
}))

export const ModalDialogContainer = styled.div`
  height: calc(100% - 130px);
  padding: 27px 25px 0;
`

export const ModalContent = styled.div`
  border-left: 1px solid ${(props) => props.theme.colors.black};
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const useStyles = makeStyles({
  root: {
    width: '100%',
    transform: 'rotate(90deg)',
  },
})

export const DialogContentContainer = styled.div`
  padding-left: 18px;

  .Modal_Anchor-Img {
    width: 100%;
  }
`

export const ModalCloseIncon = styled.div`
  /* for onclick? */
`

export const ModalTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 24px;
  padding: 27px 25px 0;
`
export const ModalTitleContent = styled.div`
  width: 200px;
  height: 50px;
`
export const ModalTextContent = styled.div`
  height: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  word-break: break-word;
  width: 94%;

  p::first-letter {
    color: ${(props) => props.theme.colors.secondary};
    font-family: ${(props) => props.theme.fontFamily.primary};
    font-size: 46px;
    text-transform: uppercase;
    float: left;
    padding-right: 10px;
    line-height: 0.7;
    padding-top: 8px;
  }
`
export const ModalLinksFooter = styled.div`
  display: flex;
  padding: 14px 14px 0 15px;

  .Modal__Footer-Links {
    color: ${(props) => props.theme.colors.secondary};
    font-family: ${(props) => props.theme.fontFamily.secondary};
    font-size: ${(props) => props.theme.fonts.overline};
    text-decoration: none;
    text-transform: uppercase;
  }
`

export const MinistriesContactSection = styled.div`
  margin: 0 0 50px 30px;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    margin: 50px 0 50px 30px;
  }
`

export const ModalTitleFooter = styled.div`
  padding-left: 8px;
  padding-right: 15px;
  width: 100%;
  text-align: right;
`

export const MinisterContactContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
`

export const MinistriesContactImg = styled.div`
  position: relative;
  .Ministries__Contact-Img {
    width: 86px;

    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      width: 120px;
    }
  }
`

export const MinistriesContactIcon = styled.div`
  position: absolute;
  transform: translate(-5px, -9px);

  svg {
    width: 96px;
    height: 102px;
    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      width: 135px;
      height: 135px;
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    transform: translate(-8px, -9px);
  }
`

export const MinistriesContactInfo = styled.div`
  width: 50%;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    margin-left: 40px;
    width: 100%;
  }
`

export const MinistriesContactTitle = styled(Title)`
  font-family: ${(props) => props.theme.fontFamily.primary} !important;
  font-size: ${(props) => props.theme.fonts.heading5};
  text-decoration: underline;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: ${(props) => props.theme.fonts.heading4} !important;
  }
`

export const MinistriesPostionTitle = styled(Title)`
  font-family: ${(props) => props.theme.fontFamily.primary} !important;
  font-size: ${(props) => props.theme.fonts.heading5} !important;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: ${(props) => props.theme.fonts.heading4} !important;
  }
`

export const MinistriesFullName = styled(Text)`
  font-family: ${(props) => props.theme.fontFamily.secondary} !important;
  font-size: ${(props) => props.theme.fonts.mediumText} !important;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: ${(props) => props.theme.fonts.bigText} !important;
  }
`
