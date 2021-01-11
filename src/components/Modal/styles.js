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

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.24);
  }

  &::-webkit-scrollbar-thumb {
    background: black;
  }

  /* for firefox */
  scrollbar-color: black lightGrey;
  scrollbar-width: thin;
`

export const useStyles = makeStyles({
  root: {
    width: '100%',
    transform: 'rotate(90deg)',
  },
})

export const DialogContentContainer = styled.div`
  padding-left: 20px;
  padding-right: 20px;

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
  padding: 20px 14px 0 15px;

  .Modal__Footer-Links {
    color: ${(props) => props.theme.colors.secondary};
    font-family: ${(props) => props.theme.fontFamily.secondary};
    font-size: ${(props) => props.theme.fonts.mediumText};
    text-decoration: none;
    text-transform: uppercase;
  }
`

export const MinistriesContactSection = styled.div`
  padding-left: 20px;
  padding-bottom: 20px;
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    margin: 50px 0 0 0;
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
  cursor: pointer;
  padding-left: 5px;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    :hover {
      .Ministries__Contact__Image-Circle {
        background: linear-gradient(
            0deg,
            rgba(204, 29, 39, 0.8),
            rgba(204, 29, 39, 0.8)
          ),
          url(.jpg);

        border-radius: 50%;
        opacity: 1 !important;

        .Ministries__ContactImageTitle {
          top: 53%;
          opacity: 1;
        }
      }

      svg,
      p,
      h5,
      h6 {
        color: ${(props) => props.theme.colors.secondary};
      }
    }
  }

  .Ministries__Contact__Image-Circle {
    width: 115px;
    height: 115px;
    margin: 0 auto;
    position: relative;
    display: flex;
    align-items: center;

    .Ministries__ContactImageTitle {
      color: white;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
      transition-property: opacity, transform;
      transition: 300ms ease-in-out;
      font-size: ${(props) => props.theme.fonts.heading5};
    }

    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      width: 125px;
      height: 125px;
    }
  }
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
    transform: translate(-5px, -5px);
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
