import React from 'react'
import Icon from '~/components/Icon'
import PropTypes from 'prop-types'
import {
  CalendarNavbarEl,
  CalendarNavIconNext,
  CalendarNavIconPrev,
} from './styles'
import MomentLocaleUtils from 'react-day-picker/moment'
import 'moment/locale/fr'

const Navbar = ({
  nextMonth,
  previousMonth,
  onPreviousClick,
  onNextClick,
  className,
  locale,
}) => {
  const months = MomentLocaleUtils.getMonths(locale)
  const prev = months[previousMonth.getMonth()]
  const next = months[nextMonth.getMonth()]
  const styleLeft = {}
  const styleRight = {}

  return (
    <CalendarNavbarEl>
      <div className={className}>
        <button
          style={styleLeft}
          onClick={() => onPreviousClick()}
          className="Calendar__Btn-Prev"
        >
          {prev.slice(0, 3)}
        </button>
        <CalendarNavIconPrev>
          <Icon type="line" />
        </CalendarNavIconPrev>
        <button
          style={styleRight}
          onClick={() => onNextClick()}
          className="Calendar__Btn-Next"
        >
          {next.slice(0, 3)}
        </button>
        <CalendarNavIconNext>
          <Icon type="line" />
        </CalendarNavIconNext>
      </div>
    </CalendarNavbarEl>
  )
}

Navbar.propTypes = {
  nextMonth: PropTypes.any,
  previousMonth: PropTypes.any,
  onPreviousClick: PropTypes.func,
  onNextClick: PropTypes.func,
  localeUtils: PropTypes.any,
  className: PropTypes.any,
  locale: PropTypes.any,
}

export default Navbar
