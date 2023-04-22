import styled from 'styled-components';


export  const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 375px;
  max-height: 653px;
  margin: 0 20px 0 20px;
`;

export const Label = styled.label`

  font-size: 12px;
  line-height: 14px;
  color: #111111;
  margin: 0 18px 8px 18px;
`;

export const Input = styled.input`
  margin: 0 18px 18px 18px;
  border: 1px solid rgba(17, 17, 17, 0.1);
  border-radius: 8px;
  width: 299px;
  height: 42px;
`;

export const Button = styled.button`
  margin: 40px auto;
  display: block;
  width: 100%;
  max-width: 195px;
  max-height: 46px;
  background: #3E85F3;
  border-radius: 16px;
  color: #FFFFFF;
  font-size: 14px;
  line-height: 1.3;
  text-align: center;
  border: none;
  padding: 14px;
`;
