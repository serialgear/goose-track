import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Calendar = styled.ul`
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

`;

export const Days = styled.li`
position: relative;
border: var(--border-calendar);
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

export const Wrapper = styled.div`

width: 100%;
height: 100%;
/* padding: 8px 4px; */
padding-top: 28px;
`; 

