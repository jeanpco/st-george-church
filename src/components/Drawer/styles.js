import styled from '@emotion/styled'
import { createMuiTheme } from '@material-ui/core/styles'
import { theme as localTheme } from '~/utils/styles'

export const IconContainer = styled.div`
  /* used for the onClickFunction */
`

export const DrawerSocialMedia = styled.div`
  position: absolute;
  width: 80%;
  bottom: 41px;
`

export const DrawerHeaderContent = styled.div`
  padding-left: 34px;
  margin-top: -13px;

  .Drawer__Menu-Title {
    margin-bottom: 14px;
  }
`
export const DrawerContainer = styled.div`
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

export const DrawerMenuTextContainer = styled.div`
  margin-bottom: 116px;
`

export const DrawerMenuText = styled.div`
  margin-bottom: 5px;
  span {
    display: none;
  }
  @media (min-width: ${localTheme.breakpoints.md}) {
    margin-bottom: 0;

    span {
      padding-left: 15px;
      position: relative;
      bottom: 6px;
      display: inline;
    }
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
  },
}
