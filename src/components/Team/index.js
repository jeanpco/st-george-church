import React from 'react'
import PropTypes from 'prop-types'

import { WidthLimiterContainer } from '../Layout/styles'
import { Tablet, Desktop } from '../Utilities/Media'
import Icon from '~/components/Icon'
import Title from '../Utilities/Title'
import Img from 'gatsby-image'
import {
  TeamContainer,
  TeamHeaderContainer,
  TeamContentContainer,
} from './styles'

// import Frame from '../../images/Frame.svg'

const Team = ({ query }) => {
  console.log(query.content)

  return (
    <TeamContainer>
      <WidthLimiterContainer>
        <TeamHeaderContainer>
          <Title type="heading2">{query.title}</Title>
          <Tablet>
            <Icon type="cross" />
          </Tablet>
          <Desktop>
            <Icon type="cross-des" />
          </Desktop>
        </TeamHeaderContainer>

        <TeamContentContainer>
          {query.content.map((info, index) => {
            const teamImages = info.team_image.localFile.childImageSharp.fluid
            return (
              <div key={index}>
                <div>
                  <Img
                    fluid={teamImages}
                    style={
                      {
                        // borderStyle: 'solid',
                        // borderWidth: '50px',
                        // background: `url(${Frame})`,
                        // backgroundSize: ' 250px 100px',
                        // borderImageSlice: '50',
                        // borderImageWidth: 'fit-content',
                      }
                    }
                  />
                </div>
              </div>
            )
          })}
        </TeamContentContainer>
      </WidthLimiterContainer>
    </TeamContainer>
  )
}

Team.propTypes = {
  query: PropTypes.object.isRequired,
}
export default Team
