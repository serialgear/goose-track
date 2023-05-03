import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Calendar = styled.ul`
  ${() => {
    const calendarHeight = window.innerHeight - 293;
    if (window.innerHeight > 763) {
      return `height: ${calendarHeight}px`;
    }
    // return `${calendarHeight}px`;
  }};
  position: relative;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  /* grid-auto-rows: 1fr; */
  grid-auto-rows: minmax(94px, 1fr);

  background: var(--primary-background-color);
  border-radius: 8px;
  font-family: var(--primary-font);
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.17px;

  color: var(--calendar-digit-color);
  @media (min-width: 768px) {
    /* grid-auto-rows: 144px;
    grid-auto-rows: minmax(144px, 1fr); */

    font-size: 16px;
    line-height: 1.12;
  }
  @media (min-width: 1280px) {
    /* grid-auto-rows: 125px; */
    /* grid-template-rows: repeat(auto, minmax(125px, 1fr)); */
  }
`;

export const Days = styled.li`
  position: relative;
  border: var(--border-calendar);
  @media (min-width: 768px) {
    border: var(--border);
  }
`;

export const OtherMonthStyledLink = styled(Link)`
  text-decoration: none;
  color: currentColor;
  pointer-events: none;
`;
export const CurrentMonthStyledLink = styled(Link)`
  text-decoration: none;
  color: currentColor;
`;
