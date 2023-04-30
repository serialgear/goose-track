import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MonthWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 149px;

  min-width: 118px;
  height: 30px;
  padding: 6px 12px;

  background-color: var(--accent-btn-background);
  border-radius: 8px;
`;

export const MonthName = styled.p`
  min-width: 94px;
  height: 18px;

  font-family: var(--primary-font);
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.29;

  text-align: center;
  text-transform: uppercase;

  color: var(--primary-background-color);
`;

export const WrapperButton = styled.div`
  display: flex;
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;
  gap: 149px;
  isolation: isolate;

  width: 36px;
  height: 30px;

  background: var(--primary-background-color);
  border: var(--border-calendar);
`;

export const ButtonLeft = styled(StyledLink)`
  border-radius: 8px 0px 0px 8px;
`;
export const ButtonRight = styled(StyledLink)`
  border-radius: 0px 8px 8px 0px;
`;
export const Icon = styled.svg`
  width: 16px;
  height: 16px;
  stroke: #616161;
  fill: transparent;
`;
