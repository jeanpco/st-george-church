import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { SliderStyling, LinearProgressBarContainer } from './styles'
import { LinearProgress } from '@material-ui/core'

const SliderContent = ({
  children,
  className,
  imgLength,
  slidesToScroll,
  slidesToShow,
  autoplay,
}) => {
  const [sliderStateIndex, setSliderStateIndex] = useState({
    index: 0,
  })
  const [sliderStateCount, setsliderStateCount] = useState({
    count: 0,
  })

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    autoplay: autoplay,
    autoplaySpeed: 5000,
    afterChange: () =>
      setsliderStateCount({
        ...sliderStateCount,
        count: sliderStateCount.count + 1,
      }),
    beforeChange: (current, next) => {
      setSliderStateIndex({ ...sliderStateIndex, index: next })
    },
  }

  //logic to reset counts after going through all the pictures
  useEffect(() => {
    if (sliderStateCount.count >= imgLength) {
      setsliderStateCount({ ...sliderStateCount, count: 0 })
    }
  }, [])

  const normalise = (value) => ((value - 0) * 100) / (imgLength - 1)

  return (
    <SliderStyling className={className ? className : ''}>
      <Slider {...settings}>{children}</Slider>
      <LinearProgressBarContainer>
        <LinearProgress
          color="primary"
          variant="determinate"
          value={normalise(sliderStateIndex.index)}
        />
      </LinearProgressBarContainer>
    </SliderStyling>
  )
}

SliderContent.propTypes = {
  children: PropTypes.array.isRequired,
  className: PropTypes.string,
  imgLength: PropTypes.number,
  slidesToScroll: PropTypes.number,
  slidesToShow: PropTypes.number,
  autoplay: PropTypes.bool,
}

export default SliderContent
