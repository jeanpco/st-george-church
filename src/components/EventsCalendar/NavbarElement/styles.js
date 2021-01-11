import styled from '@emotion/styled'

export const CalendarNavbarEl = styled.div`
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
  }

  .DayPicker-NavBar {
    display: flex;
    justify-content: space-between;
    position: relative;
    top: 41px;
    align-items: center;

    @media (min-width: ${(props) => props.theme.breakpoints.l}) {
      top: 56px;
    }
  }

  button {
    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    }
  }

  button:focus {
    outline: none;
  }

  .Calendar__Btn-Prev {
    font-size: ${(props) => props.theme.fonts.smallText};
    background: transparent;
    border: none;
    display: flex;
    font-family: ${(props) => props.theme.fontFamily.secondary};
    opacity: 0.6;
    text-transform: capitalize;
    @media (min-width: ${(props) => props.theme.breakpoints.l}) {
      font-size: 20px;
    }
  }

  .Calendar__Btn-Next {
    font-size: ${(props) => props.theme.fonts.smallText};
    background: transparent;
    border: none;
    display: flex;
    font-family: ${(props) => props.theme.fontFamily.secondary};
    opacity: 0.6;
    text-transform: capitalize;
    @media (min-width: ${(props) => props.theme.breakpoints.l}) {
      font-size: 20px;
    }
  }
`

export const CalendarNavIconNext = styled.div`
  position: absolute;
  right: 33px;

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    right: 50px;

    svg {
      width: 50px;
    }
  }
`
export const CalendarNavIconPrev = styled.div`
  position: absolute;
  left: 33px;

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    left: 50px;

    svg {
      width: 50px;
    }
  }
`
