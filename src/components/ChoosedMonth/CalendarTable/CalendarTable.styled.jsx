import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Calendar = styled.ul`
  position: relative;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-auto-rows: 94px;

  background: var(--primary-background-color);
  border-radius: 8px;
  font-family: var(--primary-font);
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.17px;

  text-transform: uppercase;

  color: var(--calendar-digit-color);
  @media (min-width: 768px) {
    grid-auto-rows: 144px;

    font-size: 16px;
    line-height: 1.12;
  }
  @media (min-width: 1280px) {
    grid-auto-rows: 125px;
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
