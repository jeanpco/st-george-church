import styled from '@emotion/styled'
import { keyframes, css } from '@emotion/core'

const reveal1 = () => css`
  ${keyframes`
    0% {
      transform: scaleX(0);
    }
    100% {
      transform: scaleX(1);
    }
  `} 0.7s ease-in-out forwards;
`

const reveal2 = () => css`
  ${keyframes`
    0% {
      transform: scaleX(0);
    }
    100% {
      transform: scaleX(1);
    }
  `} 0.7s reverse forwards;
`

export const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
`

export const ImageContent = styled.div`
  background: ${(props) => props.theme.colors.secondary};
  transform: scaleX(0);
  transform-origin: left;
  animation: ${(props) => (props.isVisible ? reveal1 : 'initial')};
  position: relative;
  height: 100%;

  &::before {
    content: '';
    background: ${(props) => props.theme.colors.secondary};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    animation: ${(props) => (props.isVisible ? reveal2 : 'initial')};
    animation-delay: 0.5s;
    transform-origin: right;
    z-index: 1;
  }
`
