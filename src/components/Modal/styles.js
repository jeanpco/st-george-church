import styled from '@emotion/styled'
import { makeStyles } from '@material-ui/core/styles'
import { createMuiTheme } from '@material-ui/core/styles'

import { theme as localTheme } from '~/utils/styles'

export const useStylesMainModal = makeStyles(() => ({
  root: {
    padding: '42px 42px 42px',
    overflow: 'hidden',
  },
}))

export let theme = createMuiTheme({})
theme = {
  ...theme,
  overrides: {
    MuiPaper: {
      root: {
        width: '100%',
      },
    },
    MuiDrawer: {
      paper: {},
    },
  },
}

export const DialogContentContainer = styled.div`
  border-right: 2px solid black;
  border-left: 2px solid black;
`

export const DialogTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 30px;

  @media (min-width: ${localTheme.breakpoints.md}) {
  }
`
