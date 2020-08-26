import React from 'react'
import { Global, css } from '@emotion/core'
import reset from './reset'

export const breakpoints = {
  s: 576,
  m: 768,
  l: 992,
  xl: 1200,
}

export const theme = {
  colors: {
    yello: '#F0E290',
    black: '#000000',
    primary: '#000000',
    secondary: '#CC1D27',
    tertiary: '#ffffff',
    background: '#f6f6f6',
    success: '',
    error: '',
  },
  breakpoints: {
    xxs: '350px',
    xs: '400px',
    s: '600px',
    md: '960px',
    l: '1100px',
    lg: '1280px',
    xl: '1920px',
  },
  fontFamily: {
    primary: 'sans-serif',
    secondary: 'sans-serif',
  },
  fonts: {
    heading1: '45px',
    heading2: '36px',
    heading3: '30px',
    heading4: '24px',
    heading5: '18px',
    subheading1: '20px',
    bigText: '24px',
    body: '18px',
    smallText: '12px',
    cta: '10px',
    links: '10px',
  },
  letterSpacing: {
    heading1: '3px',
    heading2: '3px',
    heading3: '1.75px',
    heading4: '1.71px',
    heading5: '1.92px',
    subheading1: '1px',
    body: '0.2px',
    smallText: '1.42px',
    cta: '1.42px',
    links: '1.42px',
  },
  scale: (value, by = 0.1) => {
    by = 1 - by

    if (value.indexOf(' ') >= 0) {
      value = value.split(' ')
      value = value
        .map((v) => `${Math.floor(+v.split('px')[0] * by)}px`)
        .join(' ')
      return value
    } else {
      value = value.split('px')[0]
      value = value * by
      return `${Math.floor(value)}px`
    }
  },
}

export const GlobalStyle = (props) => (
  <Global
    {...props}
    styles={css`
      ${reset};

      body {
        color: ${theme.colors.black};
        background-color: #ffffff;
        scroll-behavior: smooth;
        overflow: visible;
      }
      html {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        scroll-behavior: smooth;
      }
    `}
  />
)
