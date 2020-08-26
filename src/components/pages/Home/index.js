import React from 'react'
import LocaleContext from '../../../context/LocaleProvider'

const IndexLayout = () => {
  const lang = React.useContext(LocaleContext)
  const i18n = lang.i18n[lang.locale]

  let title = ''

  if (i18n.locale === 'en-ca') {
    return (title = 'English')
  }

  return <div>{title}</div>
}

export default IndexLayout
