import styled from '@emotion/styled'
import Title from '../Utilities/Title'

export const AncherContainer = styled.div`
  margin-top: 102px;
`
export const AnchorTitle = styled(Title)`
  padding-bottom: 16px;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    text-decoration: underline;
  }
`
export const AnchorContent = styled.div`
  border-top: 6px solid ${(props) => props.theme.colors.black};
  border-bottom: 6px solid ${(props) => props.theme.colors.black};
  padding-top: 13px;
  padding-bottom: 30px;
`

export const AnchorLinks = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 9px;

  .anchor_links {
    display: flex;
    /* padding-bottom: 10px; */
    color: ${(props) => props.theme.colors.black};
    font-family: ${(props) => props.theme.fontFamily.primary};
    font-size: ${(props) => props.theme.fonts.body};
    text-decoration: none;
  }
`

export const AnchorIconLink = styled.div`
  padding-right: 21px;
`

export const AnchorIconTitle = styled.div`
  display: flex;
  justify-content: space-between;
`
