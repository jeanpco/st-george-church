import styled from '@emotion/styled'
// import Icon from '~/components/Icon'

export const GallerySliderStyling = styled.div`
  margin-right: -22px;
  .slick-arrow,
  .slick-prev,
  .slick-next {
    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      display: block !important;
    }
  }

  /* .slick-slider .slick-track,
  .slick-slider .slick-list {
    transform: none;
    width: 100%;
  } */

  .slick-slider .slick-list {
    width: 100%;
  }

  .slick-prev {
    display: none;

    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      display: block;
      position: absolute;
      margin: 0px;
      padding: 0px;
      left: unset;
      width: 44px;
      height: 44px;
      bottom: -44px;
      top: unset;
      right: 101px;
      transform: translate(0, 100%);
      z-index: 1;
    }
  }

  .slick-next {
    display: none;

    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      display: block;
      position: absolute;
      margin: 0px;
      padding: 0px;
      bottom: 0;
      right: 40px;
      left: unset;
      top: 100%;
      transform: translate(0, 100%);
      width: 44px;
      height: 44px;
    }
  }

  .slick-next:before,
  .slick-prev:before {
    display: none;
  }

  .slick-slide {
    padding-top: 35px;
    min-width: 1px;
    padding-right: 20px;
    cursor: pointer;

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

export const GalleryLinearProgressBarContainer = styled.div`
  margin-bottom: 26px;
  margin-top: 25px;
  padding-left: 10px;
  margin-right: 18px;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    display: none !important;
    margin-right: 0;
  }

  .MuiLinearProgress-colorPrimary {
    background-color: ${(props) => props.theme.colors.black10};
  }

  .MuiLinearProgress-barColorPrimary {
    background-color: ${(props) => props.theme.colors.black};
  }
`
