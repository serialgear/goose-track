import styled from "styled-components";

const List = styled.ul`
display: grid;
grid-template-columns: repeat(7, 1fr);


background: var(--primary-background-color);
border: var(--border-calendar);
border-radius: 8px;
@media (min-width: 768px) {
   
    /* height: 56px;
    margin-top: 30px; */
  }
`;
export const ListMonth = styled(List)`
grid-template-rows: 50px;
`;
export const ListDays = styled(List)`
grid-template-rows:74px;
`;

export const Week = styled.li`
/* display: flex;
align-items: center;
justify-content: center; */

`;

export const Month = styled(Week)`
display: flex;
align-items: center;
justify-content: center;

`;

export const Days = styled(Week)`
display: flex;
align-items: center;
justify-content: center;

flex-direction: column;
gap: 24px;

/* padding: 14px 0; */
`;

// const Day = styled.p`
// font-family: var(--primary-font);
// font-style: normal;
// font-weight: 600;
// font-size: 16px;
// line-height: 1.12px;

// text-transform: uppercase;

// color: var(--secondary-text-color);
// text-align: center;
// `;

export const DayWeek = styled.p`
font-family: var(--primary-font);
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 1.12px;

text-transform: uppercase;

color: var(--secondary-text-color);
text-align: center;
`;

export const DateWeek = styled.p`
font-family: var(--primary-font);
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 1.17px;

text-transform: uppercase;

color: var(--secondary-text-color);
text-align: center;
`;

