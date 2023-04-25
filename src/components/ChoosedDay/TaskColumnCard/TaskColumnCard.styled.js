import styled from "styled-components";

export const Container = styled.div`
  display  : flex;
  flex-direction: column;
  gap: 28px;
  padding: 15px;

  background-color: var(--secondary-background-color);
  border: var(--border);
  border-radius: 8px;
`;

export const Wrapper = styled.div`
  display  : flex;
  justify-content: space-between;
`;

export const TaskTitle = styled.h3`
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 18px;
/* or 129% */


color: #111111;
`;

export const TaskAvatarWrapper = styled.div`
  width: 32px;
  height: 32px;

  /* fill-opacity: 0.18; */
  /* overflow: hidden; */
  /* cursor: pointer; */
`;