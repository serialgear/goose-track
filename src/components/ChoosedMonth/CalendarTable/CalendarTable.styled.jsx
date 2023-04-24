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

export const DaysActive = styled.li`
position: relative;
border: var(--border-calendar);



cursor: pointer;
`;

export const DaysOfMonth = styled.div`
position: absolute;
right: 4px;
display: flex;
align-items: center;
justify-content: center;
width: 24px;
height: 24px;
padding: 4px 6px;

border-radius: 6px;
`;

export const Today = styled(DaysOfMonth)`

background-color: var(--accent-background-color);
color:  var(--primary-background-color);
`;

export const OtherDays = styled(DaysActive)`
color:  var(--primary-background-color);
cursor: default;
`;
export const Wrapper = styled.div`
width: 100%;
height: 100%;
padding: 8px 4px;
`; 

export const StyledLink = styled(Link)`

text-decoration: none;
color: inherit;
`;