import React from 'react'
import Button from '~/components/Utilities/Button'
import Title from '~/components/Utilities/Title'
import Text from '~/components/Utilities/Text'
import Icon from '~/components/Icon'

const Styleguide = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
        }}
      >
        <Title as="h1" type="heading1">
          Heading1
        </Title>
        <br />
        <Title as="h2" type="heading2">
          Heading2
        </Title>
        <br />
        <Title as="h3" type="heading3">
          Heading3
        </Title>
        <br />
        <Title type="subheading1">Subheading1</Title>
        <br />
        <hr />
        <br />
        <Text type="body">Body Text</Text>
        <br />
        <Text as="small" type="smallText400">
          Small Text
        </Text>
        <Text as="small" type="smallText500">
          Small Text
        </Text>
        <br />
        <hr />
        <br />
        <Button buttonStyle="primary">Button Primary</Button>
        <br />
        <Button buttonStyle="secondary">Button Secondary</Button>
        <br />
        <Button buttonStyle="tertiary">Button Tertiary</Button>
        <br />
        <br />
        <hr />
        <br />
        <div>
          <Icon type="add" />
          <Icon type="arrow-back" />
          <Icon type="arrow-forward" />
          <Icon type="arrow-right" />
          <Icon type="call" />
          <Icon type="chat-bubble" />
          <Icon type="clear" />
          <Icon type="error" />
          <Icon type="favorite-border" />
          <Icon type="favorite" />
          <Icon type="grade" />
          <Icon type="keyboard-arrow-down" />
          <Icon type="keyboard-arrow-right" />
          <Icon type="airport" />
          <Icon type="mall" />
          <Icon type="shipping" />
          <Icon type="mail" />
          <Icon type="menu" />
          <Icon type="more-horizontal" />
          <Icon type="more-vertical" />
          <Icon type="person-outline" />
          <Icon type="play-arrow" />
          <Icon type="search" />
        </div>
      </div>
    </>
  )
}

export default Styleguide
