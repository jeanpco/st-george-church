import React from 'react'
import LocaleContext from '../../context/LocaleProvider'
import { useStaticQuery, graphql } from 'gatsby'
import { AboutContainer, AboutText } from './style'
import Title from '~/components/Utilities/Title'
import Text from '~/components/Utilities/Text'

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
      <Title as="h2" type="heading4" className="About__Drawer-Title">
        {aboutTitle}
      </Title>
      <AboutText>
        <Text as="small" type="smallText500" className="About__Drawer-text">
          {aboutText}
        </Text>
      </AboutText>
    </AboutContainer>
  )
}

About.propTypes = {}

export default About
