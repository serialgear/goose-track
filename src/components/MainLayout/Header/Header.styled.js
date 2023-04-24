import styled from 'styled-components';

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
  /* padding-left: 20px;
  padding-right: 20px; */
  padding-top: 24px;
  margin-bottom: 64px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

// export const MobileMenu = styled.button`
// display: flex;
// @media (min-width: 1280px) {
//     display: none;
//   }

// `
export const PageName = styled.h2`
  display: none;
  @media (min-width: 1280px) {
    display: flex;
  }
`;

export const MobileMenuSvg = styled.svg`
  width: 34px;
  height: 34px;
  fill: var(--primary-text-color);
  display: flex;
  @media (min-width: 1280px) {
    display: none;
  }

  /* @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  } */
`;
