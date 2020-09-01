import styled from '@emotion/styled'
import { theme } from '../../utils/styles'

export const SocialMediaContainer = styled.div`
  /* width: 180px; */
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (min-width: ${theme.breakpoints.md}) {
    width: 250px;
  }
  .SocialMedia__Icon {
    width: 30px;
    height: 30px;

    margin-right: 10px;

    @media (min-width: ${theme.breakpoints.md}) {
      width: 40px;
      height: 40px;
    }
  }
`
