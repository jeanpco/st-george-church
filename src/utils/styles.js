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
    peach: '#FAC2A5',
    peach50: 'rgba(250, 194, 165, 0.5)',
    peach20: 'rgba(250, 194, 165, 0.2)',
    black: '#000000',
    black50: 'rgba(32, 32, 32, 0.5)',
    black20: 'rgba(32, 32, 32, 0.2)',
    black10: 'rgba(32, 32, 32, 0.1)',
    black5: 'rgba(32, 32, 32, 0.05)',
    gray: '#979797',
    primary: '#202020',
    secondary: '#FAC2A5',
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
    primary: 'Azo Sans',
  },
  fonts: {
    heading1: '60px',
    heading2: '50px',
    heading3: '35px',
    heading4: '20px',
    heading5: '16px',
    subheading1: '20px',
    bigText: '18px',
    body: '12px',
    smallText: '10px',
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
        .map(v => `${Math.floor(+v.split('px')[0] * by)}px`)
        .join(' ')
      return value
    } else {
      value = value.split('px')[0]
      value = value * by
      return `${Math.floor(value)}px`
    }
  },
}

export const GlobalStyle = props => (
  <Global
    {...props}
    styles={css`
      ${reset};

      body {
        margin: 0;
        font-family: 'Azo Sans';
        color: #202020;
        margin-top: 84px;

        @media (min-width: ${theme.breakpoints.s}) {
          margin-top: 129px;
        }

        @media (min-width: ${theme.breakpoints.md}) {
          margin-top: 186px;
        }
      }
      html {
        font-family: sans-serif;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
      }
    `}
  />
)