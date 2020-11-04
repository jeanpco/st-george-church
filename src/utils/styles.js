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
    yellow: '#F0E290',
    blue: '#D3FAFF',
    black: '#000000',
    black50: 'rgba(0, 0, 0, 0.8)',
    black20: 'rgba(0, 0, 0, 0.6)',
    black10: 'rgba(0, 0, 0, 0.4)',
    red50: 'rgba(204, 29, 39, 0.8)',
    red20: 'rgba(204, 29, 39, 0.6)',
    red10: ' rgba(204, 29, 39, 0.4)',
    primary: '#000000',
    secondary: '#CC1D27',
    tertiary: '#ffffff',
    background: '#f6f6f6',
  },
  maxWidthDesktop: '1440px',
  maxWidthMobile: '600px',
  maxWidthText: '720px',
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
    primary: 'francesco-regular',
    secondary: 'protogrotesk-regular',
    tertiary: 'Arial',
  },
  fonts: {
    heading1: '48px',
    heading2: '45px',
    heading3: '36px',
    heading4: '30px',
    heading5: '24px',
    heading6: '18px',
    heading7: '14px',
    overline: '12px',
    body: '18px',
    bigText: '24px',
    smallText: '12px',
    mediumText: '14px',
    quote: '43px',
    links: '10px',
  },
  letterSpacing: {
    heading1: '3px',
    heading2: '2px',
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
