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
    anchor: allCosmicjsAnchors {
      nodes {
        metadata {
          anchor_title
          youth_ministries {
            anchor_image {
              url
            }
            anchor_text
            anchor_title
          }
          anchor_list {
            link_1
            link_2
            link_3
            link_4
            link_5
            link_6
            link_7
            link_8
            link_9
            link_10
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
