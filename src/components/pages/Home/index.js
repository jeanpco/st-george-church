import React from 'react'
import SliderSectionMobile from '../../SliderSection/SliderSectionMobile'
import PropTypes from 'prop-types'

const IndexLayout = ({ data }) => {
  const images = []
  const sliderImages = data.homepage.nodes[1].metadata.slider_images.map(
    (info) => {
      Object.values(info).map((img) => {
        images.push(img.url)
      })
    }
  )

  console.log(images)

  console.log(sliderImages)

  console.log(sliderImages)
  return (
    <SliderSectionMobile>
      {images.map((img, index) => {
        return <img src={img} alt="" key={index} />
      })}
    </SliderSectionMobile>
  )
}

IndexLayout.propTypes = {
  data: PropTypes.object,
}
export default IndexLayout
