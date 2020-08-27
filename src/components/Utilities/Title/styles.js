import styled from '@emotion/styled';
import { theme } from '~/utils/styles';

export const TitleStyled = styled.p`
  
  &.heading1 {
    font-size: ${theme.fonts.heading3};
    letter-spacing: ${theme.letterSpacing.heading3};
    font-weight: 300;
    font-style: normal;
    line-height: 0.9;

    @media (min-width: ${theme.breakpoints.md}) {
      font-size: ${theme.fonts.heading1};
      letter-spacing: ${theme.letterSpacing.heading1};
    }
  }

  &.heading2 {
    font-size: ${theme.fonts.heading5};
    letter-spacing: ${theme.letterSpacing.heading5};
    font-weight: 400;
    font-style: normal;
    text-transform: uppercase;

    @media (min-width: ${theme.breakpoints.md}) {
      font-weight: 300;
      font-size: ${theme.fonts.heading2};
      letter-spacing: ${theme.letterSpacing.heading2};
    }
  }

  &.heading3 {
    font-size: ${theme.fonts.heading3};
    letter-spacing: ${theme.letterSpacing.heading3};
    font-weight: 300;
    font-style: normal;
  }

  &.heading4 {
    font-size: ${theme.fonts.heading4};
    letter-spacing: ${theme.letterSpacing.heading4};
    font-weight: 300;
    font-style: normal;
    text-transform: uppercase;
  }

  &.heading5 {
    font-size: ${theme.fonts.heading5};
    letter-spacing: ${theme.letterSpacing.heading5};
    font-weight: 400;
    font-style: normal;
    text-transform: uppercase;
  }

  &.subheading1 {
    font-size: ${theme.fonts.subheading1};
    letter-spacing: ${theme.letterSpacing.subheading1};
    font-weight: normal;
    font-style: normal;
    text-transform: uppercase;
  }
`;
