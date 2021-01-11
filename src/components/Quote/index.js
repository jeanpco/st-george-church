import React from 'react'
import PropTypes from 'prop-types'

import {
  HomeQuoteContainer,
  HomeQuoteContentContainer,
  HomeQuoteContent,
} from './styles'

import { Tablet, Desktop } from '../Utilities/Media'
import Text from '../Utilities/Text'
import Icon from '~/components/Icon'
import { WidthLimiterContainer } from '../Layout/styles'
import Fade from 'react-reveal/Fade'

const Quote = ({ query }) => {
  return (
    <>
      <Tablet>
        <HomeQuoteContainer>
          <HomeQuoteContentContainer>
            <Fade bottom distance="30px">
              <Icon type="horizontal-line" />
              <HomeQuoteContent>
                <img src={query.graphic ? query.graphic : ''} alt="" />

                <Text as="p" type="bigText400">
                  {query.text ? query.text : ''}
                </Text>
              </HomeQuoteContent>
              <Icon type="horizontal-line" />
            </Fade>
          </HomeQuoteContentContainer>
        </HomeQuoteContainer>
      </Tablet>

      <Desktop>
        <WidthLimiterContainer>
          <HomeQuoteContainer>
            <HomeQuoteContentContainer>
              <Fade bottom distance="30px">
                <div>
                  <Icon type="horizontal-line-des" />
                </div>
                <HomeQuoteContent>
                  <Text as="p" type="bigText400">
                    {query.text ? query.text : ''}
                  </Text>
                  <img
                    src={query.graphic ? query.graphic : ''}
                    alt="quote graphic"
                    className="Home__Quote-Graphic"
                  />
                </HomeQuoteContent>
                <div>
                  <Icon type="horizontal-line-des" />
                </div>
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
