import styled from '@emotion/styled'

export const CalendarContainer = styled.div`
  border-bottom: 6px solid ${(props) => props.theme.colors.primary};

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    border-bottom: 12px solid ${(props) => props.theme.colors.primary};
  }
`
export const DayPickerContainer = styled.div`
  .cell-style {
    width: 32px;
    height: 32px;

    @media (min-width: ${(props) => props.theme.breakpoints.l}) {
      height: 51px;
      width: 51px;
    }
  }

  .date-cell {
    border: 3px solid transparent;
    padding: 8px;
    height: 32px;
    width: 32px;

    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      height: 51px;
      width: 51px;
    }
  }
  .DayPicker {
    font-size: 12px !important;
    margin-top: 40px;
    display: flex;
    justify-content: center;

    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      font-size: 20px !important;
      padding-left: 30px;
    }
  }
  .DayPicker-wrapper {
    outline: none;
  }
  .DayPicker-Day {
    color: ${(props) => props.theme.colors.primary};
    font-family: ${(props) => props.theme.fontFamily.primary};
    border: 3px solid transparent;
    padding: 3px;

    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    }
  }

  .DayPicker-Day--today {
    color: ${(props) => props.theme.colors.secondary};
    font-weight: normal;
  }

  .DayPicker-Day--selected {
    background-color: white !important;
    color: ${(props) => props.theme.colors.secondary} !important;

    .date-cell {
      border: 3px solid ${(props) => props.theme.colors.secondary};
      border-radius: 50%;
      padding: 8px;
    }
  }
  .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
    background-color: white;

    .date-cell {
      color: ${(props) => props.theme.colors.secondary} !important;

      border: 3px solid ${(props) => props.theme.colors.secondary};
      border-radius: 50%;
      padding: 8px;
    }
  }

  .DayPicker-Day--outside {
    opacity: 0.4;
  }

  .DayPicker-Weekday {
    font-family: ${(props) => props.theme.fontFamily.primary};
    color: ${(props) => props.theme.colors.primary};
    font-size: 1rem !important;

    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      font-size: 1.5rem !important;
    }
  }

  .DayPicker-Day--day {
    width: 50px;
    height: 50px;
  }

  .DayPicker-Month {
    border-collapse: separate;
    margin: 0;
  }

  .DayPicker-Caption {
    text-align: center;
    font-family: ${(props) => props.theme.fontFamily.secondary};
    font-weight: normal;
    background-color: ${(props) => props.theme.colors.yellow};
    border-radius: 10px;
    font-size: 20px;
    display: none;
  }
`

export const CalendarNavbarEl = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  margin-bottom: 20px;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    /* width: 500px; */
  }

  h3 {
    font-size: 12px;
    background: ${(props) => props.theme.colors.yellow};
    font-family: ${(props) => props.theme.fontFamily.secondary};
    border-radius: 29px;
    text-align: center;
    font-weight: normal;

    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      font-size: 20px;
    }
  }

  .Calender__Btn-Next {
    display: flex;
    background-color: transparent;
    border: none;
    font-family: ${(props) => props.theme.fontFamily.secondary};
    font-size: 12px;
    opacity: 0.4;
    padding-left: 10px;
    cursor: pointer;

    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      font-size: 20px;
    }
  }

  .Calender__Btn-Prev {
    display: flex;
    background-color: transparent;
    border: none;
    font-family: ${(props) => props.theme.fontFamily.secondary};
    font-size: 12px;
    opacity: 0.4;
    padding-right: 10px;
    cursor: pointer;
  }

  button:focus {
    outline: none;
  }
`

export const CalendarIconPrev = styled.div``

export const CalendarIconNext = styled.div``

export const CalendarHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CallendarItemsContainer = styled.div`
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    display: flex;
  }
`

export const CalendarEventsContainer = styled.div`
  margin-top: 62px;
  overflow: auto;
  height: 300px;
  padding-right: 60px;
  margin-bottom: 60px;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    margin-left: 110px;
  }
`
export const CalendarEventHeader = styled.div`
  margin-bottom: 33px;
`

export const CalendarEvents = styled.div`
  padding-bottom: 30px;
`

export const CalendarEventsBodyHead = styled.div`
  margin-top: 14px;
`

export const CalenderEventsBodyText = styled.div`
  margin-top: 14px;
  padding-bottom: 57px;
`

export const CalendarEventsIcon = styled.div`
  padding-left: 60px;
`
