import React from 'react'
import LocaleContext from '../../context/LocaleProvider'
import { useStaticQuery, graphql } from 'gatsby'
import { AboutContainer } from './style'
import Text from '~/components/Utilities/Text'
import Title from '~/components/Utilities/Title'

const About = () => {
  const data = useStaticQuery(graphql`
    {
      about: allCosmicjsAbouts {
        nodes {
          metadata {
            about_text
            about_title
          }
          locale
        }
      }
    }
  `)

  const lang = React.useContext(LocaleContext)
  const i18n = lang.i18n[lang.locale]

  const aboutData = data.about.nodes
    .filter((node) => node.locale.toLowerCase() === i18n.locale)
    .map((r) => r.metadata)

  const aboutLocal = aboutData[0]
  const aboutText = aboutLocal.about_text
  const aboutTitle = aboutLocal.about_title

  return (
    <AboutContainer>
      <Title as="h2" type="heading1">
        {' '}
        {aboutTitle}
      </Title>
      <Text as="body" type="">
        {aboutText}
      </Text>
    </AboutContainer>
  )
}

About.propTypes = {}

export default About
