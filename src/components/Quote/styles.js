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

  .Home__Quote-Graphic {
    width: 151px;
  }
`
export const HomeQuoteContent = styled.div`
  padding-right: 22px;
  padding-left: 22px;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    padding-right: 73;
    padding-left: 73px;
  }

  p {
    width: 210px;
    padding-top: 20px;

    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      width: 540px;
      padding-top: 0;
      padding-bottom: 56px;
    }

    @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
      width: 898px;
      padding-top: 0;
      padding-bottom: 56px;
    }
  }
`
