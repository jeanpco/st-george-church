import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import Navbar from './NavbarElement/NavBarElement'
import LocaleContext from '../../context/LocaleProvider'
import MomentLocaleUtils from 'react-day-picker/moment'
import 'moment/min/locales'

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
  CalendarBodyEventsContainer,
  CalendarEventsContainer,
  UpcomingCalendarEventsContainer,
  CalendarEventsBodyHead,
  CalenderEventsBodyText,
  CalendarEventDates,
  CalendarEventsIcon,
  EventItemsContainer,
  CalendarEventSubTitle,
  UpcomingEventDiv,
} from './styles'
import { useEffect } from 'react'

const EventsCalendar = ({
  query: {
    eventSectionTitle,
    calendarTitle,
    eventAddress,
    eventDescription,
    uid,
    noEventTitle,
    upcomingEventTitle,
  },
}) => {
  const googleApiData = useStaticQuery(graphql`
    {
      calendarEvents: allGoogleCalendarEvent {
        nodes {
          start {
            dateTime
          }
          end {
            dateTime(formatString: "h:mm A")
          }
          summary
        }
      }
    }
  `)

  const [selectedDay, setSelectedDay] = useState([])
  const [filterDate, setfilterDate] = useState(new Date().toLocaleDateString())
  const [locale, setLocale] = useState('')

  const currentMonth = +JSON.stringify(selectedDay).split('-')[1]

  let nextMonth

  if (currentMonth === 12) {
    nextMonth = 1
  } else {
    nextMonth = currentMonth + 1
  }

  const currentMonthEvents = []
  const nextMonthEvents = []

  const lang = React.useContext(LocaleContext)
  const i18n = lang.i18n[lang.locale]
  const dayFilteredEvents = []
  const eventDates = []
  const modifiers = {
    event: eventDates,
  }

  useEffect(() => {
    setLocale(i18n.path)
  }, [])

  useEffect(() => {
    eventDates.map((event) => {
      if (event.toLocaleDateString() === filterDate) {
        setSelectedDay({
          selectedDay: new Date(),
        })
      }
    })
  }, [])

  const handleDayClick = (day, { selected }) => {
    setSelectedDay({
      selectedDay: selected ? undefined : day,
    })

    setfilterDate(day.toLocaleDateString())
  }

  googleApiData.calendarEvents.nodes.map((event) => {
    const eventStartSplit = +event?.start?.dateTime?.split('-')[1]
    const todayEventSplit = +new Date(event?.start?.dateTime)
      .toLocaleDateString()
      .split('/')[1]
    const filterDateSplit = +filterDate?.split('/')[1]

    if (event.start.dateTime != null) {
      if (
        eventStartSplit === currentMonth &&
        todayEventSplit > filterDateSplit
      ) {
        currentMonthEvents.push(event)
      }

      if (eventStartSplit === nextMonth) {
        nextMonthEvents.push(event)
      }
    }

    eventDates.push(new Date(event.start.dateTime))

    if (filterDate === new Date(event.start.dateTime).toLocaleDateString()) {
      dayFilteredEvents.push(event)
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

  const upcomingMonthEvents = currentMonthEvents.concat(nextMonthEvents)

  return (
    <CallendarSectionContainer id={uid}>
      <WidthLimiterContainer>
        <CalendarContainer>
          <CalendarHeaderContainer>
            {eventSectionTitle ? (
              <Title as="h2" type="heading2">
                {eventSectionTitle}
              </Title>
            ) : (
              ''
            )}
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
            font-weight: bold;
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
                disabledDays={{ before: new Date() }}
              />
            </DayPickerContainer>
            <CalendarBodyEventsContainer>
              <CalendarEventsContainer>
                {dayFilteredEvents?.length > 0 &&
                calendarTitle &&
                noEventTitle ? (
                  <UpcomingEventDiv>
                    <Title as="h3" type="calendarTitle">
                      {calendarTitle}
                    </Title>
                  </UpcomingEventDiv>
                ) : (
                  ''
                )}
                {dayFilteredEvents?.length > 0
                  ? dayFilteredEvents.map((info, index) => {
                      return (
                        <EventItemsContainer key={`Google Events -- ${index}`}>
                          <CalendarEventDates>
                            {info?.start?.dateTime ? (
                              <Moment
                                locale={locale}
                                date={info.start.dateTime}
                                format="MMMM DD, YYYY @ h:mm A"
                                className="Formated-Date"
                              ></Moment>
                            ) : (
                              ''
                            )}
                            {info?.end?.dateTime ? (
                              <Text> - {info.end.dateTime}</Text>
                            ) : (
                              ''
                            )}
                          </CalendarEventDates>
                          <CalendarEventsBodyHead>
                            {info?.summary ? (
                              <CalendarEventSubTitle as="h4">
                                {info.summary}
                              </CalendarEventSubTitle>
                            ) : (
                              ''
                            )}
                            {eventAddress ? (
                              <Text
                                type="smallText900"
                                dangerouslySetInnerHTML={{
                                  __html: eventAddress,
                                }}
                                className="Event__Address-Text"
                              />
                            ) : (
                              ''
                            )}
                          </CalendarEventsBodyHead>
                          <CalenderEventsBodyText>
                            {info.description && eventDescription ? (
                              <Text
                                type="smallText900"
                                className="Event__Description-Text"
                              >
                                {info.description}
                              </Text>
                            ) : (
                              <Text
                                type="smallText900"
                                className="Event__Description-Text"
                              >
                                {eventDescription}
                              </Text>
                            )}
                          </CalenderEventsBodyText>
                          <CalendarEventsIcon>
                            <Icon type="calendar-line" />
                          </CalendarEventsIcon>
                        </EventItemsContainer>
                      )
                    })
                  : ''}
              </CalendarEventsContainer>
              <UpcomingCalendarEventsContainer>
                {upcomingMonthEvents?.length > 0 &&
                upcomingEventTitle &&
                noEventTitle ? (
                  <UpcomingEventDiv>
                    <Title as="h3" type="calendarTitle">
                      {upcomingEventTitle}
                    </Title>
                  </UpcomingEventDiv>
                ) : (
                  <div>
                    <Title as="h3" type="calendarTitle">
                      {noEventTitle}
                    </Title>
                  </div>
                )}
                {upcomingMonthEvents?.length > 0
                  ? upcomingMonthEvents.map((info, index) => {
                      return (
                        <EventItemsContainer key={`Google Events -- ${index}`}>
                          <CalendarEventDates>
                            {info?.start?.dateTime ? (
                              <Moment
                                locale={locale}
                                date={info.start.dateTime}
                                format="MMMM DD, YYYY @ h:mm A"
                                className="Formated-Date"
                              ></Moment>
                            ) : (
                              ''
                            )}
                            {info?.end?.dateTime ? (
                              <Text> - {info.end.dateTime}</Text>
                            ) : (
                              ''
                            )}
                          </CalendarEventDates>
                          <CalendarEventsBodyHead>
                            {info?.summary ? (
                              <CalendarEventSubTitle as="h4">
                                {info.summary}
                              </CalendarEventSubTitle>
                            ) : (
                              ''
                            )}
                            {eventAddress ? (
                              <Text
                                type="smallText900"
                                dangerouslySetInnerHTML={{
                                  __html: eventAddress,
                                }}
                                className="Event__Address-Text"
                              />
                            ) : (
                              ''
                            )}
                          </CalendarEventsBodyHead>
                          <CalenderEventsBodyText>
                            {info.description && eventDescription ? (
                              <Text
                                type="smallText900"
                                className="Event__Description-Text"
                              >
                                {info.description}
                              </Text>
                            ) : (
                              <Text
                                type="smallText900"
                                className="Event__Description-Text"
                              >
                                {eventDescription}
                              </Text>
                            )}
                          </CalenderEventsBodyText>
                          <CalendarEventsIcon>
                            <Icon type="calendar-line" />
                          </CalendarEventsIcon>
                        </EventItemsContainer>
                      )
                    })
                  : ''}
              </UpcomingCalendarEventsContainer>
            </CalendarBodyEventsContainer>
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
