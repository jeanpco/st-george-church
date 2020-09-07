import React, { Fragment } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import {
  HomeQuoteContainer,
  HomeQuoteContentContainer,
  HomeQuoteContent,
} from './styles'

import { Tablet, Desktop } from '../Utilities/Media'
import Text from '../Utilities/Text'
import Icon from '~/components/Icon'

const Quote = () => {
  const data = useStaticQuery(graphql`
    {
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
  `)

  const quoteGraphic = data?.homePagequote?.nodes[0]?.metadata?.quote_graphic
    ?.local?.publicURL
    ? data.homePagequote.nodes[0].metadata.quote_graphic.local.publicURL
    : ''
  const quote = data?.homePagequote?.nodes[0]?.metadata?.quote
    ? data.homePagequote.nodes[0].metadata.quote
    : ''
  return (
    <Fragment>
      <Tablet>
        <HomeQuoteContainer>
          <HomeQuoteContentContainer>
            <Icon type="horizontal-line" />
            <HomeQuoteContent>
              <img src={quoteGraphic} alt="" />

              <Text as="p" type="bigText400">
                {quote}
              </Text>
            </HomeQuoteContent>
            <Icon type="horizontal-line" />
          </HomeQuoteContentContainer>
        </HomeQuoteContainer>
      </Tablet>

      <Desktop>
        <HomeQuoteContainer>
          <HomeQuoteContentContainer>
            <Icon type="horizontal-line-des" />
            <HomeQuoteContent>
              <Text as="p" type="bigText400">
                {quote}
              </Text>
              <img
                src={quoteGraphic}
                alt="quote graphic"
                className="Home__Quote-Graphic"
              />
            </HomeQuoteContent>
            <Icon type="horizontal-line-des" />
          </HomeQuoteContentContainer>
        </HomeQuoteContainer>
      </Desktop>
    </Fragment>
  )
}

export default Quote
