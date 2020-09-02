import styled from '@emotion/styled'
import { theme } from '../../utils/styles'

export const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  .SocialMedia__Icon {
    width: 20px;
    height: 20px;

    margin-right: 5px;

    @media (min-width: ${theme.breakpoints.md}) {
      width: 40px;
      height: 40px;
      margin-right: 15px;
    }
  }
`
