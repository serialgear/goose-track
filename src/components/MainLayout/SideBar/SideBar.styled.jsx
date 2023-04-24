import styled from 'styled-components';

export const Container = styled.div`
  padding: 24px 20px;
  background-color: var(--sidebar-background-color);
  width: 289px;
  height: 100vh;

  @media (max-width: 768px) {
    position: fixed;
    display: none;
  }
`;
