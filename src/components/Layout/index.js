/* eslint no-unused-expressions: 0 */
/* eslint react/destructuring-assignment: 0 */

import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import Header from '../../components/Header/index'
import Footer from '../../components/Footer'
import Fade from 'react-reveal/Fade'

export const Wrapper = styled.div``

function scrollTo() {
  const links = document.querySelectorAll('.scroll')
  links.forEach((each) => (each.onclick = scrollAnchors))
}

function scrollAnchors(e, respond = null) {
  const distanceToTop = (el) => Math.floor(el.getBoundingClientRect().top)
  e.preventDefault()
  var targetID = respond
    ? respond.getAttribute('href')
    : this.getAttribute('href')

  targetID = targetID.replace('/', '')
  const targetAnchor = document.querySelector(targetID)

  if (!targetAnchor) return
  const originalTop = distanceToTop(targetAnchor)
  window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' })
  const checkIfDone = setInterval(function () {
    const atBottom =
      window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2
    if (distanceToTop(targetAnchor) === 0 || atBottom) {
      targetAnchor.tabIndex = '-1'
      targetAnchor.focus()
      window.history.pushState('', '', targetID)
      clearInterval(checkIfDone)
    }
  }, 100)
}

const Layout = ({ children, location }) => {
  useEffect(() => {
    scrollTo()
  }, [])

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
