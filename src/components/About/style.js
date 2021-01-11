import styled from '@emotion/styled'
import { theme } from '~/utils/styles'

export const AboutContainer = styled.div`
  margin-bottom: 30px;

  @media (min-width: ${theme.breakpoints.md}) {
    margin-bottom: 48px;
  }
  .About__Drawer-Title {
    margin-bottom: 10px;

    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      margin-bottom: 21px;
    }
  }
`

export const AboutText = styled.div`
  width: 85%;
  max-width: 350px;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    max-width: 450px;
  }

  .About__Drawer-text {
    margin-top: 11px;
    display: block;
  }
`
