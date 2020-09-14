import React, { Fragment } from 'react'
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

const Quote = ({ query }) => {
  return (
    <Fragment>
      <Tablet>
        <HomeQuoteContainer>
          <HomeQuoteContentContainer>
            <Icon type="horizontal-line" />
            <HomeQuoteContent>
              <img src={query.graphic ? query.graphic : ''} alt="" />

              <Text as="p" type="bigText400">
                {query.text ? query.text : ''}
              </Text>
            </HomeQuoteContent>
            <Icon type="horizontal-line" />
          </HomeQuoteContentContainer>
        </HomeQuoteContainer>
      </Tablet>

      <Desktop>
        <WidthLimiterContainer>
          <HomeQuoteContainer>
            <HomeQuoteContentContainer>
              <Icon type="horizontal-line-des" />
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
              <Icon type="horizontal-line-des" />
            </HomeQuoteContentContainer>
          </HomeQuoteContainer>
        </WidthLimiterContainer>
      </Desktop>
    </Fragment>
  )
}

Quote.propTypes = {
  query: PropTypes.object,
}
export default Quote
