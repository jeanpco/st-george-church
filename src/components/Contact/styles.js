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
  display: grid;
  grid-template-columns: 1fr 1fr;

  cursor: pointer;
  margin-top: 24px;
  margin-bottom: 100px;
  grid-row-gap: 109px;

  @media (min-width: ${(props) => props.theme.breakpoints.s}) {
    display: grid;
    grid-row-gap: 109px;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 129px;
    grid-column-gap: 50px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    display: grid;
    grid-row-gap: 109px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin-top: 129px;
    grid-column-gap: 50px;
  }
`

export const ContactBodyContainer = styled.div`
  position: relative;
  top: 11px;
  left: 12px;
`
export const GalleryIconContainer = styled.div`
  position: absolute;
  z-index: 1;

  :hover {
    svg {
      background: linear-gradient(
          0deg,
          rgba(204, 29, 39, 0.8),
          rgba(204, 29, 39, 0.8)
        ),
        url(.jpg);
      border-radius: 50%;
      /* filter: blur(1px); */
      color: ${(props) => props.theme.colors.secondary};
    }
  }
`

export const ContactItemContainer = styled.div`
  padding-top: 20px;
  text-align: center;
`
