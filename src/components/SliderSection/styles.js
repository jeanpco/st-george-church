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
      /* keeping the arrows just in case the figma changes */
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
      position: unset;
    }
  }

  .slick-slide {
    min-width: 1px;
  }
`
