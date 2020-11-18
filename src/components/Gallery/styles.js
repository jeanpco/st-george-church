import styled from '@emotion/styled'

export const GalleryUpperImg = styled.div`
  svg {
    width: 80%;

    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      width: 100%;
    }
  }
`

export const GalleryContainer = styled.div`
  padding-top: 20px;
  background: ${(props) => props.theme.colors.blue};
  padding-bottom: 130px;
`

export const GalleryContentContainer = styled.div`
  border-top: 6px solid ${(props) => props.theme.colors.primary};

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    border-top: 12px solid ${(props) => props.theme.colors.black};
  }
`
export const GallerSliderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
`

export const GallerySliderContainer = styled.div`
  margin-top: 0;
  position: relative;

  .allArticles__Gallery-Link {
    font-family: ${(props) => props.theme.fontFamily.secondary};
    display: flex;
    justify-content: center;
    color: black;
    font-size: 18px;

    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      font-size: 24px;
      display: block;
      position: absolute;
      margin: 0px;
      padding: 0px;
      bottom: 0;
      right: 168px;
      left: unset;
      bottom: -73px;
    }
  }

  .Gallery__Slider_Link {
    text-decoration: none;
    color: ${(props) => props.theme.colors.primary};

    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      &:hover {
        color: ${(props) => props.theme.colors.secondary};
      }
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    margin-top: 70px;
  }
`

export const GallerySliderItemsContainer = styled.div`
  text-align: center;
  margin-bottom: 20px;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    border-right: 5px solid ${(props) => props.theme.colors.blue};
    border-left: 5px solid ${(props) => props.theme.colors.blue};
    margin-bottom: 112px;
    :hover {
      border-right: 5px solid ${(props) => props.theme.colors.black};
      border-left: 5px solid ${(props) => props.theme.colors.black};
    }

    &:hover + .Gallery__Flower-Icon svg {
      color: ${(props) => props.theme.colors.secondary};
      transform: rotate(180deg) scale(0.85);
    }
  }
`

export const GallerySliderTitle = styled.div`
  border-top: 2px solid black;
  border-bottom: 1px solid black;
  padding-top: 10px;
  margin-top: 25px;
  padding-bottom: 7px;

  /* possible solution instead of truncate to be removed if not */

  h3 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

export const GallerySliderText = styled.div`
  padding-top: 22px;
  display: flex;
  justify-content: center;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    height: 81px;
  }
`

export const GallerySliderIcon = styled.div`
  text-align: center;

  svg {
    width: 19px;
    color: black;

    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      transition: transform 600ms ease 0s;
      will-change: transform;
      width: 36px;
    }
  }
`

export const GalleryImgText = styled.div`
  position: relative;

  .gallery-upper-text {
    color: white;
    position: absolute;
    z-index: 1;
    right: -4px;
    top: 0;

    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      right: 10px;
      top: 2px;
    }
  }
`
