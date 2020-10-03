import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import Navbar from './NavbarElement/NavBarElement'
import LocaleContext from '../../context/LocaleProvider'
import MomentLocaleUtils from 'react-day-picker/moment'
import 'moment/locale/fr'

import { WidthLimiterContainer } from '../Layout/styles'
import Title from '../Utilities/Title'
import Text from '../Utilities/Text'

import Icon from '~/components/Icon'
import { Desktop, Tablet } from '../Utilities/Media'

import DayPicker from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import { useStaticQuery, graphql } from 'gatsby'
import {
  CallendarSectionContainer,
  CalendarContainer,
  CalendarHeaderContainer,
  CallendarItemsContainer,
  DayPickerContainer,
  CalendarEventsContainer,
  CalendarEvents,
  CalendarEventsBodyHead,
  CalenderEventsBodyText,
  CalendarEventDates,
  CalendarEventsIcon,
  EventItemsContainer,
} from './styles'
import { useEffect } from 'react'

const EventsCalendar = ({
  query: {
    eventSectionTitle,
    calendarTitle,
    eventAddress,
    eventDescription,
    uid,
  },
}) => {
  const googleApiData = useStaticQuery(graphql`
    {
      calendarEvents: allGoogleCalendarEvent {
        nodes {
          start {
            dateTime(formatString: "M/D/YYYY")
          }
          end {
            dateTime(formatString: "h:mm a")
          }
          summary
          description
        }
      }
    }
  `)

  console.log(googleApiData)

  const [locale, setLocale] = useState('')
  const [selectedDay, setSelectedDay] = useState([])
  const [date, setDate] = useState(new Date())

  const [test, setTest] = useState()

  const lang = React.useContext(LocaleContext)
  const i18n = lang.i18n[lang.locale]

  useEffect(() => {
    setLocale(i18n.path)
  })

  useEffect(() => {
    setTest(arrayEvents)
  }, [])

  console.log('THSI SIS THE TES', test)
  const arrayEvents = []

  const eventDates = []
  const modifiers = {
    event: eventDates,
  }

  const handleDayClick = (day, { selected }) => {
    setSelectedDay({
      selectedDay: selected ? undefined : day,
    })
    setDate(day)
  }

  console.log(googleApiData.calendarEvents)
  googleApiData.calendarEvents.nodes.map((info) => {
    eventDates.push(new Date(info.start.dateTime))
    if (date.toLocaleDateString() === info.start.dateTime) {
      arrayEvents.push(info)
    }
  })

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
    <CallendarSectionContainer id={uid}>
      <WidthLimiterContainer>
        <CalendarContainer>
          <CalendarHeaderContainer>
            <Title as="h2" type="heading2">
              {eventSectionTitle}
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
              <Helmet>
                <style>{`
          .DayPicker-Day--event {
            color: #CC1D27;
          }`}</style>
              </Helmet>
              <DayPicker
                modifiers={modifiers}
                showOutsideDays
                firstDayOfWeek={1}
                onDayClick={handleDayClick}
                selectedDays={selectedDay ? selectedDay.selectedDay : ''}
                renderDay={renderDay}
                navbarElement={<Navbar />}
                localeUtils={MomentLocaleUtils}
                locale={locale}
              />
            </DayPickerContainer>
            <CalendarEventsContainer>
              {arrayEvents.length > 0 ? (
                <Title as="h3" type="calendarTitle">
                  {calendarTitle}
                </Title>
              ) : (
                <Title as="h3" type="calendarTitle">
                  No Events
                </Title>
              )}
              {arrayEvents.length > 0
                ? arrayEvents.map((info, index) => {
                    console.log(info)

                    return (
                      <EventItemsContainer key={`Google Events -- ${index}`}>
                        <CalendarEvents>
                          <CalendarEventDates>
                            <Moment
                              date={info.start.dateTime}
                              format="MMMM DD, YYYY @ h:mm a"
                              className="Formated-Date"
                            />
                            <Text> - {info.end.dateTime}</Text>
                          </CalendarEventDates>
                          <CalendarEventsBodyHead>
                            <Title as="h4" type="heading3">
                              {info.summary}
                            </Title>
                            <Text type="body">{eventAddress}</Text>
                          </CalendarEventsBodyHead>
                          <CalenderEventsBodyText>
                            <Text type="body">{eventDescription}</Text>
                          </CalenderEventsBodyText>
                          <CalendarEventsIcon>
                            <Icon type="calendar-line" />
                          </CalendarEventsIcon>
                        </CalendarEvents>
                      </EventItemsContainer>
                    )
                  })
                : ''}
            </CalendarEventsContainer>
          </CallendarItemsContainer>
        </CalendarContainer>
      </WidthLimiterContainer>
    </CallendarSectionContainer>
  )
}

EventsCalendar.propTypes = {
  query: PropTypes.object,
  className: PropTypes.any,
  localeUtils: PropTypes.any,
}

export default EventsCalendar
