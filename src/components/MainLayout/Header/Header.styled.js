import styled from 'styled-components';

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 24px;
  margin-bottom: 64px;

  @media (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
  }
  @media (min-width: 1280) {
    padding-top: 40px;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;


export const PageName = styled.h2`
  display: none;
  @media (min-width: 1280px) {
    display: flex;
    font-family: var(--primary-font);
    font-weight: 700;
    font-size: 32px;
    line-height: 32px;
    color: var(--primary-text-color);
  }
`;

export const UserName = styled.h2`
  font-family: var(--primary-font);
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  color: var(--primary-text-color);
  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const MobileMenuSvg = styled.svg`
  width: 24px;
  height: 24px;
  stroke: var(--calendar-digit-color);
  
  display: flex;
  @media (min-width: 768px) {
    width: 34px;
    height: 34px;
  }
  @media (min-width: 1280px) {
    display: none;
  }  
`;

export const HeaderAvatarWrapper = styled.div`
  width: 32px;
  height: 32px;
  @media (min-width: 1280px) {
    width: 44px;
    height: 44px;
  }
`;


