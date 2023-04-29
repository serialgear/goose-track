import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  background-color: var(--secondary-background-color);

  @media (max-width: 375px) {
    max-width: 376px;
  }
  @media (min-width: 376px) {
    max-width: 768px;
  }
  /* 
  @media (min-width: 425px) {
    min-width: 425px;
  } */

  @media (min-width: 768px) {
    /* min-width: 768px; */
    max-width: 1280px;
    display: flex;
  }

  @media (min-width: 1280px) {
    /* min-width: 1280px; */
    max-width: 1600px;
  }

  /* @media (min-width: 1600px) {
    max-width: 1600px;
  } */
`;

export const Wrapper = styled.div`
  display: block;
  width: 100%;
  padding: 20px;
  @media (min-width: 768px) {
    padding: 32px;
  }
  @media (min-width: 1280px) {
    margin-left: 289px;
  }
`;

export const Main = styled.main`
  //height: 100%;
`;
