import styled from 'styled-components';


export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 375px;
  max-height: 653px;
  margin: 95px 20px 0 20px;
  background-color:#ffffff ;
  border-radius: 16px;

  position: relative;
`;

export const Label = styled.label`

  font-size: 12px;
  line-height: 14px;
  color:var(--primary-text-color);
  margin: 0 18px 8px 18px;
`;

export const Input = styled.input`
  margin: 0 18px 18px 18px;
  border: 1px solid rgba(17, 17, 17, 0.1);
  border-radius: 8px;
  width: 299px;
  height: 42px;
  padding: 0;

  &:hover{
    border-color: var(--accent-background-color);
  }
  //& :last-child{
  //  background-color: red;
  //  border: red;
  //  color: red;
  //}
`;

export const InputAva = styled.input`
  display: none;
  width: 200px;
  height: 150px;
`;
export const DefaultSvg = styled.svg`
  fill: var(--auth-bg-color);
  width: 100%;
  height: 100%;

  object-fit: cover;
`;

export const LabelImg = styled.img`
  cursor: pointer;

  width: 100%;
  height: 100%;

  object-fit: cover;
`;

export const LabelAva = styled.label`
  border-radius: 50%;
  border: 2px solid #3E85F3;
  width: 72px;
  height: 72px;
  //margin-bottom: 14px;
  //margin-top: 40px;
  display: block;
  margin: -36px auto 0 auto;
  overflow: hidden;
  background-color: var(--primary-background-color);


`;

export const ButtonPlus = styled.button`
  width: 14px;
  height: 14px;
  background-color:  var(--accent-background-color);
  border-radius: 50%;
  border: none;
  color: var(--btn-text-color);

  position: absolute;
  top: 23px;
  right: 148px;

  & span {
    position: relative;
    vertical-align: middle;
    line-height: 0.5;
    bottom: 3px;
  }
`;


export const Button = styled.button`
  margin: 40px auto;
  display: block;
  width: 100%;
  max-width: 195px;
  max-height: 46px;
  background:  var(--accent-background-color);
  border-radius: 16px;
  color: var(--btn-text-color);
  font-size: 14px;
  line-height: 1.3;
  text-align: center;
  border: none;
  padding: 14px;
`;



export const TitleAvatar = styled.h3`

  font-weight: 700;
  font-size: 18px;
  line-height: 1;
  color: #343434;
  margin: 14px 0 0 0;
  text-align: center;
`;

export const TextAvatar = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: var(--secondary-text-color);
  margin: 4px 0 40px 0;
  text-align: center;
`;



