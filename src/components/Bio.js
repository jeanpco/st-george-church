import React from 'react'
import PropTypes from 'prop-types'

const Bio = ({ settings }) => (
  <div>
    <img
      src={settings.author_avatar.imgix_url}
      alt={settings.author_name}
    />
    <div dangerouslySetInnerHTML={{ __html: settings.author_bio }} />
  </div>
)

Bio.propTypes = {
  settings: PropTypes.object,
}

export default Bio