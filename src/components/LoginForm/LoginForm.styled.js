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

  @media (min-width: 768px) {
    margin-bottom: 40px;
    font-size: 24px;
    line-height: 1;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  @media (min-width: 768px) {
    margin-bottom: 18px;
  }
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
  max-width: 335px;
  width: 100%;
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
  outline: none;

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
    box-shadow: 4px 2px 16px rgba(136, 165, 191, 1);
  }

  @media (min-width: 768px) {
    /* width: 400px; */
    height: 56px;
    margin-top: 30px;
  }
`;

// text on button
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
  line-height: 1.17;
  text-decoration-line: underline;
  color: var(--accent-text-color);
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);

  &:hover,
  :focus {
    color: var(--primary-background-color);
  }

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  }
`;

export const LoginImg = styled.img`
  display: none;

  @media (min-width: 1440px) {
    display: block;
    width: 368px;
    height: 521px;
    position: fixed;
    bottom: 20px;
    right: 60px;
  }
`;

export const Errors = styled.span`
  /* padding: 0 14px; */
  color: red;
  font-family: var(--primary-font);
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.2;
`;
