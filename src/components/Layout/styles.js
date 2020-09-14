import styled from '@emotion/styled'
import { theme } from '../../utils/styles'

export const WidthLimiterContainer = styled.div`
  padding-left: 20px;
  padding-right: 20px;

  @media (min-width: ${theme.breakpoints.md}) {
    margin: 0 auto;
    max-width: 1440px;
    width: 100%;
    padding-left: 100px;
    padding-right: 100px;
  }
`
