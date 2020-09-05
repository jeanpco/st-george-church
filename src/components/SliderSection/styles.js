import styled from '@emotion/styled'
import { theme } from '../../utils/styles'

export const SliderSectionContainer = styled.div`
  /* background-color: ${theme.colors.primaryblue};
  margin: 0 auto;
  padding: 100px 0;
  position: relative; */

  .SliderSection__WidthLimiter {
    /* padding-right: 100px;
    padding-left: 100px;
    margin: 0 auto; */
  }

  .SliderSection__Slider {
    /* margin: 0 auto;
    min-height: 500px;
    display: flex;
    align-items: center;
    position: relative; */

    .slick-prev {
      /* top: 546px;
      bottom: unset;
      right: 74px; */
    }

    .slick-next {
      /* top: 546px;
      bottom: unset;
      right: 15px; */
    }

    .slick-slider {
      /* position: unset; */
    }

    .slick-slide > div {
      /* padding-right: 15px; */
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

  /* .slick-slide > div {
    margin-right: 20px;
    border: 1px solid ${theme.colors.primaryblue};
    display: block;
  } */

  .SliderSection__CTAButton {
    margin-top: 10px;
  }
`
