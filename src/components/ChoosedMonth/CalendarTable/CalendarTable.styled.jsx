import styled from "styled-components";

export const Calendar = styled.ul`
display: grid;
grid-template-columns: repeat(7, 1fr);
grid-auto-rows: 90px;

background: #FFFFFF;
border-radius: 8px;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 14px;
/* identical to box height, or 117% */

text-transform: uppercase;

color: #343434;

`;

export const Days = styled.li`
border: 1px solid rgba(220, 227, 229, 0.5);
display: flex;
justify-content: end;
padding: 8px 4px;
cursor: pointer;

`;