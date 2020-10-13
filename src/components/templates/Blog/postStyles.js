import styled from '@emotion/styled'

// import { theme } from './src/utils/styles'

export const PostContainer = styled.div`
  width: 100%;
  margin-top: 80px;
`

export const PostContentContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const PostItemsContainer = styled.div`
  img {
    background-size: cover;
    background-position: center center;
    width: 75%;
  }

  h2 {
    margin-bottom: 50px;
    text-align: center;
  }

  p {
    text-align: center;
    margin-top: 50px;
  }
`
