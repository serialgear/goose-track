import styled from "styled-components";

// export const Icon = styled.svg`
  
//   width: 22px;
//   height: 22px;
//   stroke: #111111;
//   fill: transparent;

// `;
export const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`;
export const Title = styled.p`
font-family: var(--primary-font);
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 1.11;

color: var(--primary-text-color);
`;

export const Button = styled.button`
display: flex;
align-items: center;
justify-content: center;
font-family: var(--primary-font);
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 1.11;
padding: 0;
border-radius: 50%;
border: 2px solid black;
width: 22px;
height: 22px;
`;
