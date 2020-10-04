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
  min-height: 400px;
  max-width: 290px;
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    min-height: 580px;
    width: 60% !important;
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
  margin-bottom: 37px;
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    display: flex;
  }
`

export const CalendarEventsContainer = styled.div`
  margin-top: 30px;
  overflow: auto;
  max-height: 307px;
  min-height: 307px;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    max-height: 545px;
    min-height: 545px;
    margin-left: 30px;

    margin-top: 28px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    margin-left: 70px;
    margin-top: 46px;
  }
`
export const CalendarEvents = styled.div`
  width: 91%;
`

export const CalendarEventsBodyHead = styled.div`
  margin-top: 14px;
`

export const CalenderEventsBodyText = styled.div`
  margin-top: 14px;
  padding-bottom: 14px;

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    padding-bottom: 57px;
  }
`

export const CalendarEventsIcon = styled.div`
  padding-left: 50px;

  svg {
    width: 95%;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    padding-left: 160px;
  }
`

export const CalendarEventDates = styled.div`
  display: flex;
  align-items: center;
  padding-top: 16px;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    padding-top: 57px;
  }

  .Formated-Date {
    font-family: ${(props) => props.theme.fontFamily.tertiary};
    font-size: 12px;
    padding-right: 10px;

    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      font-size: 18px;
    }
  }
`

export const EventItemsContainer = styled.div`
  &:last-child {
    /* padding-bottom: 0; */
    svg {
      display: none;
    }
  }
`
