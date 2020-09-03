import styled from '@emotion/styled'
import { theme } from '../../utils/styles'

export const SliderSectionMobileContainer = styled.div`
  background-color: ${theme.colors.secondary};
  width: 100%;
  max-width: 600px;

  .slick-slide {
    min-height: 300px;
    max-width: 400px;
  }

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
