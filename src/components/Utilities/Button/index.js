import React from 'react'
import PropTypes from 'prop-types'
import { navigateTo } from 'gatsby'
import { Button as ButtonMaterial } from '@material-ui/core'
import { buttonUseStyles } from './styles'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { css } from '@emotion/core'
import DotLoader from 'react-spinners/DotLoader'
import { theme as localTheme } from '~/utils/styles'

const override = css``

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      label: {},
    },
  },
})

const Button = ({
  children,
  buttonStyle = 'primary',
  isLoading = false,
  className,
  to,
  href,
  style,
  type,
  disabled,
  clickHandler = () => {},
}) => {
  const classes = buttonUseStyles()
  const buttonProps = {
    children,
    type: type === 'submit' ? 'submit' : 'button',
    style: style ? style : null,
    className: `Button ${classes.root} ${className ? className : ''} ${
      classes[buttonStyle]
    }`,
  }

  return (
    <ThemeProvider theme={theme}>
      <ButtonMaterial
        disabled={disabled}
        role="button"
        {...buttonProps}
        onClick={to ? () => navigateTo(to ? to : '/') : clickHandler}
        href={href ? href : ''}
      >
        {children}
        {isLoading ? (
          <div className="DotLoader">
            <DotLoader
              css={override}
              size={15}
              color={localTheme.colors.tertiary}
              loading={isLoading}
            />
          </div>
        ) : (
          ''
        )}
      </ButtonMaterial>
    </ThemeProvider>
  )
}

Button.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  to: PropTypes.string,
  buttonStyle: PropTypes.oneOf([
    'primary',
    'secondary',
    'tertiary',
    'quaternary',
  ]),
  style: PropTypes.object,
  href: PropTypes.string,
  type: PropTypes.string,
  clickHandler: PropTypes.func,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
}

export default Button
