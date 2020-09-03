import React from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { SliderStyling } from './styles'

const SliderContent = ({
  children,
  customClassName,
  slidesToShow,
  slidesToScroll,
  centerModeStyle,
}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    centerMode: centerModeStyle ? true : false,
  }

  return (
    <SliderStyling className={customClassName ? customClassName : ''}>
      <Slider {...settings}>{children}</Slider>
    </SliderStyling>
  )
}

SliderContent.propTypes = {
  children: PropTypes.array.isRequired,
  slidesToScroll: PropTypes.number.isRequired,
  slidesToShow: PropTypes.number.isRequired,
  withQuote: PropTypes.bool,
  ctaButton: PropTypes.any,
  customClassName: PropTypes.any,
  centerModeStyle: PropTypes.any,
  cityLanding: PropTypes.any,
}

export default SliderContent
