import styled from '@emotion/styled'

export const HomeQuoteContainer = styled.div`
  margin-top: 31px;
  text-align: center;
  max-width: 1444px;
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    margin-top: 123px;
  }
`

export const HomeQuoteContentContainer = styled.div`
  display: flex;
  justify-content: center;
  width: calc(100% - 40px);
  margin: 0 auto;
  max-width: 440px;
  animation: 2s ease-out 0s 1 slideInFromLeft;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: 100%;
    max-width: initial;
  }

  .Home__Quote-Graphic {
    width: 151px;
  }
  @keyframes slideInFromLeft {
    0% {
      transform: translateY(-50%);
    }
    100% {
      transform: translateY(0);
    }
  }
`
export const HomeQuoteContent = styled.div`
  position: relative;
  width: 90%;
  margin: 0 auto;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: 100%;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    padding-right: 73px;
    padding-left: 73px;
  }

  p {
    padding-top: 20px;

    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      padding-top: 0;
      padding-bottom: 56px;
    }
  }
`
