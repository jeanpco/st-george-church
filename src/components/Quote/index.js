import React from 'react'
import PropTypes from 'prop-types'

import {
  HomeQuoteContainer,
  HomeQuoteContentContainer,
  HomeQuoteContent,
  HomeQuoteContentGraph,
} from './styles'

import { Tablet, Desktop } from '../Utilities/Media'
import Text from '../Utilities/Text'
import { WidthLimiterContainer } from '../Layout/styles'
import Fade from 'react-reveal/Fade'

const Quote = ({ query }) => {
  return (
    <>
      <Tablet>
        <HomeQuoteContainer>
          <HomeQuoteContentContainer>
            {query?.graphic ? (
              <HomeQuoteContentGraph>
                <img src={query.graphic ? query.graphic : ''} alt="" />
              </HomeQuoteContentGraph>
            ) : (
              ''
            )}
            <Fade bottom distance="30px">
              <HomeQuoteContent>
                {query?.text ? (
                  <Text as="p" type="bigText400">
                    {query.text ? query.text : ''}
                  </Text>
                ) : (
                  ''
                )}
              </HomeQuoteContent>
            </Fade>
          </HomeQuoteContentContainer>
        </HomeQuoteContainer>
      </Tablet>

      <Desktop>
        <WidthLimiterContainer>
          <HomeQuoteContainer>
            <HomeQuoteContentContainer>
              <Fade bottom distance="30px">
                <HomeQuoteContent>
                  {query?.text ? (
                    <Text as="p" type="bigText400">
                      {query.text ? query.text : ''}
                    </Text>
                  ) : (
                    ''
                  )}
                </HomeQuoteContent>
                {query?.graphic ? (
                  <HomeQuoteContentGraph>
                    <img
                      src={query.graphic ? query.graphic : ''}
                      alt="quote graphic"
                      className="Home__Quote-Graphic"
                    />
                  </HomeQuoteContentGraph>
                ) : (
                  ''
                )}
              </Fade>
            </HomeQuoteContentContainer>
          </HomeQuoteContainer>
        </WidthLimiterContainer>
      </Desktop>
    </>
  )
}

Quote.propTypes = {
  query: PropTypes.object,
}
export default Quote
