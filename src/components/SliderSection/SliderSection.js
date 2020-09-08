import React from 'react'
import PropTypes from 'prop-types'
import SliderContent from '../Slider'
import { WidthLimiterContainer } from '../Layout/styles'
import { SliderSectionContainer } from './styles'

const SliderSection = ({ children, imgLength }) => {
  return (
    <>
      <SliderSectionContainer>
        <WidthLimiterContainer className="SliderSection__WidthLimiter">
          <SliderContent
            imgLength={imgLength}
            slidesToShow={1}
            slidesToScroll={1}
            autoPlay={true}
            autoplaySpeed={1000}
            customClassName="SliderSection__Slider"
          >
            {children}
          </SliderContent>
        </WidthLimiterContainer>
      </SliderSectionContainer>
    </>
  )
}

SliderSection.propTypes = {
  children: PropTypes.array.isRequired,
  imgLength: PropTypes.number,
}
export default SliderSection
