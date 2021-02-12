import React from 'react'
import PropTypes from 'prop-types'
import { Link as GatsbyLink } from 'gatsby'
import LocaleContext from '../../context/LocaleProvider'
import locales from '../../../config/i18n'
import styled from '@emotion/styled'

const Link = ({ to, ...props }) => {
  const { locale } = React.useContext(LocaleContext)
  const isIndex = to === '/'
  const path = locales[locale]?.default
    ? to
    : `${locales[locale]?.path}${isIndex ? '' : `${to}`}`

  return (
    <GatsbyLink {...props} to={locales[locale]?.default ? path : `/${path}`} />
  )
}

Link.propTypes = {
  to: PropTypes.string.isRequired,
}

const LocalizedLink = styled(Link)`
  display: inline-block;
  position: relative;
  text-decoration: none;

  &:hover {
    &::before,
    &::after {
      background: ${(props) => props.theme.colors.black};
    }

    &::after {
      transform: scaleX(1);
    }

    &::before {
      transform: scaleX(0);
    }
  }

  &::before,
  &::after {
    content: '';
    width: 100%;
    height: 2px;
    position: absolute;
    left: 0;
    bottom: 0;
    transition: transform 350ms ease;
    transform-origin: right;
    will-change: transform;
    background: ${(props) => props.theme.colors.black};
  }

  &::after {
    transform: scaleX(0);
    transition-delay: 400ms;
    transform-origin: left;
  }
`

export default LocalizedLink
