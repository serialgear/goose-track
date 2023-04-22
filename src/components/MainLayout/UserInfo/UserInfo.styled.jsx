import styled from 'styled-components';


export  const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 375px;
  max-height: 653px;
  margin: 0 20px 0 20px;
  background-color: #FFFFFF;
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

export const InputAva = styled.input`
  display: none;
`;

export const LabelImg = styled.img`
  cursor: pointer;
  display: block;
  width: 100%;
  height: auto;
  margin: 0 auto;
  bottom: 10px;
  position: relative;


`;

export const LabelAva = styled.label`
  border-radius: 50%;
  border: 2px solid #3E85F3;
  width: 124px;
  height: 124px;
  margin-bottom: 14px;
  margin-top: 40px;

`
export const ButtonPlus = styled.button`
  width: 24px;
  height: 24px;
  background-color: #3E85F3;
  border-radius: 50%;
  border: none;
  color: white;

  position: absolute;
  top: 210px;
  right: 170px;

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

export const ContainerAva = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FFFFFF;

`;

export const TitleAvatar = styled.h3`

  font-weight: 700;
  font-size: 18px;
  line-height: 1;
  color: #343434;
  margin: 14px 0 8px 0;
`;

export const TextAvatar = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: #616161;
  margin: 0 0 40px 0;
`
