import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
`;

export const ButtonMonth = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px 16px;
gap: 149px;

width: 76px;
height: 34px;

background: #CAE8FF;
border: none;
border-right: 1px solid rgba(62, 133, 243, 0.2);
border-radius: 8px 0px 0px 8px;
cursor: pointer;

font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 18px;
/* identical to box height, or 129% */

text-align: center;

color: #3E85F3;
`;

export const ButtonDay = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px 25px;
gap: 149px;

width: 76px;
height: 34px;
border: none;
background: #E3F3FF;
border-radius: 0px 8px 8px 0px;
cursor: pointer;

font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 18px;
/* identical to box height, or 129% */

text-align: center;

color: #3E85F3;
`;
