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
  flex-direction: column;
  margin: 0 auto;
  animation: 2s ease-out 0s 1 slideInFromLeft;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: 100%;
    max-width: initial;
  }

  @keyframes slideInFromLeft {
    0% {
      transform: translateY(-20%);
    }
    100% {
      transform: translateY(0);
    }
  }
`
export const HomeQuoteContent = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  background: ${(props) => props.theme.colors.yellow};
  padding-top: 12px;
  padding-bottom: 20px;
  padding-right: 20px;
  padding-left: 20px;
  margin-top: -16px;

  @media (min-width: ${(props) => props.theme.breakpoints.s}) {
    max-width: 61%;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    max-width: 100%;
    padding: 50px 60px 60px;
    margin-top: 0;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    width: calc(100% - 40px);
  }

  p {
    padding-top: 20px;

    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      padding-top: 0;
      padding-bottom: 56px;
    }
  }
`

export const HomeQuoteContentGraph = styled.div`
  z-index: 1;
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    margin-top: -50px;
    img {
      width: 14%;
    }
  }
`
