import styled from '@emotion/styled'

export const TeamContainer = styled.div`
  margin-top: 13px;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    margin-top: 27px;
  }
`

export const TeamHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const TeamContentContainer = styled.div`
  cursor: pointer;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 30px;
  margin-top: 24px;
  margin-bottom: 35px;
  grid-row-gap: 31px;
  padding-left: 7px;

  @media (min-width: ${(props) => props.theme.breakpoints.s}) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 50px;
    margin-bottom: 100px;
    margin-right: 0;
    padding: 20px;
    grid-row-gap: 100px;
    margin-right: 30px;
    grid-column-gap: 44px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 129px;
    margin-bottom: 100px;
    margin-right: 0;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`

export const ContactBodyContainer = styled.div`
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    :hover {
      .Contact__Image-Circle {
        background: linear-gradient(
            0deg,
            rgba(204, 29, 39, 0.8),
            rgba(204, 29, 39, 0.8)
          ),
          url(.jpg);

        border-radius: 50%;
        opacity: 1 !important;

        h2 {
          display: inline;
        }
      }
    }
  }

  .Contact__Image-Circle {
    width: 115px;
    height: 115px;
    position: relative;
    display: flex;
    align-items: center;

    h2 {
      color: white;
      display: none;
      padding-left: 65px;
    }

    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      width: 241px;
      height: 241px;
    }
  }
`
export const GalleryIconContainer = styled.div`
  position: absolute;
  z-index: 1;
  transform: translate(-8px, -8px);

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    :hover {
      svg {
        color: ${(props) => props.theme.colors.secondary};
      }
    }
  }
`
export const ContactImageTitle = styled.div``

export const ContactItemContainer = styled.div`
  padding-top: 20px;
  text-align: center;
  max-width: 111px;

  @media (min-width: ${(props) => props.theme.breakpoints.s}) {
    max-width: 116px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    max-width: 243px;
  }
`

export const ContactContainer = styled.div`
  margin: 0 auto;
`
