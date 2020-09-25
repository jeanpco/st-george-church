import React from 'react'
import { WidthLimiterContainer } from '../Layout/styles'
import { CalendarContainer, CalendarHeaderContainer } from './styles'
import Icon from '~/components/Icon'
import { Desktop, Tablet } from '../Utilities/Media'
import DayPicker from 'react-day-picker'
import 'react-day-picker/lib/style.css'

const EventsCalendar = () => {
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
        <DayPicker firstDayOfWeek={1} />
      </CalendarContainer>
    </WidthLimiterContainer>
  )
}

export default EventsCalendar
