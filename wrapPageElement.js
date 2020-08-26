import React from 'react'
import PropTypes from 'prop-types'
import { GlobalStyle } from './src/utils/styles'
import Layout from './src/components/Layout'
import './src/utils/app.css'
import { ThemeProvider } from 'emotion-theming'
import { theme } from './src/utils/styles'
import { LocaleProvider } from './src/context/LocaleProvider'

const wrapPageElement = ({ element, props }) => {
  return (
    <LocaleProvider locale={props.pageContext.locale}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout {...props}>{element}</Layout>
      </ThemeProvider>
    </LocaleProvider>
  )
}

wrapPageElement.propTypes = {
  element: PropTypes.node.isRequired,
  props: PropTypes.any,
  location: PropTypes.any,
  pageContext: PropTypes.any,
  pageContextLocale: PropTypes.any,
}

export default wrapPageElement
