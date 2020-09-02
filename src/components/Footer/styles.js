import styled from '@emotion/styled'
import { theme } from '../../utils/styles'

export const FooterContainer = styled.div`
  text-align: center;
  position: absolute;
  width: 100%;
  bottom: 0;

  @media (min-width: ${theme.breakpoints.s}) {
    flex-direction: row;
    min-height: 250px;
    width: 100%;
    justify-content: space-between;
    text-align: right;
  }

  .Footer__WidthLimiter {
    padding: 40px 20px 20px;
    margin: 0 auto;

    @media (min-width: ${theme.breakpoints.md}) {
      flex-direction: row;
      padding: 50px 100px;
    }
  }

  .Footer__Logo {
    width: 160px;
    height: 27px;
    margin-bottom: 25px;
    margin-left: 10px;

    @media (min-width: ${theme.breakpoints.md}) {
      width: 286px;
      margin-left: 10px;
      height: 45px;
    }
  }

  .Footer__AgencyCopyright {
    text-align: center;
    margin-bottom: 25px;
    letter-spacing: 0px;

    @media (min-width: ${theme.breakpoints.md}) {
      font-size: ${theme.fonts.m_small};
      margin-bottom: 10px;
    }
  }

  .Footer__CopyrightText {
    letter-spacing: 0px;
    text-align: center;
    padding-left: 10px;
    margin-top: 16px;
    width: 145px;
    word-break: break-word;

    @media (min-width: ${theme.breakpoints.s}) {
      font-size: ${theme.fonts.m_small};
      margin-bottom: 0px;
      margin-right: 10px;
      margin-top: 0px;
      width: 326px;
      opacity: 0.4;
    }

    @media (min-width: ${theme.breakpoints.md}) {
      font-size: ${theme.fonts.m_small};
      margin-bottom: 0px;
      margin-right: 10px;
      word-break: none;
      width: 466px;
      margin-top: 0px;
    }
  }

  .Footer__LegalLinks {
    font-size: ${theme.fonts.m_small};
    margin-right: 5px;
    opacity: 0.4;
    letter-spacing: 0px;
    text-align: center;

    @media (min-width: ${theme.breakpoints.md}) {
      font-size: ${theme.fonts.m_small};
      margin-left: 10px;
    }
  }
`

export const GraphicContainer = styled.div`
  margin-bottom: 43px;

  .Footer__Graphic {
    width: 190px;
    height: 45px;
  }

  @media (min-width: ${theme.breakpoints.s}) {
    text-align: center;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    text-align: center;
    margin-bottom: 100px;

    .Footer__Graphic {
      width: 500px;
      height: 120px;
    }
  }
`

export const SocialMediaFooterContainer = styled.div`
  margin-bottom: 30px;

  @media (min-width: ${theme.breakpoints.md}) {
    margin-left: 0px;
  }
`

export const LegalLinksContainer = styled.div`
  width: 100%;
  align-items: center;

  display: flex;
  flex-direction: column;
  margin-top: 25px;
  margin-bottom: 25px;
  @media (min-width: ${theme.breakpoints.s}) {
    justify-content: space-between;
    display: flex;
    flex-direction: row;
    margin-top: 0px;
    margin-bottom: 0px;
  }
`

export const FooterContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${theme.breakpoints.md}) {
    align-items: flex-end;
  }
`

export const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 2px solid ${theme.colors.secondary};
  padding-top: 40px;
`
