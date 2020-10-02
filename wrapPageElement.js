import React from 'react'
import PropTypes from 'prop-types'
import { GlobalStyle } from './src/utils/styles'
import Layout from './src/components/Layout'
import ClientOnly from './src/components/ClientOnly'
import './src/utils/app.css'
import { ThemeProvider } from 'emotion-theming'
import { theme } from './src/utils/styles'
import { LocaleProvider } from './src/context/LocaleProvider'

const wrapPageElement = ({ element, props }) => {
  return (
    <LocaleProvider locale={props.pageContext.locale}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ClientOnly>
          <Layout {...props}>{element}</Layout>
        </ClientOnly>
      </ThemeProvider>
    </LocaleProvider>
  )
}

wrapPageElement.propTypes = {
  element: PropTypes.node.isRequired,
  props: PropTypes.object,
  location: PropTypes.object,
  pageContext: PropTypes.node,
  pageContextLocale: PropTypes.node,
}

export default wrapPageElement
