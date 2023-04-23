import styled from "styled-components";

export const List = styled.ul`
display: grid;
grid-template-columns: repeat(7, 1fr);
grid-template-rows: 50px;

background: #FFFFFF;
border: 1px solid rgba(220, 227, 229, 0.5);
border-radius: 8px;
@media (min-width: 768px) {
   
    /* height: 56px;
    margin-top: 30px; */
  }
`;

export const Days = styled.li`
display: flex;
align-items: center;
justify-content: center;


font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 18px;
/* identical to box height, or 112% */

text-transform: uppercase;

color: #616161;
text-align: center;
`;
