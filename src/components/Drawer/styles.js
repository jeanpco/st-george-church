import styled from '@emotion/styled'
import { createMuiTheme } from '@material-ui/core/styles'
import { theme as localTheme } from '~/utils/styles'

export const DrawerContainer = styled.div`
  height: 100%;
  padding-left: 30px;
  padding-right: 31px;

  @media (min-width: ${localTheme.breakpoints.lg}) {
    margin-left: 70px;
    padding-right: 35px;
  }
`

export const IconContainer = styled.div`
  /* used for the onClickFunction */
`

export const DrawerSocialMedia = styled.div`
  .Social-Media-Container {
    margin-bottom: 30px;

    .SocialMedia__Logo {
      min-width: 147px;

      @media (min-width: ${(props) => props.theme.breakpoints.md}) {
        width: 100%;
      }

      @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
        width: 286px;
      }
    }

    .Social__Icon-Container {
      justify-content: flex-end;

      @media (min-width: ${(props) => props.theme.breakpoints.md}) {
        padding-top: 14px;
      }
    }
  }

  .SocialMedia__Icon {
    width: 27px;
    margin-right: 0;
    margin-left: 5px;

    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      height: 30px;
      margin-right: 0;
      width: 100%;
    }

    @media (min-width: ${(props) => props.theme.breakpoints.l}) {
      height: 36px;
      margin-right: 14px;
      width: 100%;
    }
  }

  .Social__Logo-Container {
    margin-left: 0;
    width: 100%;
    padding-right: 5px;
  }
`

export const DrawerHeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 70px);

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    height: calc(100% - 126px);
  }

  .Drawer__Menu-Title {
    margin-bottom: 14px;

    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      margin-bottom: 24px;
    }
  }
`
export const DrawerHeaderContainer = styled.div`
  padding-top: 28px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 14px;

  h2 {
    position: relative;
    width: fit-content;
  }

  h2::after {
    content: '';
    width: 100%;
    height: 2px;
    background: #cc1d27;
    top: 20px;
    position: absolute;
    left: 0;

    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      top: 40px;
      height: 3px;
    }
  }

  @media (min-width: ${localTheme.breakpoints.md}) {
    padding-top: 40px;
    margin-bottom: 28px;
  }
`

export const DrawerHeaderLinks = styled.div`
  display: flex;
  align-items: center;
`

export const DrawerMenuText = styled.div`
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  @media (min-width: ${localTheme.breakpoints.md}) {
    margin-bottom: 0;
    padding-bottom: 10px;
  }

  .Header__Menu-button {
    text-decoration: none;
    color: ${localTheme.colors.black};
    font-family: ${localTheme.fontFamily.secondary};
    font-size: ${localTheme.fonts.heading6};
    font-weight: normal;
    font-style: normal;
    line-height: 1.3;
    letter-spacing: -1px;
    align-items: center;
    display: inline-block;
    position: relative;
    svg {
      display: none;
    }

    @media (min-width: ${localTheme.breakpoints.l}) {
      font-size: ${localTheme.fonts.heading3};
      line-height: 1.3;

      .Menu__Icon-Arrow {
        position: absolute;
        padding-left: 25px;
      }

      svg {
        visibility: hidden;
        display: inline;
        opacity: 0;
        transition: visibility 0s, opacity 0.5s linear, transform 0.3s ease-out;
        transform: translateX(-10px);
      }

      &:hover {
        svg {
          visibility: visible;
          opacity: 1;
          transform: translateX(0);
        }
      }

      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 3px;
        background-color: black;
        bottom: 0;
        left: 0;
        display: inline-block;
        transform: scaleX(0);
      }

      &:hover::after {
        transform: scaleX(1);
        transition: transform 0.5s linear;
        transform-origin: bottom left;
      }
    }
  }
`

export const IconArrowContainer = styled.div`
  padding-left: 20px;
`

export let theme = createMuiTheme({})
theme = {
  ...theme,
  overrides: {
    MuiPaper: {
      root: {
        width: '100%',
        [theme.breakpoints.up('600')]: {
          borderRight: '10px solid #CC1D27',
          maxWidth: '632px',
          width: '50%',
        },
        [theme.breakpoints.up('900')]: {
          maxWidth: '632px',
          width: '43.6%',
        },
      },
    },
    MuiDrawer: {
      paper: {
        boxShadow: 'none',
      },
    },
    MuiBackdrop: {
      root: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        backdropFilter: 'blur(10px)',
      },
    },
  },
}
