import styled from '@emotion/styled'
import Title from '../Utilities/Title'

export const CallendarSectionContainer = styled.div`
  padding-top: 20px;
`

export const CalendarContainer = styled.div`
  border-top: 6px solid ${(props) => props.theme.colors.primary};

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    border-top: 12px solid ${(props) => props.theme.colors.primary};
  }
`

export const CalendarHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 13px;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    margin-top: 24px;
  }
`

export const DayPickerContainer = styled.div`
  max-width: 290px;
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    /* width: 60% !important; */
    margin-right: 20px;
    max-width: 447px;
  }

  .DayPicker {
    width: 100% !important;
  }

  .date-cell {
    padding: 7px;
    border: 3px solid transparent;
    border-radius: 50%;

    @media (min-width: ${(props) => props.theme.breakpoints.l}) {
      padding: 8px;
    }
  }

  .DayPicker * {
    outline: none;
  }

  .DayPicker-wrapper {
    width: 100%;
    padding-bottom: 0;

    outline: none;
  }

  .DayPicker-Body {
    font-size: 12px;

    @media (min-width: ${(props) => props.theme.breakpoints.l}) {
      font-size: 20px;
    }
  }

  .DayPicker-Day {
    padding: 0.3em;

    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      padding: 0.5em;
    }
  }

  .DayPicker-Month {
    margin: 0;
    width: 100%;
  }
  .DayPicker-Day--today {
    font-weight: normal;
    color: ${(props) => props.theme.colors.primary};
  }

  .DayPicker-Day--today:focus {
    outline: none;
  }

  .DayPicker-Day--selected {
    background-color: transparent !important;
    color: ${(props) => props.theme.colors.secondary} !important;

    .date-cell {
      border: 3px solid ${(props) => props.theme.colors.secondary};
      border-radius: 50%;
    }
  }

  .DayPicker-Day--disabled {
    color: ${(props) => props.theme.colors.primary};
    opacity: 0.6;
  }

  .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
    background-color: transparent;

    .date-cell {
      border: 3px solid ${(props) => props.theme.colors.secondary};
      border-radius: 50%;
    }
  }
  .DayPicker-Day--outside {
    color: ${(props) => props.theme.colors.primary};
  }

  .DayPicker-Weekday {
    font-family: ${(props) => props.theme.fontFamily.primary};
    color: ${(props) => props.theme.colors.primary};
    font-size: 16px !important;

    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      font-size: 20px !important;
    }
  }

  .DayPicker-Caption {
    text-align: center;
    font-size: ${(props) => props.theme.fonts.smallText};
    width: 47%;
    margin: 0 auto;
    background: #f0e290;
    border-radius: 20px;
    margin-bottom: 25px;
    margin-top: 20px;
    padding: 5px;
    text-transform: capitalize;
    font-family: ${(props) => props.theme.fontFamily.secondary};
    white-space: nowrap;

    @media (min-width: ${(props) => props.theme.breakpoints.l}) {
      font-size: 20px;
      padding: 10px;
      border-radius: 25px;
    }
  }
`

export const CalendarNavMonth = styled.div`
  width: 35%;
  margin: 0 auto;
`

export const CallendarItemsContainer = styled.div`
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    display: flex;
    justify-content: space-between;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    display: flex;
    justify-content: space-between;
  }
`

export const CalendarEventsContainer = styled.div`
  overflow: auto;
  max-height: 307px;
  margin: 38px 0 10px 0;
  position: relative;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.24);
  }

  &::-webkit-scrollbar-thumb {
    background: black;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    max-height: 545px;
    min-height: 545px;

    margin: 28px 0 100px 0;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    width: 50%;
    margin-top: 46px;
  }
`

export const UpcomingEventDiv = styled.div`
  h3 {
    width: fit-content;
    position: relative;
  }

  h3::after {
    content: '';
    position: absolute;
    top: 33px;
    height: 2px;
    width: 100%;
    left: 0;
    background-color: black;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    position: sticky;
    top: 0;
    background: white;
    padding-bottom: 15px;
  }
`

export const CalendarEventSubTitle = styled(Title)`
  font-family: ${(props) => props.theme.fontFamily.primary} !important;
  font-size: ${(props) => props.theme.fonts.heading6} !important;
  font-weight: normal;
  font-style: normal;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: ${(props) => props.theme.fonts.heading4} !important;
  }
`

export const EventItemsContainer = styled.div`
  width: 100%;
  margin-top: 24px;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    margin-top: 18px;
  }

  &:not(:nth-of-type(2)) {
    margin-top: 16px;

    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      margin-top: 60px;
    }
  }

  &:last-child {
    svg {
      display: none;
    }
  }
`

export const CalendarEventsBodyHead = styled.div`
  margin-top: 14px;

  .Event__Address-Text {
    margin-top: 10px;
    font-size: ${(props) => props.theme.fonts.smallText};
  }
`

export const CalenderEventsBodyText = styled.div`
  margin: 10px 0 10px 0;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    margin: 20px 0 45px 0;
  }

  .Event__Description-Text {
    font-style: italic;
  }
`

export const CalendarEventsIcon = styled.div`
  margin-left: 30px;
  svg {
    width: 190px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    margin-left: 50px;

    svg {
      width: 400px;
    }
  }
`

export const CalendarEventDates = styled.div`
  display: flex;
  align-items: center;

  .Formated-Date {
    font-family: ${(props) => props.theme.fontFamily.tertiary};
    font-size: ${(props) => props.theme.fonts.smallText};
    padding-right: 10px;
    text-transform: capitalize;

    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      font-size: 18px;
    }
  }
`
