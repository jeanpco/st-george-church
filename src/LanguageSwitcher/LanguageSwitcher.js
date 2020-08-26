import React from 'react'
import { Link } from 'gatsby'
import LocaleContext from '../context/LocaleProvider'
import PropTypes from 'prop-types'

const LocaleComponent = ({ location }) => {
  const lang = React.useContext(LocaleContext)
  const i18n = lang.i18n[lang.locale]
  return (
    <>
      {i18n.locale === 'en-ca' ? (
        <Link
          to={`/fr${
            location.pathname.includes('/en')
              ? location.pathname.replace('/en', '')
              : location.pathname
          }`}
          className="Header__LanguageSwitcher-button"
        >
          FR
        </Link>
      ) : i18n.locale === 'fr-ca' ? (
        <Link to="/" className="Header__LanguageSwitcher-button">
          EN
        </Link>
      ) : (
        ''
      )}
    </>
  )
}

LocaleComponent.propTypes = {
  location: PropTypes.object,
}
export default LocaleComponent
