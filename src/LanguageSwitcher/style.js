import styled from '@emotion/styled'
import { theme } from '~/utils/styles'

export const LanguageSwitcherContainer = styled.div`
  display: inline-flex;

  p {
    margin-bottom: 0px !important;
  }

  p.current {
    font-weight: bold;
  }

  .Header__LanguageSwitcher-button {
    text-decoration: none;
    color: black;
    font-family: ${theme.fontFamily.secondary};
    line-height: normal;
    font-style: normal;
    font-size: ${theme.fonts.heading6};

    @media (min-width: ${theme.breakpoints.md}) {
      font-size: ${theme.fonts.heading5};
      line-height: normal;
    }
  }
`
