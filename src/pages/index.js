import React from 'react'
import IndexLayout from '../components/pages/Home'
import PropTypes from 'prop-types'

const Index = ({ location }) => {
  return <IndexLayout location={location} />
}

Index.propTypes = {
  location: PropTypes.object,
}
export default Index
