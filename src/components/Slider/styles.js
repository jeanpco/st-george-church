import styled from '@emotion/styled'

export const SliderStyling = styled.div`
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: 560px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    width: 714px;
  }

  .slick-arrow,
  .slick-prev,
  .slick-next {
    display: none !important;
    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      /* display: block !important; */
      display: none;
    }
  }

  .slick-prev {
    display: none !important;
    /* display: block; */
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
      background-color: ${(props) => props.theme.colors.bg};
      transition: background-color 150ms linear;

      &:before {
        color: ${(props) => props.theme.colors.primaryblue};
      }
    }
  }

  .slick-next {
    display: none !important;
    /* display: block; */
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
      background-color: ${(props) => props.theme.colors.bg};
      transition: background-color 150ms linear;

      &:before {
        color: ${(props) => props.theme.colors.primaryblue};
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
  margin-top: 5px;

  .MuiLinearProgress-colorPrimary {
    background-color: ${(props) => props.theme.colors.red10};
  }

  .MuiLinearProgress-barColorPrimary {
    background-color: ${(props) => props.theme.colors.secondary};
  }
`
