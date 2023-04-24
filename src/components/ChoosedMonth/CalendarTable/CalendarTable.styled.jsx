import styled from "styled-components";

export const Calendar = styled.ul`
display: grid;
grid-template-columns: repeat(7, 1fr);
grid-auto-rows: 94px;

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

export const DaysActive = styled.li`
position: relative;
border: 1px solid rgba(220, 227, 229, 0.5);

padding: 8px 4px;

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

background-color: #3E85F3;
color: #FFFFFF;

`;

export const OtherDays = styled(DaysActive)`
color:  #FFFFFF;
cursor: default;
`;
