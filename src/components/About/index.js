import React from 'react'
import PropTypes from 'prop-types'

import { AboutContainer, AboutText } from './style'
import Title from '~/components/Utilities/Title'
import Text from '~/components/Utilities/Text'

const About = ({ query }) => {
  return (
    <AboutContainer>
      <Title as="h4" type="heading4" className="About__Drawer-Title">
        {query.title}
      </Title>
      <AboutText>
        <Text as="small" type="smallText500" className="About__Drawer-text">
          {query.text}
        </Text>
      </AboutText>
    </AboutContainer>
  )
}

About.propTypes = {
  query: PropTypes.object,
}

export default About
