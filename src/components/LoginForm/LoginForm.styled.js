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
