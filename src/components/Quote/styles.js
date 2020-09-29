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

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: 100%;
    max-width: initial;
  }

  .Home__Quote-Graphic {
    width: 151px;
  }
`
export const HomeQuoteContent = styled.div`
  padding-right: 22px;
  padding-left: 22px;
  position: relative;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: 100%;
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
