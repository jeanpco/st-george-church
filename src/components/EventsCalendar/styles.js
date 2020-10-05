import styled from '@emotion/styled'

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
    padding: 8px;
    border: 3px solid transparent;
    border-radius: 50%;
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

    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
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

  .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
    background-color: transparent;

    .date-cell {
      border: 3px solid ${(props) => props.theme.colors.secondary};
      border-radius: 50%;
    }
  }
  .DayPicker-Day--outside {
    opacity: 0.4;
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
    font-size: 12px;
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
  }
`

export const CalendarEventsContainer = styled.div`
  overflow: auto;
  max-height: 307px;
  margin: 38px 0 10px 0;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    max-height: 545px;
    min-height: 545px;

    margin: 28px 0 100px 0;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    margin-left: 70px;
    margin-top: 46px;
  }
`

export const EventItemsContainer = styled.div`
  width: 80%;
  margin-top: 24px;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    margin-top: 33px;
    width: 91%;
  }

  &:not(:first-of-type) {
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

  p {
    margin-top: 10px;
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

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    margin-left: 50px;

    svg {
      width: 400px;
    }
  }
`

export const CalendarEventDates = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;

  .Formated-Date {
    font-family: ${(props) => props.theme.fontFamily.tertiary};
    font-size: 12px;
    padding-right: 10px;
    text-transform: capitalize;

    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      font-size: 18px;
    }
  }
`
