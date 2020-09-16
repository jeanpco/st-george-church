import React from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { GallerySliderStyling } from './styles'
import Icon from '~/components/Icon'

const GallerySliderContent = ({ children, className }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  }

  return (
    <GallerySliderStyling className={className ? className : ''}>
      <Slider nextArrow={<Icon type="search" />} {...settings}>
        {children}
      </Slider>
    </GallerySliderStyling>
  )
}

GallerySliderContent.propTypes = {
  children: PropTypes.array.isRequired,
  className: PropTypes.string,
}

export default GallerySliderContent
