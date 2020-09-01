import styled from '@emotion/styled'

export const TextStyled = styled.p`
  &.body {
    font-family: ${(props) => props.theme.fontFamily.tertiary};
    font-size: ${(props) => props.theme.fonts.smallText};
    font-weight: normal;
    font-style: normal;

    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      font-size: ${(props) => props.theme.fonts.bigText};
    }
  }

  &.smallText400 {
    font-family: ${(props) => props.theme.fontFamily.tertiary};
    font-size: ${(props) => props.theme.fonts.links};
    color: ${(props) => props.theme.colors.black};
    font-weight: normal;
    font-style: normal;

    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      font-size: ${(props) => props.theme.fonts.mediumText};
    }
  }

  &.smallText500 {
    font-family: ${(props) => props.theme.fontFamily.tertiary};
    font-size: ${(props) => props.theme.fonts.smallText};
    font-weight: normal;
    font-style: normal;

    span {
      text-decoration: underline;
    }
    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      font-size: ${(props) => props.theme.fonts.mediumText};
    }
  }

  &.smallText700 {
    font-family: ${(props) => props.theme.fontFamily.tertiary};
    font-size: ${(props) => props.theme.fonts.smallText};
    letter-spacing: ${(props) => props.theme.letterSpacing.smallText};
    font-weight: 700;
    font-style: normal;
    text-transform: uppercase;
  }

  &.bigText400 {
    font-family: ${(props) => props.theme.fontFamily.tertiary};
    font-size: ${(props) => props.theme.fonts.body};
    letter-spacing: ${(props) => props.theme.letterSpacing.body};
    font-weight: normal;
    font-style: normal;

    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      font-size: ${(props) => props.theme.fonts.bigText};
    }
  }

  a {
    color: ${(props) => props.theme.colors.secondary};
  }

  &.link {
    color: ${(props) => props.theme.colors.black};
    font-family: ${(props) => props.theme.fontFamily.tertiary};
    font-weight: normal;
    padding: 6px 2px;
    font-size: ${(props) => props.theme.fonts.links};
    display: inline-block;
    text-decoration: none;
    opacity: 0.4;
    cursor: pointer;

    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      font-size: ${(props) => props.theme.fonts.mediumText};
    }

    &::before,
    &::after {
      content: '';
      width: 100%;
      height: 1px;
      position: absolute;
      left: 0;
      bottom: 0;
      transition: transform 200ms linear;
      transform-origin: right;
    }

    &::after {
      transform: scaleX(0);
      transition-delay: 250ms;
      transform-origin: left;
    }

    &:hover {
      &::after {
        transform: scaleX(1);
      }

      &::before {
        transform: scaleX(0);
      }
    }

    &.primary {
      color: ${(props) => props.theme.colors.primary};

      &::before,
      &::after {
        background: ${(props) => props.theme.colors.primary};
      }

      &:hover {
        color: ${(props) => props.theme.colors.secondary};

        &::before,
        &::after {
          background: ${(props) => props.theme.colors.secondary};
        }
      }
    }

    &.secondary {
      color: ${(props) => props.theme.colors.secondary};

      &::before,
      &::after {
        background: ${(props) => props.theme.colors.secondary};
      }

      &:hover {
        color: ${(props) => props.theme.colors.primary};

        &::before,
        &::after {
          background: ${(props) => props.theme.colors.primary};
        }
      }
    }

    &.tertiary {
      color: ${(props) => props.theme.colors.tertiary};

      &::before,
      &::after {
        background: ${(props) => props.theme.colors.tertiary};
      }

      &:hover {
        color: ${(props) => props.theme.colors.secondary};

        &::before,
        &::after {
          background: ${(props) => props.theme.colors.secondary};
        }
      }
    }
  }
`
