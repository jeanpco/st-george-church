import styled from '@emotion/styled'
import { theme } from '~/utils/styles'

export const TitleStyled = styled.p`
  &.heading1 {
    font-size: ${theme.fonts.heading5};
    font-weight: normal;
    font-family: ${theme.fontFamily.secondary};
    font-style: normal;
    line-height: 1.3;

    @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
      font-size: ${(props) => props.theme.fonts.heading2};
    }
  }
  &.heading2 {
    font-size: ${theme.fonts.heading6};
    font-family: ${theme.fontFamily.secondary};
    font-weight: normal;
    font-style: normal;
    line-height: normal;
    text-transform: capitalize;
    @media (min-width: ${theme.breakpoints.md}) {
      font-size: ${theme.fonts.heading2};
    }
  }
  &.heading3 {
    font-family: ${theme.fontFamily.primary};
    font-size: ${theme.fonts.heading6};
    font-weight: normal;
    font-style: normal;
    line-height: 1.3;

    @media (min-width: ${theme.breakpoints.l}) {
      font-size: ${theme.fonts.heading3};
      line-height: 1.3;
    }
  }
  &.heading4 {
    font-family: ${theme.fontFamily.secondary};
    font-size: ${theme.fonts.heading6};
    font-weight: normal;
    font-style: normal;
    line-height: 1.3;
    @media (min-width: ${theme.breakpoints.md}) {
      font-size: ${theme.fonts.heading4};
      line-height: 1.3;
    }
  }
  &.heading5 {
    font-family: ${theme.fontFamily.primary};
    font-size: ${theme.fonts.heading7};
    line-height: 1.3;
    font-weight: normal;
    font-style: normal;
  }
  &.heading6 {
    font-family: ${theme.fontFamily.secondary};
    font-size: ${theme.fonts.overline};
    line-height: 1.3;
    font-style: normal;
    font-weight: normal;
    @media (min-width: ${theme.breakpoints.md}) {
      font-size: ${theme.fonts.heading6};
      line-height: 1.3;
    }
  }

  &.heading7 {
    font-family: ${theme.fontFamily.primary};
    font-size: ${theme.fonts.heading7};
    color: ${theme.colors.secondary};
    line-height: 1.3;
    font-style: normal;
    font-weight: normal;
    @media (min-width: ${theme.breakpoints.md}) {
      font-size: ${theme.fonts.heading4};
      line-height: 1.3;
    }
  }

  &.heading8 {
    font-family: ${theme.fontFamily.secondary};
    font-size: ${theme.fonts.heading7};
    line-height: 1.3;
    font-style: normal;
    font-weight: normal;
    @media (min-width: ${theme.breakpoints.md}) {
      font-size: ${theme.fonts.heading6};
      line-height: 1.3;
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

  &.calendarTitle {
    font-family: ${theme.fontFamily.primary};
    font-size: ${theme.fonts.heading5};
    font-weight: normal;
    font-style: normal;
    line-height: normal;
    @media (min-width: ${theme.breakpoints.md}) {
      font-size: ${theme.fonts.heading3};
    }
  }
  &.menuHeading {
    font-family: ${theme.fontFamily.secondary};
    font-size: ${theme.fonts.heading6};
    line-height: 1.3;
    font-weight: normal;
    font-style: normal;
    color: ${theme.colors.secondary};
    text-decoration: underline;
    @media (min-width: ${theme.breakpoints.md}) {
      font-size: ${theme.fonts.heading3};
      line-height: 1, 3;
    }
  }

  &.backgroundHeading {
    font-family: ${theme.fontFamily.primary};
    font-size: ${theme.fonts.heading6};
    line-height: 1.3;
    font-weight: normal;
    font-style: normal;
    color: white;
    @media (min-width: ${theme.breakpoints.md}) {
      font-size: ${theme.fonts.heading3};
    }
  }

  &.successTitle {
    font-family: ${theme.fontFamily.tertiary};
    font-size: ${theme.fonts.heading6};
    line-height: 1.4;
    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      font-size: ${(props) => props.theme.fonts.heading6};
    }
  }

  &.contactHeading {
    font-family: ${theme.fontFamily.secondary};
    font-size: ${theme.fonts.heading6};
    line-height: 1.3;
    font-weight: normal;
    font-style: normal;
    color: ${theme.colors.primary};
    text-decoration: underline;
    @media (min-width: ${theme.breakpoints.md}) {
      font-size: ${theme.fonts.heading5};
      line-height: 1, 3;
    }
  }
`
