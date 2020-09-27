import styled from '@emotion/styled'

export const CalendarContainer = styled.div`
  border-bottom: 6px solid ${(props) => props.theme.colors.primary};

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    border-bottom: 12px solid ${(props) => props.theme.colors.primary};
  }
`
export const DayPickerContainer = styled.div`

.DayPicker {
  font-size: 20px !important;
  margin-top: 62px;
  width: 50%;
    display: flex;
}
  .DayPicker-wrapper {
    outline: none;
  }
  .DayPicker-Day {
    color: ${(props) => props.theme.colors.primary};
    font-family: ${(props) => props.theme.fontFamily.primary};
    border: 3px solid transparent;
  }

  .DayPicker-Day--today {
    color: ${(props) => props.theme.colors.secondary};
    font-weight: normal;
  }

  .DayPicker-Day--selected {
    background-color: white !important;
    color: ${(props) => props.theme.colors.secondary} !important;
    border: 3px solid ${(props) => props.theme.colors.secondary};
  }
  .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
    background-color: white;
    border: 3px solid ${(props) => props.theme.colors.secondary};
  }

  .DayPicker-Day--outside {
    opacity: 0.4;
  }

  .DayPicker-Weekday {
    font-family: ${(props) => props.theme.fontFamily.primary};
    color: ${(props) => props.theme.colors.primary};
    font-size: 24px !important;
    padding: 25px;
    }

  .DayPicker-Month {
    border-collapse: separate;
  }

  .DayPicker-Caption {
    text-align: center;
    font-family: ${(props) => props.theme.fontFamily.secondary};
    font-weight: normal;
    /* background-color: ${(props) => props.theme.colors.yellow}; */
    border-radius: 10px;
    font-size: 20px;
    display: none;
  }
`

export const CalendarNavbarEl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  h3 {
    font-size: 20px;
    background: ${(props) => props.theme.colors.yellow};
    font-family: ${(props) => props.theme.fontFamily.secondary};
    border-radius: 29px;
    padding: 10px;
    text-align: center;
    font-weight: normal;
    width: 210px;
  }
  button {
    display: flex;
    background-color: transparent;
    border: none;
    font-family: ${(props) => props.theme.fontFamily.secondary};
    font-size: 20px;
    opacity: 0.4;
    width: 100px;
  }
`

export const CalendarIconPrev = styled.div`
  padding-right: 15px;
`

export const CalendarIconNext = styled.div`
  padding-right: 19px;
  padding-left: 15px;
`

export const CalendarHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CallendarItemsContainer = styled.div`
  display: flex;
`
