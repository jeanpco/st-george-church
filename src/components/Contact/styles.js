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

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    display: grid;
    grid-row-gap: 109px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin-top: 129px;
  }
`

export const ContactBodyContainer = styled.div`
  width: 235px;
  position: relative;
  top: 11px;
  left: 12px;

  .Test {
    height: 258;
    /* width: 258px; */
  }
`
export const GalleryIconContainer = styled.div`
  position: absolute;
`

export const ContactItemContainer = styled.div`
  padding-top: 20px;
  text-align: center;
`
