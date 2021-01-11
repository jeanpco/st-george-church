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
    margin-bottom: 15px;
  }
`

export const SocialContentContainer = styled.div`
  padding-top: 36px;
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

    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      width: 286px;
    }
  }
`

export const LinkContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-top: 10px;

  @media (min-width: ${theme.breakpoints.s}) {
    position: relative;
    top: 0;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    position: relative;
    top: 0;
  }

  .SocialMedia__Icon {
    width: 23px;
    height: 23px;
    margin-left: 10px;

    @media (min-width: ${theme.breakpoints.md}) {
      width: 43px;
      height: 43px;
      margin-left: 15px;
    }
  }
`
