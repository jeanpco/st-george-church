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

    @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
      font-size: ${(props) => props.theme.fonts.bigText};
    }
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
      width: 253px;
    }

    @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
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
      width: 323px;
    }
    @media (min-width: ${(props) => props.theme.breakpoints.l}) {
      width: 433px;
      padding-left: 22px;
    }
  }
`
