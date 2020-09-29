import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { ImageContainer, ImageContent } from './styles'
import IntersectionVisible from 'react-intersection-visible'

const AnimatedImage = ({ children, className }) => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <IntersectionVisible
      onHide={() => setIsVisible(false)}
      onShow={() => setIsVisible(true)}
      className={className}
    >
      <ImageContainer>
        <ImageContent isVisible={isVisible}>{children}</ImageContent>
      </ImageContainer>
    </IntersectionVisible>
  )
}

AnimatedImage.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
}

export default AnimatedImage
