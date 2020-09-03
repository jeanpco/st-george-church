import styled from '@emotion/styled'
import { theme } from '../../utils/styles'

export const SliderStyling = styled.div`
  position: relative;
  margin-bottom: 40px;

  @media (min-width: ${theme.breakpoints.md}) {
    margin-left: 180px;
    margin-top: 100px;
  }

  .slick-arrow,
  .slick-prev,
  .slick-next {
    @media (min-width: ${theme.breakpoints.md}) {
      display: block !important;
    }
  }

  .slick-prev {
    display: block;
    position: absolute;
    margin: 0px;
    padding: 0px;
    left: unset;
    width: 44px;
    height: 44px;
    border: 1px solid white;
    bottom: -44px;
    top: unset;
    right: 100px;
    transform: translate(0, -100%);
    z-index: 1;

    &:hover {
      background-color: ${theme.colors.bg};
      transition: background-color 150ms linear;

      &:before {
        color: ${theme.colors.primaryblue};
      }
    }
  }

  .slick-next {
    display: block;
    position: absolute;
    margin: 0px;
    padding: 0px;
    bottom: 0;
    right: 40px;
    left: unset;
    top: 100%;
    transform: translate(0, -100%);
    width: 44px;
    height: 44px;
    border: 1px solid white;

    &:hover {
      background-color: ${theme.colors.bg};
      transition: background-color 150ms linear;

      &:before {
        color: ${theme.colors.primaryblue};
      }
    }
  }

  .slick-next:before,
  .slick-prev:before {
    font-family: inherit;
    font-size: 18px;
    color: white;
    opacity: 1;
    display: block;
  }

  .slick-slide {
    padding-top: 35px;

    @media (min-width: ${theme.breakpoints.md}) {
      padding-top: 0px;
    }
  }

  .slick-slider {
    display: flex;
    text-align: left;
    margin: 0 auto;
    width: 100%;

    @media (min-width: ${theme.breakpoints.md}) {
      align-items: center;
      justify-content: center;
      text-align: center;
    }
  }
`
