import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { GallerySliderStyling, LinearProgressBarContainer } from './styles'
import ArrowLeft from '~/components/GalleryArrow/ArrowLeft'
import ArrowRight from '~/components/GalleryArrow/ArrowRight'
import { LinearProgress } from '@material-ui/core'

const GallerySliderContent = ({
  children,
  className,
  slidesToShow,
  slidesToScroll,
  galleryImageLength,
  infinite,
}) => {
  const settings = {
    dots: false,
    infinite: infinite,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,

    afterChange: () =>
      setsliderStateCount({
        ...sliderStateCount,
        count: sliderStateCount.count + 1,
      }),
    beforeChange: (current, next) => {
      setSliderStateIndex({ ...sliderStateIndex, index: next })
    },
  }

  const [sliderStateIndex, setSliderStateIndex] = useState({
    index: 0,
  })
  const [sliderStateCount, setsliderStateCount] = useState({
    count: 0,
  })

  useEffect(() => {
    if (sliderStateCount.count >= galleryImageLength) {
      setsliderStateCount({ ...sliderStateCount, count: 0 })
    }
  }, [])

  const normalise = (value) => ((value - 0) * 100) / (galleryImageLength - 1.4)

  return (
    <GallerySliderStyling className={className ? className : ''}>
      <Slider
        prevArrow={<ArrowLeft />}
        nextArrow={<ArrowRight />}
        {...settings}
      >
        {children}
      </Slider>

      <LinearProgressBarContainer>
        <LinearProgress
          color="primary"
          variant="determinate"
          value={normalise(sliderStateIndex.index)}
        />
      </LinearProgressBarContainer>
    </GallerySliderStyling>
  )
}

GallerySliderContent.propTypes = {
  children: PropTypes.array.isRequired,
  className: PropTypes.string,
  slidesToShow: PropTypes.number,
  slidesToScroll: PropTypes.number,
  galleryImageLength: PropTypes.number,
  infinite: PropTypes.bool,
}

export default GallerySliderContent
