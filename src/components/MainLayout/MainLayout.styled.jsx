import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  background-color: #eaeaea;

  @media (min-width: 376px) {
    max-width: 376px;
  }

  @media (min-width: 425px) {
    min-width: 425px;
  }

  @media (min-width: 768px) {
    min-width: 768px;
    display: flex;
  }

  @media (min-width: 1024px) {
    min-width: 1024px;
  }

  @media (min-width: 1440px) {
    min-width: 1440px;
  }
`;

export const SideBarWrapper = styled.div`
  display: flex;
  background-color: #fff;
  width: 289px;
  height: 100vh;

  @media (max-width: 768px) {
    display: none;
  }
`;
export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`;
export const Wrapper = styled.div`
  display: block;
  width: 100%;
`;

export const Main = styled.main`
  height: 100%;
`;
