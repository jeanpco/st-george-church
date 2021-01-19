import React from 'react'
import PropTypes from 'prop-types'
import { GlobalStyle } from './src/utils/styles'
import Layout from './src/components/Layout'
import ClientOnly from './src/components/ClientOnly'
import './src/utils/app.css'
import { ThemeProvider } from 'emotion-theming'
import { theme } from './src/utils/styles'
import { LocaleProvider } from './src/context/LocaleProvider'
import ProtogroteskWeb from './static/fonts/proto-grotesk/protogroteskweb-regular.woff2'
import FrancescoWeb from './static/fonts/francesco/francescoweb-regular.woff'
import { Helmet } from 'react-helmet'

const wrapPageElement = ({ element, props }) => {
  return (
    <>
      <Helmet>
        <link
          rel="preload"
          as="font"
          href={ProtogroteskWeb}
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="font"
          href={FrancescoWeb}
          type="font/woff"
          crossOrigin="anonymous"
        />
      </Helmet>
      <LocaleProvider locale={props.pageContext.locale}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <ClientOnly>
            <Layout {...props}>{element}</Layout>
          </ClientOnly>
        </ThemeProvider>
      </LocaleProvider>
    </>
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
