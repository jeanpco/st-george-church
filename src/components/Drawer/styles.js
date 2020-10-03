import styled from '@emotion/styled'
import { createMuiTheme } from '@material-ui/core/styles'
import { theme as localTheme } from '~/utils/styles'

export const DrawerContainer = styled.div`
  height: 100%;
`

export const IconContainer = styled.div`
  /* used for the onClickFunction */
`

export const DrawerSocialMedia = styled.div`
  @media (min-width: ${localTheme.breakpoints.md}) {
    max-width: 400px;
  }

  .Social-Media-Container {
    margin-bottom: 0;

    .SocialMedia__Logo {
      width: 147px;

      @media (min-width: ${localTheme.breakpoints.s}) {
        width: 127px;
      }

      @media (min-width: ${localTheme.breakpoints.md}) {
        width: 219px;
        margin-bottom: 15px;
      }
    }

    .Social__Icon-Container {
      justify-content: flex-start;
    }
  }

  .Social__Logo-Container {
    margin-left: 0;
    margin-right: 16px;

    @media (min-width: ${localTheme.breakpoints.md}) {
      margin-right: 27px;
    }
  }
`

export const DrawerHeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 68px);
  padding-left: 34px;
  margin-top: -13px;

  .Drawer__Menu-Title {
    margin-bottom: 14px;
  }
`
export const DrawerHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 31px;
  padding-top: 28px;

  @media (min-width: ${localTheme.breakpoints.md}) {
    padding-right: 45;
    padding-top: 47;
  }
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
    align-items: center;
    display: inline-block;
    position: relative;
    svg {
      display: none;
    }

    @media (min-width: ${localTheme.breakpoints.md}) {
      font-size: ${localTheme.fonts.heading4};
      line-height: 1.3;
      .Menu__Icon-Arrow {
        position: absolute;
        padding-left: 25px;
      }

      svg {
        visibility: hidden;
        display: inline;
        opacity: 0;
        transition: visibility 0s, opacity 0.5s linear;
      }

      &:hover {
        svg {
          visibility: visible;
          opacity: 1;
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
          maxWidth: '632px',
          width: '43%',
        },
      },
    },
    MuiDrawer: {
      paper: {
        [theme.breakpoints.up('600')]: {
          borderRight: `3px solid ${localTheme.colors.secondary}`,
        },
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
