import styled from 'styled-components';

export const FormContainer = styled.div`
  background: #eaeaea;
  height: 100%;

    margin-left: auto;
    margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  //   margin: 0;
  @media screen and (max-width: 767px) {
    min-width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;

//   justify-content: center;
  padding: 40px 24px;
  gap: 24px;
  margin: 0;
  width: 335px;
//   height: 469px;

  background: #ffffff;
  border-radius: 8px;

//   align-items: center;
`;
export const Title = styled.h2`
  font-weight: 600;
  font-size: 18px;
  line-height: 1.33;
  margin: 0;
  color: #3e85f3;

  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
`;

export const Label = styled.label`
  display: flex;
gap : 8px;
  flex-direction: column;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.25;
  color: #111111;
 
`;
export const Input = styled.input`
  box-sizing: border-box;
//   margin-top: 8px;
  width: 287px;
  height: 46px;
padding: 14px;
  background: #ffffff;
  border: 1px solid rgba(220, 227, 229, 0.6);
  border-radius: 8px;
 
`;

export const Button = styled.button`
  font-weight: 600;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  color: #ffffff;

  width: 287px;
  height: 46px;
  background: #3e85f3;

  box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);
  border-radius: 16px;
  border: none;
  cursor: pointer;
`;