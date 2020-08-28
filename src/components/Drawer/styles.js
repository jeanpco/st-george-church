import styled from '@emotion/styled'
import { createMuiTheme } from '@material-ui/core/styles'
import { theme as localTheme } from '~/utils/styles'
import Text from '~/components/Utilities/Text'

export const DrawerItem = styled(Text)`
  padding: 22px;
  border-bottom: 1px solid ${localTheme.colors.secondary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  svg {
    margin-right: -5px;
  }
`

export const IconContainer = styled.div`
  min-height: 60px;
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 18px;
`

export const DrawerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${localTheme.colors.secondary};
  background: ${localTheme.colors.tertiary};
  z-index: 3;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  max-width: 320px;

  .Header__Logo {
    width: 130px;
    display: flex;
    align-items: center;
    padding-left: 22px;

    img {
      width: 100%;
    }
  }
`

export let theme = createMuiTheme({})
theme = {
  ...theme,
  overrides: {
    MuiPaper: {
      root: {
        maxWidth: '320px',
        width: '100%',
      },
    },
    MuiDrawer: {
      paper: {
        background: localTheme.colors.tertiary,
      },
    },
  },
}
