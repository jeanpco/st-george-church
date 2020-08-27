import React from 'react'
import PropTypes from 'prop-types'
import LanguageSwitcher from '../../LanguageSwitcher/LanguageSwitcher'

const Header = ({ location }) => {
  return (
    <div>
      <LanguageSwitcher location={location} />
    </div>
  )
}

Header.propTypes = {
  location: PropTypes.object.isRequired,
}

export default Header
