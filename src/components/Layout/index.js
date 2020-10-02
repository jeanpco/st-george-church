/* eslint no-unused-expressions: 0 */
/* eslint react/destructuring-assignment: 0 */

import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import Header from '../../components/Header/index'
import Footer from '../../components/Footer'
import Fade from 'react-reveal/Fade'

export const Wrapper = styled.div``

const Layout = ({ children, location }) => {
  return (
    <>
      <Wrapper>
        <Header location={location} />
        <Fade delay={500} bottom distance="30px">
          {children}
        </Fade>
        <Footer />
      </Wrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
  location: PropTypes.object,
}

export default Layout
