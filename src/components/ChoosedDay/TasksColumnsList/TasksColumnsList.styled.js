import styled from 'styled-components';

export const ListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  max-height: 432px;

  gap: 14px;
  overflow-x: auto;

  @media (min-width: 768px) {
    max-height: 568px;
  }
`;
