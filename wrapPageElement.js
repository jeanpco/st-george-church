import React from 'react'
import PropTypes from 'prop-types'
import { GlobalStyle } from './src/utils/styles'
import Layout from './src/components/Layout'
import './src/utils/app.css'
import { ThemeProvider } from 'emotion-theming'

const wrapPageElement = ({ element, props }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout {...props}>{element}</Layout>
    </ThemeProvider>
  )
}

wrapPageElement.propTypes = {
  element: PropTypes.node.isRequired,
  props: PropTypes.object,
  location: PropTypes.object,
}

export default wrapPageElement
