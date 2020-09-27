import React, { useState } from 'react'
import { WidthLimiterContainer } from '../Layout/styles'
import PropTypes from 'prop-types'

import {
  CalendarContainer,
  CalendarHeaderContainer,
  DayPickerContainer,
  CalendarNavbarEl,
  CalendarIconPrev,
  CalendarIconNext,
  CallendarItemsContainer,
} from './styles'
import Icon from '~/components/Icon'
import { Desktop, Tablet } from '../Utilities/Media'
import DayPicker from 'react-day-picker'
import 'react-day-picker/lib/style.css'

const EventsCalendar = () => {
  const [selectedDay, setSelectedDay] = useState(null)

  const handleDayClick = (day, { selected }) => {
    setSelectedDay({
      selectedDay: selected ? undefined : day,
    })
    console.log('selected')
  }
  console.log(selectedDay)

  const navbar = ({
    month,
    nextMonth,
    previousMonth,
    onPreviousClick,
    onNextClick,
    className,
    localeUtils,
  }) => {
    const months = localeUtils.getMonths()
    const prev = months[previousMonth.getMonth()]
    const next = months[nextMonth.getMonth()]
    const current = months[month.getMonth()]
    const styleLeft = {}
    const styleRight = {}
    const currentMonth = new Date()
    const currentDate = currentMonth.getFullYear()

    console.log(currentDate)
    return (
      <CalendarNavbarEl className={className}>
        <button style={styleLeft} onClick={() => onPreviousClick()}>
          {prev}
        </button>
        <CalendarIconPrev>
          <Icon type="line" />
        </CalendarIconPrev>
        <div>
          <h3>
            {current}, {currentDate}
          </h3>
        </div>
        <CalendarIconNext>
          <Icon type="line" />
        </CalendarIconNext>
        <button style={styleRight} onClick={() => onNextClick()}>
          {next}
        </button>
      </CalendarNavbarEl>
    )
  }

  return (
    <WidthLimiterContainer>
      <CalendarContainer>
        <CalendarHeaderContainer>
          <h1>Calendar</h1>
          <Tablet>
            <Icon type="cross" />
          </Tablet>
          <Desktop>
            <Icon type="cross-des" />
          </Desktop>
        </CalendarHeaderContainer>
        <CallendarItemsContainer>
          <DayPickerContainer>
            <DayPicker
              showOutsideDays
              firstDayOfWeek={1}
              onDayClick={handleDayClick}
              selectedDays={selectedDay ? selectedDay.selectedDay : selectedDay}
              navbarElement={navbar}
            />
          </DayPickerContainer>
          <div style={{ marginTop: '80px' }}>
            <div>
              <h3>Upcoming Events</h3>
            </div>
            <div>
              <h4>July 12, 2020 @ 9:00 am – 10:00 am</h4>
              <h2>Moms and Tots</h2>
              <p>St. George Church 2455 Ch de la Côte-Sainte-Catherine</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Fermentum nullam condimentum semper mauris, consequat
                condimentum semper mauris.{' '}
              </p>
            </div>
          </div>
        </CallendarItemsContainer>
      </CalendarContainer>
    </WidthLimiterContainer>
  )
}

EventsCalendar.propTypes = {
  month: PropTypes.any,
  nextMonth: PropTypes.any,
  previousMonth: PropTypes.any,
  onPreviousClick: PropTypes.any,
  onNextClick: PropTypes.any,
  className: PropTypes.any,
  localeUtils: PropTypes.any,
}

export default EventsCalendar
