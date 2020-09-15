import styled from '@emotion/styled'

export const HomePageContainer = styled.div`
  .HomePage__WidthLimiter {
    padding-right: 0;
  }
`

export const SilderContainerDes = styled.div`
  width: 50%;
`

export const DesktopIntroContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`

export const HomeIntroContainer = styled.div`
  text-align: center;
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: 50%;
    padding-right: 147px;
    .Home__Intro-Graphic {
      width: 262px;
    }
  }
  .Home__Intro-link {
    color: ${(props) => props.theme.colors.black};
    font-family: ${(props) => props.theme.fontFamily.secondary};
  }
`
export const HomeIntroContentContainer = styled.div`
  margin-top: 35px;
`

export const HomeIntroTitle = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
  h1 {
    width: 217px;
    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      font-size: ${(props) => props.theme.fonts.heading5} !important;
      width: 253px;
    }

    @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
      font-size: ${(props) => props.theme.fonts.heading2} !important;
      width: 416px;
    }
  }
`

export const HomeIntroText = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 20px;

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    padding-bottom: 47px;
  }

  p {
    width: 223px;
    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      font-size: ${(props) => props.theme.fonts.smallText} !important;
    }
    @media (min-width: ${(props) => props.theme.breakpoints.l}) {
      font-size: ${(props) => props.theme.fonts.body} !important;
      width: 433px;
      padding-left: 22px;
    }
  }
`
