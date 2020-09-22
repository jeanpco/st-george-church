import styled from '@emotion/styled'
// import Icon from '~/components/Icon'

export const GallerySliderStyling = styled.div`
  .slick-arrow,
  .slick-prev,
  .slick-next {
    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      display: block !important;
    }
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
      right: 130px;
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

export const LinearProgressBarContainer = styled.div`
  margin-bottom: 30px;
  margin-top: 40p;
  padding-left: 22px;
  padding-right: 22px;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    display: none !important;
  }

  .MuiLinearProgress-colorPrimary {
    background-color: ${(props) => props.theme.colors.black10};
  }

  .MuiLinearProgress-barColorPrimary {
    background-color: ${(props) => props.theme.colors.black};
  }
`
