import { makeStyles } from '@material-ui/core/styles'
import { theme as localTheme } from '~/utils/styles'

export const buttonUseStyles = makeStyles(theme => ({
  primary: {
    color: localTheme.colors.primary,
    border: `1px solid ${localTheme.colors.secondary}`,
    backgroundColor: localTheme.colors.secondary,
    '&:hover': {
      color: localTheme.colors.tertiary,
      backgroundColor: localTheme.colors.primary,
      '& .DotLoader': {
        '& > div > div': {
          backgroundColor: localTheme.colors.tertiary,
        },
      },
    },
    '&:disabled': {
      opacity: 0.7,
      color: localTheme.colors.primary,
      backgroundColor: localTheme.colors.tertiary,
      cursor: 'not-allowed',
      border: `1px solid ${localTheme.colors.primary}`,
    },
    '& .DotLoader': {
      '& > div > div': {
        backgroundColor: localTheme.colors.primary,
      },
    },
  },
  secondary: {
    transitionProperty: 'border color',
    border: `1px solid ${localTheme.colors.secondary}`,
    color: localTheme.colors.secondary,
    backgroundColor: localTheme.colors.tertiary,
    '&:hover': {
      color: localTheme.colors.primary,
      border: `1px solid ${localTheme.colors.primary}`,
      '& .DotLoader': {
        '& > div > div': {
          backgroundColor: localTheme.colors.primary,
        },
      },
    },
    '&:disabled': {
      opacity: 0.7,
      color: localTheme.colors.secondary,
      backgroundColor: localTheme.colors.tertiary,
      cursor: 'not-allowed',
    },
    '& .DotLoader': {
      '& > div > div': {
        backgroundColor: localTheme.colors.secondary,
      },
    },
  },
  tertiary: {
    color: localTheme.colors.tertiary,
    backgroundColor: localTheme.colors.primary,
    border: `1px solid ${localTheme.colors.primary}`,
    '&:hover': {
      color: localTheme.colors.primary,
      backgroundColor: localTheme.colors.secondary,
      border: `1px solid ${localTheme.colors.primary}`,
      '& .DotLoader': {
        '& > div > div': {
          backgroundColor: localTheme.colors.primary,
        },
      },
    },
    '&:disabled': {
      opacity: 0.7,
      color: localTheme.colors.tertiary,
      backgroundColor: localTheme.colors.primary,
      cursor: 'not-allowed',
    },
    '& .DotLoader': {
      '& > div > div': {
        backgroundColor: localTheme.colors.tertiary,
      },
    },
  },
  quaternary: {
    color: localTheme.colors.primary,
    backgroundColor: localTheme.colors.tertiary,
    border: `1px solid ${localTheme.colors.primary}`,
    '&:hover': {
      color: localTheme.colors.tertiary,
      backgroundColor: localTheme.colors.primary,
      border: `1px solid ${localTheme.colors.primary}`,
      '& .DotLoader': {
        '& > div > div': {
          backgroundColor: localTheme.colors.tertiary,
        },
      },
    },
    '&.is-active': {
      color: localTheme.colors.tertiary,
      backgroundColor: localTheme.colors.primary,
      border: `1px solid ${localTheme.colors.primary}`,
    },
    '&:disabled': {
      opacity: 0.7,
      color: localTheme.colors.primary,
      backgroundColor: localTheme.colors.tertiary,
      cursor: 'not-allowed',
    },
    '& .DotLoader': {
      '& > div > div': {
        backgroundColor: localTheme.colors.primary,
      },
    },
  },
  root: {
    textTransform: 'uppercase',
    display: 'inline-flex',
    borderRadius: '0px',
    padding: '8px 8.5px',
    width: 'auto',
    maxWidth: 160,
    letterSpacing: '1.14px',
    position: 'relative',
    textAlign: 'center',
    textDecoration: 'none',
    fontSize: localTheme.fonts.smallText,
    fontFamily: localTheme.fontFamily.primary,
    fontWeight: 500,
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
    [theme.breakpoints.up('md')]: {
      padding: '9px 18px',
      fontSize: localTheme.fonts.md,
    },
  },
}))
