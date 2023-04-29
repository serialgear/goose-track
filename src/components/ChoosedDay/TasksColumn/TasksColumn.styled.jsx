import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 335px;
  min-height: 155px;
  padding: 18px 18px 20px;

  background: var(--primary-background-color);
  border: var(--border-calendar);
  border-radius: 8px;

  @media (min-width: 768px) {
    min-width: 345px;
  }
`;
