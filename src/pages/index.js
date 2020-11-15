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
                  html
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
                gallery_image_tag {
                  text
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
                          }
                        }
                      }
                      ministries_group_contact {
                        document {
                          ... on PrismicMinistriesSectionContact {
                            data {
                              body {
                                ... on PrismicMinistriesSectionContactBodyMinistriesSingleContact {
                                  items {
                                    single_contact_link {
                                      document {
                                        ... on PrismicSingleContact {
                                          data {
                                            contact_email
                                            contact_name {
                                              text
                                            }
                                            contact_position
                                            contact_img {
                                              localFile {
                                                childImageSharp {
                                                  fluid(
                                                    maxWidth: 130
                                                    maxHeight: 130
                                                  ) {
                                                    ...GatsbyImageSharpFluid
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
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        contact_section {
          document {
            ... on PrismicWhoWeAre {
              uid
              data {
                contact_flyout_address
                contact_flyout_number
                contact_flyout_title {
                  text
                }
                contact_form {
                  document {
                    ... on PrismicContactForm {
                      data {
                        form_button_text
                        form_field_email
                        form_field_name
                        form_field_text
                        form_select_title {
                          text
                        }
                        form_success_message
                        form_success_subtitle {
                          text
                        }
                        form_success_title {
                          text
                        }
                        form_title {
                          text
                        }
                      }
                    }
                  }
                }
                contact_form_title
                contact_title {
                  text
                }
                body {
                  ... on PrismicWhoWeAreBodyTeamContent {
                    items {
                      single_contact_link {
                        document {
                          ... on PrismicSingleContact {
                            data {
                              contact_email
                              contact_img {
                                localFile {
                                  childImageSharp {
                                    fluid {
                                      ...GatsbyImageSharpFluid
                                    }
                                  }
                                }
                              }
                              contact_name {
                                text
                              }
                              contact_position
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
    allGhostPost(filter: { tags: { elemMatch: { slug: { eq: $locale } } } }) {
      nodes {
        tags {
          slug
        }
        slug
        title
        localFeatureImage {
          childImageSharp {
            fluid(maxWidth: 359, maxHeight: 252) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        html
        excerpt
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
