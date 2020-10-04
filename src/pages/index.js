import React from 'react'
import IndexLayout from '../components/pages/Home'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

export const query = graphql`
  query HomePageQuery($locale: String) {
    homePage: prismicHomepage(lang: { eq: $locale }) {
      data {
        events_calendar {
          uid
          document {
            ... on PrismicEventsCalendar {
              data {
                event_address {
                  text
                }
                event_description
                event_calendar_title {
                  text
                }
                no_events_title
                events_title {
                  text
                }
              }
            }
          }
        }
        photo_gallery {
          uid
          document {
            ... on PrismicPhotoGallery {
              data {
                gallery_title {
                  text
                }
                body {
                  ... on PrismicPhotoGalleryBodyGallerySection {
                    items {
                      gallery_img {
                        localFile {
                          childImageSharp {
                            fluid {
                              ...GatsbyImageSharpFluid
                            }
                            id
                          }
                        }
                      }
                      gallery_section_text
                      gallery_section_title {
                        text
                      }
                    }
                  }
                }
              }
            }
          }
        }
        body {
          ... on PrismicHomepageBodySliderHomeDes {
            items {
              slider_img {
                localFile {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                    id
                  }
                }
              }
            }
          }
          ... on PrismicHomepageBodySliderHomeMob {
            id
            items {
              slider_img {
                localFile {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                    id
                  }
                }
              }
            }
          }
        }
        intro_graphic {
          url
        }
        home_quote {
          document {
            ... on PrismicQuote {
              data {
                quote_text
                quote_graphic {
                  url
                }
              }
            }
          }
        }
        intro_link
        intro_text
        intro_title {
          text
        }
        ministries_section {
          uid
          document {
            ... on PrismicMinistries {
              data {
                next_link_text
                prev_link_text
                anchor_title {
                  text
                }
                body {
                  ... on PrismicMinistriesBodyMinistriesLinks {
                    items {
                      link
                    }
                  }
                  ... on PrismicMinistriesBodyYouthMinistriesList {
                    items {
                      list_text
                      list_title {
                        text
                      }
                      list_image {
                        localFile {
                          childImageSharp {
                            fluid {
                              ...GatsbyImageSharpFluid
                            }
                            id
                          }
                        }
                      }
                    }
                  }
                }
              }
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
