import styled from '@emotion/styled'

export const GallerySliderStyling = styled.div`
  .slick-arrow,
  .slick-prev,
  .slick-next {
    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
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
    bottom: -44px;
    top: unset;
    right: 100px;
    transform: translate(0, -100%);
    z-index: 1;
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
  }

  .slick-next:before,
  .slick-prev:before {
    font-family: inherit;
    font-size: 18px;
    color: white;
    opacity: 1;
    display: block;

    background: black;
  }

  .slick-slide {
    padding-top: 35px;
    min-width: 1px;

    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      padding-top: 0px;
    }
  }

  .slick-slider {
    display: flex;
    text-align: left;
    margin: 0 auto;
    width: 100%;

    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      align-items: center;
      justify-content: center;
      text-align: center;
    }
  }
`
