import React from 'react'
import PropTypes from 'prop-types'
import { Add } from './assets/Add'
import { ArrowBack } from './assets/ArrowBack'
import { ArrowForward } from './assets/ArrowForward'
import { ArrowRight } from './assets/ArrowRight'
import { Call } from './assets/Call'
import { ChatBubble } from './assets/ChatBubble'
import { Clear } from './assets/Clear'
import { Error } from './assets/Error'
import { FavoriteBorder } from './assets/FavoriteBorder'
import { Favorite } from './assets/Favorite'
import { Grade } from './assets/Grade'
import { KeyboardArrowDown } from './assets/KeyboardArrowDown'
import { KeyboardArrowRight } from './assets/KeyboardArrowRight'
import { KeyboardArrowLeft } from './assets/KeyboardArrowLeft'
import { Airport } from './assets/Airport'
import { Mall } from './assets/Mall'
import { Shipping } from './assets/Shipping'
import { Mail } from './assets/Mail'
import { Menu } from './assets/Menu'
import { MoreHorizontal } from './assets/MoreHorizontal'
import { MoreVertical } from './assets/MoreVertical'
import { PersonOutline } from './assets/PersonOutline'
import { PlayArrow } from './assets/PlayArrow'
import { Search } from './assets/Search'
import { FastShipping } from './assets/FastShipping'
import { Minus } from './assets/Minus'
import { AfterPay } from './assets/AfterPay'
import { Zip } from './assets/Zip'
import { BigMenu } from './assets/BigMenu'
import { HorizontalLine } from './assets/HorizontalLine'
import { HorizontalLineDes } from './assets/HorizontalLineDes'
import { Cross } from './assets/Cross'
import { CrossDes } from './assets/CrossDes'
import { Flower } from './assets/Flower'
import { Border } from './assets/Border'
import { BorderMob } from './assets/BorderMob'
import { Line } from './assets/Line'
import { AddDes } from './assets/AddDes'
import { CalendarLine } from './assets/CalendarLine'
import { BigArrowForwoard } from './assets/BigArrowForwoard'
import { ArrowSelect } from './assets/ArrowSelect'
import { ImageIcon } from './assets/ImageIcon'

const Icon = ({ type }) => {
  switch (type) {
    case 'zip':
      return <Zip />
    case 'afterpay':
      return <AfterPay />
    case 'add':
      return <Add />
    case 'minus':
      return <Minus />
    case 'arrow-back':
      return <ArrowBack />
    case 'arrow-forward':
      return <ArrowForward />
    case 'big-arrow-forward':
      return <BigArrowForwoard />
    case 'arrow-right':
      return <ArrowRight />
    case 'call':
      return <Call />
    case 'chat-bubble':
      return <ChatBubble />
    case 'clear':
      return <Clear />
    case 'error':
      return <Error />
    case 'favorite-border':
      return <FavoriteBorder />
    case 'favorite':
      return <Favorite />
    case 'grade':
      return <Grade />
    case 'keyboard-arrow-down':
      return <KeyboardArrowDown />
    case 'keyboard-arrow-right':
      return <KeyboardArrowRight />
    case 'keyboard-arrow-left':
      return <KeyboardArrowLeft />
    case 'airport':
      return <Airport />
    case 'mall':
      return <Mall />
    case 'shipping':
      return <Shipping />
    case 'mail':
      return <Mail />
    case 'menu':
      return <Menu />
    case 'more-horizontal':
      return <MoreHorizontal />
    case 'more-vertical':
      return <MoreVertical />
    case 'person-outline':
      return <PersonOutline />
    case 'play-arrow':
      return <PlayArrow />
    case 'search':
      return <Search />
    case 'fast-shipping':
      return <FastShipping />
    case 'bigMenu':
      return <BigMenu />
    case 'horizontal-line':
      return <HorizontalLine />
    case 'horizontal-line-des':
      return <HorizontalLineDes />
    case 'cross':
      return <Cross />
    case 'cross-des':
      return <CrossDes />
    case 'add-des':
      return <AddDes />
    case 'flower':
      return <Flower />
    case 'border':
      return <Border />
    case 'border-mob':
      return <BorderMob />
    case 'line':
      return <Line />
    case 'calendar-line':
      return <CalendarLine />
    case 'arrow-select':
      return <ArrowSelect />
    case 'image-icon':
      return <ImageIcon />
    default:
      return ''
  }
}

Icon.propTypes = {
  type: PropTypes.string.isRequired,
}

export default Icon
