import React from 'react'
import { WidthLimiterContainer } from '../Layout/styles'
import GallerySliderContent from '../GallerySlider'
import { GalleryContainer } from './styles'

const Gallery = () => {
  return (
    <GalleryContainer>
      <WidthLimiterContainer>
        <h1>Hello</h1>
        <GallerySliderContent>
          <h1>Slide 1</h1>
          <h1>Slide 2</h1>
          <h1>Slide 3</h1>
          <h1>Slide 4</h1>
        </GallerySliderContent>
      </WidthLimiterContainer>
    </GalleryContainer>
  )
}

export default Gallery
