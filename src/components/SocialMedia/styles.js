import styled from '@emotion/styled'
import { theme } from '../../utils/styles'

export const SocialMediaContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  width: 100%;

  @media (min-width: ${theme.breakpoints.s}) {
    margin-bottom: 0;
    padding-top: 25px;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    margin-bottom: 0;
  }
`

export const SocialContentContainer = styled.div`
  padding-top: 40px;
  border-top: 1px solid ${theme.colors.secondary};

  @media (min-width: ${theme.breakpoints.s}) {
    padding-top: 25px;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    padding-top: 25px;
  }
`
export const LogoContainer = styled.div`
  margin-left: 10px;

  .SocialMedia__Logo {
    width: 166px;
  }
`

export const LinkContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  @media (min-width: ${theme.breakpoints.s}) {
    position: relative;
    top: 0;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    position: relative;
    top: 0;
  }

  .SocialMedia__Icon {
    width: 20px;
    height: 20px;
    margin-right: 5px;

    @media (min-width: ${theme.breakpoints.md}) {
      width: 30px;
      height: 30px;
      margin-right: 15px;
    }
  }
`
