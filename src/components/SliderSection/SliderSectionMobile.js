import React from 'react'
import PropTypes from 'prop-types'
import { SliderSectionMobileContainer } from './styles'
import Slider from '../Slider'

const SliderSectionMobile = ({ children, imgLength }) => {
  return (
    <SliderSectionMobileContainer>
      <Slider
        imgLength={imgLength}
        slidesToShow={1}
        slidesToScroll={1}
        customClassName="SliderSection__Slider-mobile"
      >
        {children}
      </Slider>
    </SliderSectionMobileContainer>
  )
}

SliderSectionMobile.propTypes = {
  children: PropTypes.array.isRequired,
  imgLength: PropTypes.number,
}

export default SliderSectionMobile
