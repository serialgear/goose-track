import styled from 'styled-components';


export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 335px;
  width: 100%;
  //max-height: 653px;
  margin: 0 auto 40px auto;
  padding: 0 20px;
  background-color: #ffffff;
  border-radius: 16px;
  position: relative;


  @media (min-width: 768px) {
    max-width: 704px;
    //max-height: 854px;
    padding: 0 ;
    position: relative;
    margin-bottom: 35px;
  }

  @media (min-width: 1024px) {
    max-width: 1024px;
   //max-height: 752px;
    position: relative;

  }
`;

export const FlexInput = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    flex-wrap: wrap;
    width: 758px;
    justify-content: space-between;
  }
`;

export const FlexChild = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  @media (min-width: 1024px) {
    display: flex;
    flex-wrap: wrap;
    width: 354px;
  }
`;

export const Label = styled.label`
  font-family: 'Inter', serif;
  font-size: 12px;
  line-height: 1.2;
  display: inline-block;
  margin: 0 0 8px 0;
  padding: 0;
`;

export const Input = styled.input`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.3;
  margin-bottom: 18px;
  border: 1px solid rgba(17, 17, 17, 0.1);
  border-radius: 8px;
  width: 299px;
  height: 42px;
  padding: 14px;
  box-sizing: border-box;

  @media (min-width: 768px) {
    width: 354px;
    height: 46px;
    padding-left: 18px;
    margin-bottom: 24px;
  }

  &:hover,
  :focus {
    border-color: var(--accent-background-color);
  }

  &:nth-last-child(5) {
    margin-bottom: 0;
  }
`;

export const AvatarBlock = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
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
  border: 2px solid var(--accent-text-color);
  width: 72px;
  height: 72px;

  display: block;
  margin: -36px auto 0 auto;
  overflow: hidden;
  background-color: var(--primary-background-color);

  @media (min-width: 768px) {
    width: 124px;
    height: 124px;
    margin: 40px auto 0 auto;
  }

  @media (min-width: 1024px) {
    width: 124px;
    height: 130px;
    margin-top: 60px;
  }
`;

export const ButtonPlus = styled.button`
  width: 14px;
  height: 14px;
  background-color: var(--accent-background-color);
  border-radius: 50%;
  border: none;
  color: var(--btn-text-color);

  position: absolute;
  top: 23px;
  right: 148px;

  @media (min-width: 768px) {
    top: 148px;
    right: 317px;
  }

  @media (min-width: 1024px) {
    top: 172px;
    right: 478px;
  }

  & span {
    position: relative;
    vertical-align: middle;
    line-height: 0.5;
    bottom: 3px;
  }
`;


export const Button = styled.button`
  font-family: 'Inter', sans-serif;
  margin: 22px auto 31px auto;
  display: block;
  width: 100%;
  max-width: 195px;
  max-height: 46px;
  background: var(--accent-background-color);
  border-radius: 16px;
  color: var(--btn-text-color);
  font-size: 14px;
  line-height: 1.3;
  text-align: center;
  border: none;
  padding: 14px;

  @media (min-width: 768px) {
    padding: 15px;
    margin-top: 16px;
    max-width: 262px;
    max-height: 48px;
    margin-bottom: 40px;
  }

  @media (min-width: 1024px) {
    margin: 64px auto 60px auto;
  }
`;


export const TitleAvatar = styled.h3`
  font-weight: 700;
  font-size: 18px;
  line-height: 1;
  color: #343434;
  margin: 14px 0 0 0;
  text-align: center;

  @media (min-width: 768px) {
    margin: 20px 0 0 0 ;
  }
`;

export const TextAvatar = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: var(--secondary-text-color);
  margin: 4px 0 40px 0;
  text-align: center;

  @media (min-width: 768px) {
    margin: 8px 0 40px 0;
  }

  @media (min-width: 1024px) {
    margin-bottom: 44px;
  }
`;



