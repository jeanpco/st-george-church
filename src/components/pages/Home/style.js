import styled from '@emotion/styled'

export const DesktopIntroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const HomeIntroContainer = styled.div`
  text-align: center;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: 50%;
    padding-right: 10px;
    padding-left: 10px;

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

  h3 {
    width: 217px;

    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      width: 190px;
    }

    @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
      width: 377px;
    }
  }
`

export const HomeIntroText = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 16px;

  p {
    width: 223px;

    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      width: 189px;
    }

    @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
      width: 459px;
      padding-bottom: 49px;
    }
  }
`
