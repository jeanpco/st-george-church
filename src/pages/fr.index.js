import React from 'react'
import IndexLayout from '../components/pages/Home'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

export const query = graphql`
  query HomeFrPageQuery($locale: String) {
    homePage: allPrismicHomepage(filter: { lang: { eq: $locale } }) {
      nodes {
        data {
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
            document {
              ... on PrismicMinistries {
                data {
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
          photo_gallery_section {
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
          contact {
            document {
              ... on PrismicWhoWeAre {
                data {
                  contact_flyout_address
                  contact_flyout_number
                  contact_flyout_title {
                    text
                  }
                  contact_form_title
                  contact_title {
                    text
                  }
                  body {
                    ... on PrismicWhoWeAreBodyTeamContent {
                      items {
                        contact_image {
                          localFile {
                            childImageSharp {
                              fluid {
                                ...GatsbyImageSharpFluid
                              }
                              id
                            }
                          }
                        }
                        contact_position
                        contact_name {
                          text
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
