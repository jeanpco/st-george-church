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
  margin-top: 24px;
  margin-bottom: 35px;
  display: flex;
  flex-wrap: wrap;

  > * {
    width: 50%;

    @media (min-width: ${(props) => props.theme.breakpoints.s}) {
      width: 33.33%;
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.s}) {
    margin-top: 50px;
    margin-bottom: 100px;
    margin-right: 0;
    padding: 20px;
    margin-right: 30px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    margin-top: 129px;
    margin-bottom: 100px;
    margin-right: 0;
  }
`

export const ContactBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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

        .ContactImageTitle {
          top: 53%;
          opacity: 1;
        }
      }

      svg, p {
        color: ${(props) => props.theme.colors.secondary};
      }
    }
  }

  .Contact__Image-Circle {
    width: 115px;
    height: 115px;
    margin: 0 auto;
    position: relative;
    display: flex;
    align-items: center;

    .ContactImageTitle {
      color: white;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
      transition-property: opacity, transform;
      transition 300ms ease-in-out;
    }

    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      width: 241px;
      height: 241px;
      margin-top: -35px;
    }
  }
`
export const GalleryIconContainer = styled.div`
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    top: 43%;

    :hover {
    }
  }
`
export const ContactImageTitle = styled.div``

export const ContactImageContainer = styled.div`
  position: relative;
`

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
  margin: 0 auto 40px;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    margin: 0 0 95px;
  }
`
