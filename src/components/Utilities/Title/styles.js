import styled from '@emotion/styled'
import { theme } from '~/utils/styles'

export const TitleStyled = styled.p`
  &.heading1 {
    font-size: ${theme.fonts.heading5};
    font-weight: normal;
    font-style: normal;
    line-height: normal;
    font-family: ${theme.fontFamily.secondary};

    @media (min-width: ${theme.breakpoints.md}) {
      font-size: ${theme.fonts.heading2};
    }
  }

  &.heading2 {
    font-family: ${theme.fontFamily.secondary};
    font-size: ${theme.fonts.heading6};
    letter-spacing: 2px;
    font-weight: normal;
    font-style: normal;
    line-height: normal;

    @media (min-width: ${theme.breakpoints.md}) {
      font-size: ${theme.fonts.heading2};
    }
  }

  &.heading3 {
    font-family: ${theme.fontFamily.primary};
    font-size: ${theme.fonts.heading5};
    font-weight: normal;
    font-style: normal;
    line-height: normal;

    @media (min-width: ${theme.breakpoints.md}) {
      font-size: ${theme.fonts.heading3};
    }
  }

  &.heading4 {
    font-family: ${theme.fontFamily.primary};
    font-size: ${theme.fonts.heading5};
    font-weight: normal;
    font-style: normal;
    line-height: normal;
  }

  &.heading5 {
    font-family: ${theme.fontFamily.primary};
    font-size: ${theme.fonts.heading7};
    line-height: normal;
    font-weight: normal;
    font-style: normal;
  }

  &.heading6 {
    font-family: ${theme.fontFamily.secondary};
    font-size: ${theme.fonts.overline};

    @media (min-width: ${theme.breakpoints.md}) {
      font-size: ${theme.fonts.heading6};
      line-height: normal;
    }
  }

  &.overline {
    font-size: ${theme.fonts.overline};
    line-height: normal;
    font-weight: normal;
    font-style: normal;
    text-transform: uppercase;

    @media (min-width: ${theme.breakpoints.md}) {
      font-size: ${theme.fonts.heading6};
    }
  }

  &.menuHeading {
    font-family: ${theme.fontFamily.secondary};
    font-size: ${theme.fonts.heading6};
    line-height: normal;
    font-weight: normal;
    font-style: normal;
    color: ${theme.colors.secondary};
    text-decoration: underline;

    @media (min-width: ${theme.breakpoints.md}) {
      font-size: ${theme.fonts.heading3};
    }
  }
`
