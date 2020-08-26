import React from 'react'
import IndexLayout from '../components/pages/Home'
import PropTypes from 'prop-types'

const indexLayout = ({ location }) => {
  return <IndexLayout location={location} />
}

indexLayout.propTypes = {
  location: PropTypes.any,
}
export default indexLayout
