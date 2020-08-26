/* eslint no-unused-expressions: 0 */
/* eslint react/destructuring-assignment: 0 */

import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import Header from '../../components/Header/index'

export const Wrapper = styled.div`
  margin: 16px auto;
  padding: 16px;
`

const Layout = ({ children, location }) => {
  return (
    <>
      <Wrapper>
        <Header location={location} />
        {children}
      </Wrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
  location: PropTypes.object,
}

export default Layout
