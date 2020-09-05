import React from 'react'
import PropTypes from 'prop-types'
import SliderContent from '../Slider'
// import Title from "../Utilities/Title";
import { Desktop, Tablet } from '../Utilities/Media'
import SliderSectionMobile from './SliderSectionMobile'
import { WidthLimiterContainer } from '../Layout/styles'
import { SliderSectionContainer } from './styles'

const SliderSection = ({ children, imgLength }) => {
  return (
    <>
      <Desktop>
        <SliderSectionContainer>
          <WidthLimiterContainer className="SliderSection__WidthLimiter">
            {/* <Title
                            whiteTitle
                            withGreenLine
                            className="SliderSection__Title"
                            type="h3"
                            as="h2"
                        >
                            {title}
                        </Title> */}
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
      </Desktop>
      <Tablet>
        <SliderSectionMobile
          imgLength={imgLength}
          customClassName="SliderSection__Slider_SingleTile_mobile"
        >
          {children}
        </SliderSectionMobile>
      </Tablet>
    </>
  )
}

SliderSection.propTypes = {
  children: PropTypes.array.isRequired,
  imgLength: PropTypes.any,
}
export default SliderSection
