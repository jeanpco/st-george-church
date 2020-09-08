import React from 'react'
import IndexLayout from '../components/pages/Home'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

export const query = graphql`
  {
    homepage: allCosmicjsHomes {
      nodes {
        locale
        metadata {
          intro_link
          intro_text
          intro_title
          intro_graphic {
            local {
              publicURL
            }
          }
          slider_image_mob {
            image_1 {
              url
            }
            image_2 {
              url
            }
            image_3 {
              url
            }
          }
          slider_images {
            image_1 {
              url
            }
            image_2 {
              url
            }
            image_3 {
              url
            }
          }
        }
      }
    }
    homePagequote: allCosmicjsQuotes {
      nodes {
        metadata {
          quote
          quote_graphic {
            local {
              publicURL
            }
          }
        }
      }
    }
  }
`

const Index = ({ location, data }) => {
  return <IndexLayout location={location} data={data} />
}

Index.propTypes = {
  location: PropTypes.object,
  data: PropTypes.object,
}
export default Index
