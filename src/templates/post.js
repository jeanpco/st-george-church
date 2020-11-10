import React, { useState, useEffect, Fragment } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { WidthLimiterContainer } from '../components/Layout/styles'
import Text from '../components/Utilities/Text'
import Title from '../components/Utilities/Title'
import { Desktop } from '../components/Utilities/Media'
import Moment from 'react-moment'
import ContactDrawer from '../components/ContactDrawer'

import {
  PostContainer,
  ArticleContentContainer,
  ArticleContactInfo,
  PostItemsContainer,
  PostContentContainer,
  PostItemBodyContent,
  PostItemFeatureImg,
  ArticleContactContainer,
  ArticleTitle,
  ContactInfoContainer,
} from '../components/templates/Blog/postStyles'
import Icon from '~/components/Icon'

import {
  MinistriesContactImg,
  MinistriesContactIcon,
  MinistriesPostionTitle,
  MinistriesFullName,
} from '../components/Modal/styles'
import BackgroundImage from 'gatsby-background-image'

/**
 * Single post view (/:slug)
 *
 * This file renders a single post and loads all the content.
 *
 */
// location={location}
const Post = ({ data, location }) => {
  const post = data.ghostPost
  const [authors, setAuthors] = useState([])

  useEffect(() => {
    post.authors.map((value) => {
      setAuthors(value.name)
    })
  }, [])

  const [toggleDrawer, setToggleDrawer] = useState(false)
  const [articleContactPerson, setArticleContactPerson] = useState('')

  const publishedAt = new Date(post.created_at)
  const articleQuery = data?.prismicWhoWeAre?.data
  const formInformation = articleQuery?.body[0]?.items
  const contactInformation = articleQuery?.contact_form?.document?.data

  const publishText = contactInformation?.article_publish_text

  const onClickHandler = (e) => {
    setToggleDrawer(!toggleDrawer)

    setArticleContactPerson(
      e.currentTarget.childNodes[1].childNodes[1].innerText
    )
  }

  return (
    <PostContainer location={location}>
      <WidthLimiterContainer>
        <PostContentContainer className="container">
          <PostItemsContainer className="content">
            {post?.feature_image ? (
              <PostItemFeatureImg>
                <img src={post.feature_image} />
              </PostItemFeatureImg>
            ) : (
              ''
            )}
            {/* The main post content */}
            <PostItemBodyContent>
              <ArticleContentContainer>
                {post?.title ? (
                  <ArticleTitle as="h2" type="heading1">
                    {post.title}
                  </ArticleTitle>
                ) : (
                  ''
                )}
                {post?.html ? (
                  <Text
                    className="content-body load-external-scripts"
                    dangerouslySetInnerHTML={{ __html: post.html }}
                  />
                ) : (
                  ''
                )}
              </ArticleContentContainer>
              <ContactInfoContainer>
                {publishText && publishedAt ? (
                  <Text type="body" className="Article__Contact__Publish">
                    <span style={{ paddingRight: '5px' }}>{publishText}</span>
                    <Moment
                      date={publishedAt}
                      format="MMMM DD, YYYY"
                      className="Formated-Date-Blog"
                    />
                  </Text>
                ) : (
                  ''
                )}
                {articleQuery?.body[0]?.items?.length > 0
                  ? articleQuery.body[0].items.map((contact, index) => {
                      const articleContactImg = contact?.single_contact_link
                        ?.document.data?.contact_img?.localFile?.childImageSharp
                        ?.fluid
                        ? contact.single_contact_link.document.data.contact_img
                            .localFile.childImageSharp.fluid
                        : ''

                      const articleContactPosition = contact
                        ?.single_contact_link?.document?.data?.contact_position
                        ? contact.single_contact_link.document.data
                            .contact_position
                        : ''

                      const articleContactFullName = contact
                        ?.single_contact_link?.document.data?.contact_name.text
                        ? contact.single_contact_link.document.data.contact_name
                            .text
                        : ''
                      return (
                        <Fragment key={`Article__Contact ${index}`}>
                          {articleContactFullName === authors ? (
                            <ArticleContactContainer onClick={onClickHandler}>
                              <MinistriesContactImg>
                                <MinistriesContactIcon>
                                  <Icon type="border-mob" />
                                </MinistriesContactIcon>

                                {articleContactImg ? (
                                  <BackgroundImage
                                    fluid={articleContactImg}
                                    className="Ministries__Contact__Image-Circle"
                                  >
                                    <Desktop>
                                      {articleQuery?.contact_flyout_title
                                        ?.text ? (
                                        <Title
                                          as="h4"
                                          className={
                                            'Ministries__ContactImageTitle'
                                          }
                                          type="backgroundHeading"
                                        >
                                          {
                                            articleQuery.contact_flyout_title
                                              .text
                                          }
                                        </Title>
                                      ) : (
                                        ''
                                      )}
                                    </Desktop>
                                  </BackgroundImage>
                                ) : (
                                  ''
                                )}
                              </MinistriesContactImg>
                              <ArticleContactInfo>
                                {articleContactPosition ? (
                                  <MinistriesPostionTitle
                                    as="h5"
                                    className="Article__Contact__Position"
                                  >
                                    {articleContactPosition}
                                  </MinistriesPostionTitle>
                                ) : (
                                  ''
                                )}
                                {articleContactFullName ? (
                                  <MinistriesFullName
                                    as="h6"
                                    className="Article__Contact__Name"
                                  >
                                    {articleContactFullName}
                                  </MinistriesFullName>
                                ) : (
                                  ''
                                )}
                              </ArticleContactInfo>
                            </ArticleContactContainer>
                          ) : (
                            ''
                          )}
                        </Fragment>
                      )
                    })
                  : ''}
              </ContactInfoContainer>
            </PostItemBodyContent>
          </PostItemsContainer>
        </PostContentContainer>
        <ContactDrawer
          toggleDrawer={toggleDrawer}
          setToggleDrawer={setToggleDrawer}
          query={{
            contactCurrent: articleContactPerson,
            address: articleQuery.contact_flyout_address,
            number: articleQuery.contact_flyout_number,
            formTitle: articleQuery.contact_form_title,
            contactFormInformation: contactInformation,
            formInformation: formInformation,
            contactFlyoutTitle: articleQuery.contact_flyout_title.text,
          }}
        />
      </WidthLimiterContainer>
    </PostContainer>
  )
}

Post.propTypes = {
  data: PropTypes.shape({
    allPrismicSingleContact: PropTypes.object,
    prismicWhoWeAre: PropTypes.object,
    ghostPost: PropTypes.shape({
      codeinjection_styles: PropTypes.object,
      title: PropTypes.string.isRequired,
      html: PropTypes.string.isRequired,
      feature_image: PropTypes.string,
      created_at: PropTypes.string,
      authors: PropTypes.array,
    }).isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
}

export default Post

export const postQuery = graphql`
  query($slug: String!) {
    ghostPost(slug: { eq: $slug }) {
      ...GhostPostFields
    }

    prismicWhoWeAre {
      data {
        contact_flyout_address
        contact_flyout_number
        contact_flyout_title {
          text
        }
        contact_form_title
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
        contact_form {
          document {
            ... on PrismicContactForm {
              id
              data {
                article_publish_text
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
      }
    }
  }
`
