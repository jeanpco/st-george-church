import { makeStyles } from '@material-ui/core/styles'
import { theme as localTheme } from '~/utils/styles'

export const buttonUseStyles = makeStyles(() => ({
  primary: {
    color: localTheme.colors.secondary,
  },
  root: {
    color: localTheme.colors.secondary,
    background: 'transparent',
    display: 'inline-flex',
    borderRadius: '0px',
    width: 'auto',
    maxWidth: 160,
    letterSpacing: '-1px',
    textDecoration: 'underline',
    fontSize: localTheme.fonts.heading6,
    fontFamily: localTheme.fontFamily.secondary,
    textTransform: 'capitalize',
    fontWeight: 500,
    ['@media (min-width:780px)']: {
      fontSize: localTheme.fonts.heading5,
    },
    '$:hover': {
      background: 'transparent',
    },
    '&:focus': {
      outline: 'none',
    },
    '&:disabled': {
      opacity: 0.7,
      cursor: 'not-allowed',
    },
    '& .DotLoader': {
      marginLeft: '5px',
    },
  },
}))
