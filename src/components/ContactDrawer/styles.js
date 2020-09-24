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
  .Social-Media-Container {
    margin-bottom: 0;
    flex-direction: column;
    align-items: normal;
    width: 100%;
    margin-bottom: 47px;

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
  padding-left: 34px;

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

export const IconArrowContainer = styled.div`
  display: none;

  @media (min-width: ${localTheme.breakpoints.md}) {
    padding-left: 15px;
    position: relative;
    bottom: 6px;
    display: inline;
  }
`

export const DrawerMenuText = styled.div`
  margin-bottom: 5px;

  @media (min-width: ${localTheme.breakpoints.md}) {
    margin-bottom: 0;
    padding-bottom: 10px;
  }

  .Header__Menu-button {
    text-decoration: none;
    color: ${localTheme.colors.black};
    font-family: ${localTheme.fontFamily.secondary};
  }

  .Header__Menu-button.current {
    @media (min-width: ${localTheme.breakpoints.md}) {
      text-decoration: underline;
    }
  }
`

export const ContactFlyoutContent = styled.div`
  max-width: 90%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 25px;
`

export const ContactAddress = styled.div`
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: 235px;
  }
`

export const ContactNumber = styled.div`
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: 140px;
  }
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
          borderLeft: `3px solid ${localTheme.colors.secondary}`,
          borderRight: 'none',
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
