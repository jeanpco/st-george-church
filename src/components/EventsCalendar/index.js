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
  CalendarEventsContainer,
  CalendarEventHeader,
  CalendarEvents,
  CalendarEventsBodyHead,
  CalenderEventsBodyText,
  CalendarEventsIcon,
} from './styles'
import Icon from '~/components/Icon'
import { Desktop, Tablet } from '../Utilities/Media'
import DayPicker from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import Title from '../Utilities/Title'
import Text from '../Utilities/Text'

const EventsCalendar = () => {
  const [selectedDay, setSelectedDay] = useState(null)

  const handleDayClick = (day, { selected }) => {
    setSelectedDay({
      selectedDay: selected ? undefined : day,
    })
    console.log('selected')
  }

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

    return (
      <CalendarNavbarEl className={className}>
        <button
          className="Calender__Btn-Next"
          style={styleLeft}
          onClick={() => onPreviousClick()}
        >
          {prev}
        </button>
        <CalendarIconPrev>
          <Icon type="line" />
        </CalendarIconPrev>
        <div>
          <h3>{current}</h3>
        </div>
        <CalendarIconNext>
          <Icon type="line" />
        </CalendarIconNext>
        <button
          className="Calender__Btn-Next"
          style={styleRight}
          onClick={() => onNextClick()}
        >
          {next}
        </button>
      </CalendarNavbarEl>
    )
  }

  const renderDay = (day) => {
    const date = day.getDate()
    const dateStyle = {}
    const cellStyle = {}
    return (
      <div style={cellStyle} className="cell-style">
        <div style={dateStyle} className="date-cell">
          {date}
        </div>
      </div>
    )
  }

  return (
    <WidthLimiterContainer>
      <CalendarContainer>
        <CalendarHeaderContainer>
          <Title as="h2" type="heading2">
            Events Calendar
          </Title>
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
              renderDay={renderDay}
            />
          </DayPickerContainer>
          <CalendarEventsContainer>
            <CalendarEventHeader>
              <Title type="calendarTitle">Upcoming Events</Title>
            </CalendarEventHeader>
            <CalendarEvents>
              <Text>July 12, 2020 @ 9:00 am – 10:00 am</Text>
              <CalendarEventsBodyHead>
                <Title type="heading3">Moms & Tots</Title>
                <Text>
                  St. George Church 2455 Ch de la Côte-Sainte-Catherine
                </Text>
              </CalendarEventsBodyHead>
              <CalenderEventsBodyText>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Fermentum nullam condimentum semper mauris, consequat
                  condimentum semper mauris.
                </Text>
              </CalenderEventsBodyText>
              <CalendarEventsIcon>
                <Icon type="calendar-line" />
              </CalendarEventsIcon>
            </CalendarEvents>

            <CalendarEventHeader>
              <Title type="calendarTitle">Upcoming Events</Title>
            </CalendarEventHeader>
            <CalendarEvents>
              <Text>July 12, 2020 @ 9:00 am – 10:00 am</Text>
              <CalendarEventsBodyHead>
                <Title type="heading3">Moms & Tots</Title>
                <Text>
                  St. George Church 2455 Ch de la Côte-Sainte-Catherine
                </Text>
              </CalendarEventsBodyHead>
              <CalenderEventsBodyText>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Fermentum nullam condimentum semper mauris, consequat
                  condimentum semper mauris.
                </Text>
              </CalenderEventsBodyText>
              <CalendarEventsIcon>
                <Icon type="calendar-line" />
              </CalendarEventsIcon>
            </CalendarEvents>
          </CalendarEventsContainer>
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
