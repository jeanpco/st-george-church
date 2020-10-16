import styled from '@emotion/styled'

export const GalleryContainer = styled.div`
  padding-top: 20px;
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
    margin-bottom: 159px;
    margin-top: 70px;
  }
`

export const GallerySliderItemsContainer = styled.div`
  text-align: center;
  margin-bottom: 20px;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    border-right: 5px solid white;
    border-left: 5px solid white;
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

  h3 {
    white-space: nowrap;
  }
`

export const GallerySliderText = styled.div`
  padding-top: 22px;
  display: flex;
  justify-content: center;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    height: 81px;
  }

  p {
    padding: 0 40px;
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
