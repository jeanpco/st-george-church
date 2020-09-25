import styled from '@emotion/styled'

export const GalleryContainer = styled.div`
  padding-top: 24px;
`

export const GalleryContentContainer = styled.div`
  border-bottom: 6px solid ${(props) => props.theme.colors.black};

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    border-bottom: 12px solid ${(props) => props.theme.colors.black};
  }
`
export const GallerSliderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const GallerySliderContainer = styled.div`
  margin-top: 0;
  margin-bottom: 50px;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: 100%;
    margin-bottom: 180px;
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
      color: ${(props) => props.theme.colors.secondary};
      border-right: 5px solid ${(props) => props.theme.colors.black};
      border-left: 5px solid ${(props) => props.theme.colors.black};
    }
  }
`

export const GalleryItemContent = styled.div`
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    :hover {
      svg {
        color: ${(props) => props.theme.colors.secondary};
      }
    }
  }
`

export const GallerSliderTitle = styled.div`
  border-top: 2px solid black;
  border-bottom: 1px solid black;
  padding-top: 10px;
  margin-top: 25px;
  padding-bottom: 7px;
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
    width: 21px;
    color: black;

    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      width: 36px;
    }
  }
`
