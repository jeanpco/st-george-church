import styled from '@emotion/styled'

export const TeamContainer = styled.div`
  border-top: 6px solid ${(props) => props.theme.colors.primary};

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    border-top: 12px solid ${(props) => props.theme.colors.black};
  }
`

export const TeamHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
`

export const TeamContentContainer = styled.div`
  cursor: pointer;
  margin-top: 50px;

  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (min-width: ${(props) => props.theme.breakpoints.s}) {
    margin-right: 0;
    margin-right: 30px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-row-gap: 80px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    margin-top: 137px;
    margin-right: 0;
    padding: 0;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    margin-top: 170px;
    margin-right: 0;
    padding: 0;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-row-gap: 110px;
  }
`

export const ContactBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    p {
      position: relative;
      margin-top: 10px;
    }

    p::after {
      content: '';
      width: 24px;
      height: 6px;
      top: 111%;
      left: 42%;
      right: 50%;
      position: absolute;
      background: #cc1d27;
      opacity: 0;
      transform: translateY(0);
    }
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

      svg,
      p {
        color: ${(props) => props.theme.colors.secondary};

        &::after {
          content: '';
          width: 24px;
          height: 6px;
          top: 111%;
          left: 42%;
          right: 50%;
          position: absolute;
          background: #cc1d27;
          transform: translateY(5px);
          transition: transform 0.3s ease-in, opacity 0.3s ease;
          opacity: 1;
        }
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
    border-radius: 100%;
    overflow: hidden;

    .ContactImageTitle {
      color: white;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
      transition-property: opacity, transform;
      transition: 300ms ease-in-out;
    }

    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      width: 200px;
      height: 200px;
      margin-top: -35px;
    }

    @media (min-width: ${(props) => props.theme.breakpoints.l}) {
      width: 241px;
      height: 241px;
      margin-top: -35px;
    }
  }
`
export const GalleryIconContainer = styled.div`
  position: absolute;
  width: 100%;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  svg {
    width: 100%;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    top: 41%;
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
    max-width: 174px;
  }
`

export const ContactContainer = styled.div`
  margin-bottom: 40px;
`
