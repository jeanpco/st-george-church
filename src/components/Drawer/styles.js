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
  left: 56%;
  top: 5%;

  @media (min-width: ${localTheme.breakpoints.md}) {
    left: 0;
    top: 5%;
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
  left: 84.06%;
  right: 9.69%;
  top: 5.28%;
  bottom: 91.2%;

  @media (min-width: ${localTheme.breakpoints.md}) {
    left: 90%;
  }
`

export const DrawerHeaderContent = styled.div`
  padding-left: 34px;
  margin-top: 14%;
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
