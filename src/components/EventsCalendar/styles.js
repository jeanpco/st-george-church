import styled from '@emotion/styled'

export const CalendarContainer = styled.div`
  border-bottom: 6px solid ${(props) => props.theme.colors.primary};

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    border-bottom: 12px solid ${(props) => props.theme.colors.primary};
  }
`

export const CalendarHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
