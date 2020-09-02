import styled from '@emotion/styled'
import { createMuiTheme } from '@material-ui/core/styles'
import { theme as localTheme } from '~/utils/styles'
import Text from '~/components/Utilities/Text'

export const DrawerItem = styled(Text)`
  /* keeping it for later when I will add the text for the drawer menu as an example */
`

export const DrawerButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 24px;
  position: absolute;
  left: 179px;
  top: 28px;

  @media (min-width: ${localTheme.breakpoints.md}) {
    left: 0;
    top: 28px;
    display: flex;
    justify-content: inherit;
    width: 100%;
    justify-content: flex-end;
    padding-right: 103px;
  }
`

export const IconContainer = styled.div`
  cursor: pointer;
  position: absolute;
  left: 269px;
  right: 32px;
  top: 30px;

  @media (min-width: ${localTheme.breakpoints.md}) {
    left: 558px;
  }
`

export const DrawerHeaderContent = styled.div`
  padding-left: 34px;
  margin-top: 40px;

  .Drawer__Menu-Title {
    margin-bottom: 14px;
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
export const DrawerHeader = styled.div``

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
