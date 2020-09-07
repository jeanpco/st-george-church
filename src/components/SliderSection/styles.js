import styled from '@emotion/styled'

export const SliderSectionContainer = styled.div`
  .SliderSection__WidthLimiter {
    padding-right: 0;
    padding-left: 0;
    max-width: 1444px;
  }

  .SliderSection__Slider {
    .slick-prev {
      display: none !important;
      /* position: relative; */
      /* top: 546px;
      bottom: unset;
      right: 74px; */
    }

    .slick-next {
      display: none !important;
      /* top: 546px;
      bottom: unset;
      right: 15px; */
    }

    .slick-slider {
      /* position: unset; */
    }
  }

  .slick-list {
    img {
      height: 624px;
    }
  }
`

export const SliderSectionMobileContainer = styled.div`
  .slick-track {
    margin-left: 0%;
  }

  .slick-list {
    padding: 0px !important;
  }

  .SliderSection__CTAButton {
    margin-top: 10px;
  }
`
