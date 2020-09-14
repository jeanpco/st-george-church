import styled from '@emotion/styled'
import Title from '../Utilities/Title'

export const AncherContainer = styled.div`
  margin-top: 102px;
`
export const AnchorTitle = styled(Title)`
  padding-bottom: 16px;
`
export const AnchorContent = styled.div`
  border-top: 6px solid ${(props) => props.theme.colors.black};
  border-bottom: 6px solid ${(props) => props.theme.colors.black};
  padding-top: 13px;
  padding-bottom: 30px;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    padding-bottom: 109px;
  }
`

export const AnchorLinksMob = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 9px;

  .anchor_links {
    display: flex;
    color: ${(props) => props.theme.colors.black};
    font-family: ${(props) => props.theme.fontFamily.primary};
    font-size: ${(props) => props.theme.fonts.body};
    text-decoration: none;
  }
`

export const AnchorLinks = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 9px;
  padding-right: 82px;
  align-items: center;

  .anchor_links {
    display: flex;
    color: ${(props) => props.theme.colors.black};
    font-family: ${(props) => props.theme.fontFamily.primary};
    font-size: ${(props) => props.theme.fonts.body};
    text-decoration: none;

    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      font-size: ${(props) => props.theme.fonts.heading4};
    }
  }
`

export const AnchorIconLink = styled.div`
  padding-right: 21px;
`

export const AnchorIconTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const AnchorLinksContainerDes = styled.div`
  /* width: 35%; */
`

export const AnchorContainerDes = styled.div`
  display: flex;
  padding-top: 82px;
`

export const AnchorContentDes = styled.div`
  padding-left: 43px;
  border-left: 2px solid ${(props) => props.theme.colors.black};
  width: 60%;
  max-height: 643px;
  min-height: 643px;
`
export const AnchorItemsDes = styled.div`
  height: calc(100% - 50px);
  overflow: auto;
  img {
    width: 100%;
  }
`

export const AnchorItemsText = styled.div`
  text-align: left;
  padding-top: 39px;

  p::first-letter {
    color: ${(props) => props.theme.colors.secondary};
    font-family: ${(props) => props.theme.fontFamily.primary};
    font-size: ${(props) => props.theme.fonts.heading1};
    text-transform: uppercase;
    float: left;
    padding-right: 7px;
  }
`
