import styled from 'styled-components';

export const Svg = styled.svg`
  width: 16px;
  height: 16px;
  fill: transparent;
  stroke: currentColor;
  background-color: transparent;
  margin-left: auto;

  &:hover {
    stroke: currentColor;
  }
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: stretch;
  justify-content: center;
`;

export const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 14px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  color: var(--secondary-text-color);

  /* align-items: flex-start; */
  /* justify-content: space-between; */
`;
