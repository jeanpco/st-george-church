import styled from '@emotion/styled'
import { theme } from '../../utils/styles'

export const FooterContainer = styled.div`
  text-align: center;

  @media (min-width: ${theme.breakpoints.md}) {
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
    margin-bottom: 25px;
    letter-spacing: 0px;
    text-align: center;
    padding-left: 10px;

    @media (min-width: ${theme.breakpoints.md}) {
      font-size: ${theme.fonts.m_small};
      margin-bottom: 0px;
      margin-right: 10px;
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

export const SocialMediaFooterContainer = styled.div`
  margin-bottom: 30px;
  margin-left: -25px;

  @media (min-width: ${theme.breakpoints.md}) {
    margin-left: 0px;
  }
`

export const LegalLinksContainer = styled.div`
  width: 100%;
  align-items: center;

  display: flex;
  flex-direction: column;

  @media (min-width: ${theme.breakpoints.md}) {
    justify-content: space-between;
    display: flex;
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
  border-top: 1px solid red;
  padding-top: 40px;
`

export const LegalContainerDesktop = styled.div`
  @media (min-width: ${theme.breakpoints.md}) {
  }
`
