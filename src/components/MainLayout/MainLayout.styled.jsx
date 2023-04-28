import styled from 'styled-components';

export const Container = styled.div`

  @media (min-width: 768px) {
    display: flex;
  }

  @media (min-width: 1280px) {
    display: grid;
    grid-template-columns: 25% 1fr;
  }
  
  @media (min-width: 1440px) {
    grid-template-columns: 20% 1fr;
  }
`;

export const Wrapper = styled.div`
  display: block;
  margin: 0 auto;

  @media (min-width: 376px) {
    max-width: 376px;
  }
  /* 
  @media (min-width: 425px) {
    min-width: 425px;
  } */
  @media (min-width: 768px) {
    min-width: 768px;
  }
  @media (min-width: 1280px) {
    min-width: calc(1280px - 34%);
  }

  @media (min-width: 1440px) {
    min-width: calc(1440px - 25%);
  }
`;

export const Main = styled.main``;
