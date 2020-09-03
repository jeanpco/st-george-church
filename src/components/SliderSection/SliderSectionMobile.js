import React from 'react'
import PropTypes from 'prop-types'
import { SliderSectionMobileContainer } from './styles'
import SliderContent from '../Slider'

const SliderSectionMobile = ({ children }) => {
  return (
    <SliderSectionMobileContainer>
      <SliderContent
        slidesToShow={1}
        slidesToScroll={1}
        customClassName="SliderSection__Slider-mobile"
        centerModeStyle
      >
        {children}
      </SliderContent>
    </SliderSectionMobileContainer>
  )
}

SliderSectionMobile.propTypes = {
  children: PropTypes.array.isRequired,
}

export default SliderSectionMobile
