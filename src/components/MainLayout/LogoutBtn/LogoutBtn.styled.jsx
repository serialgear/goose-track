import styled from 'styled-components';

export const Btn = styled.button`
  position: absolute;
  bottom: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 14px 28px;

  color: var(--btn-text-color);
  background: var(--accent-background-color);
  box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.3);
  border-radius: 16px;
  border: none;

  transition: box-shadow var(--animation);

  &:hover,
  :focus {
    box-shadow: 4px 2px 16px rgba(136, 165, 191, 1);
  }

  @media (min-width: 768px) {
    padding: 16px 23px;
  }
`;
export const Txt = styled.span`
  padding-right: 6px;

  font-family: var(--primary-font);
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
`;
export const Svg = styled.svg`
  width: 18px;
  height: 18px;

  stroke: currentColor;
  fill: transparent;

  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;
