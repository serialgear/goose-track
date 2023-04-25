import styled from 'styled-components';

export const AvatarSvg = styled.svg`
  width: inherit;
  height: inherit;
  fill: var(--auth-bg-color);
  border-radius: 50%;
  border: solid 1px var(--accent-background-color);
  /* fill-opacity: 0.18; */
`;

export const AvatarImg = styled.img`
  width: inherit;
  height: auto;
  border-radius: 50%;
  border: solid 1px var(--accent-background-color);
`;