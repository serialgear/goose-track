import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: var(--auth-bg-color);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Title = styled.h1`
  margin-bottom: 32px;
  font-family: var(--primary-font);
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.33;

  color: var(--accent-text-color);

  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  /* font-family: var(--primary-font);
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: var(--secondary-text-color); */
`;

export const Span = styled.span`
  margin-bottom: 8px;
  font-family: var(--primary-font);
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: var(--primary-text-color);

  @media (min-width: 768px) {
    margin-top: 18px;
    font-size: 14px;
    line-height: 17px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 40px 24px;
  width: 335px;
  margin-bottom: 18px;
  background-color: #fff;
  border-radius: 8px;

  @media (min-width: 768px) {
    padding: 40px;
    width: 480px;
    margin-bottom: 24px;
  }
`;

export const Input = styled.input`
  background-color: rgba(255, 255, 255, 0);
  border: var(--border-auth);
  border-radius: 8px;
  padding: 14px;
  width: 100%;

  &::placeholder {
    font-family: var(--primary-font);
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.29;
    color: var(--auth-placeholder-color);
  }
`;

export const Button = styled.button`
  height: 46px;
  /* width: 287px; */
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 12px;
  padding: 14px;
  margin-top: 8px;
  background: var(--accent-background-color);
  box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);
  border-radius: 16px;
  border: none;
  color: var(--btn-text-color);

  &:hover,
  :focus {
    transform: scale(1.02);
  }

  @media (min-width: 768px) {
    width: 400px;
    height: 56px;
  }
`;

export const BtnSpan = styled.span`
  font-family: var(--main-font);
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  color: #fff;
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const Svg = styled.svg`
  width: 18px;
  height: 18px;
  fill: none;
  stroke: #ffffff;

  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const H2 = styled.h2`
  font-family: var(--main-font);
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  border-bottom: 1px solid var(--accent-color);
  color: var(--accent-color);
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);

  &:hover,
  :focus {
    color: var(--main-background-color);
    border-color: var(--main-background-color);
  }

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
`;
