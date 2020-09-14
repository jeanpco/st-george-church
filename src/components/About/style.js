import styled from '@emotion/styled'
import { theme } from '~/utils/styles'

export const AboutContainer = styled.div`
  margin-bottom: 30px;

  @media (min-width: ${theme.breakpoints.md}) {
    margin-bottom: 50px;
  }
  .About__Drawer-Title {
    margin-bottom: 10px;
  }
`

export const AboutText = styled.div`
  width: 81%;
  max-width: 350px;

  .About__Drawer-text {
    margin-top: 11px;
    display: block;
  }
`
