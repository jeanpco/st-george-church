import styled from '@emotion/styled'

export const HomeIntroContainer = styled.div`
  text-align: center;

  .Home__Intro-link {
    color: ${(props) => props.theme.colors.black};
    font-family: ${(props) => props.theme.fontFamily.secondary};
  }
`
export const HomeIntroContentContainer = styled.div`
  margin-top: 15px;
`

export const HomeIntroTitle = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 24px;

  h3 {
    width: 217px;
  }
`

export const HomeIntroText = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 16px;

  p {
    width: 223px;
  }
`
