import styled from '@emotion/styled'

export const BlogContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 50px;
  grid-column-gap: 20px;
  padding-bottom: 100px;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
  }
`

export const BlogPostContainer = styled.div`
  .Blog__Slider_Link {
    text-decoration: none;
    color: ${(props) => props.theme.colors.primary};

    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      &:hover {
        color: ${(props) => props.theme.colors.secondary};
      }
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    border-right: 5px solid white;
    border-left: 5px solid white;
    margin-bottom: 50px;

    :hover {
      border-right: 5px solid ${(props) => props.theme.colors.black};
      border-left: 5px solid ${(props) => props.theme.colors.black};
    }

    &:hover + .Blog__Flower-Icon svg {
      color: ${(props) => props.theme.colors.secondary};
      transform: rotate(180deg) scale(0.85);
    }
  }
`
export const BlogPostTitle = styled.div`
  border-top: 2px solid black;
  border-bottom: 1px solid black;
  padding-top: 10px;
  margin-top: 25px;
  padding-bottom: 7px;
  text-align: center;
`
export const BlogPostText = styled.div`
  padding-top: 22px;
  padding: 22px 5px 5px 5px;
  display: flex;
  justify-content: center;
  text-align: center;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    height: 100px;
  }
`

export const BlogPostIcon = styled.div`
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

export const BlogPageHeader = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 90px;
  margin-bottom: 90px;
`
