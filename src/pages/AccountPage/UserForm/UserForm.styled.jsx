import styled from 'styled-components';


export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 335px;
  width: 100%;
  margin: 0 auto 40px auto;
  padding: 0 20px;
  background-color: var(--primary-background-color);
  border-radius: 16px;
  position: relative;


  @media (min-width: 768px) {
    max-width: 704px;
    padding: 0 ;
    position: relative;
    margin-bottom: 35px;
  }

  @media (min-width: 1440px) {
    max-width: 1087px;
    position: relative;
    margin-left: 32px;
    margin-right: 32px;
    margin-bottom: 32px;
  }
`;

export const FlexInput = styled.div`
  @media (min-width: 1440px) {
    display: flex;
    flex-wrap: wrap;
    width: 758px;
    justify-content: space-between;
  }
`;

export const LabelSpan = styled.span`
  margin-bottom: 8px;
  color: var(--secondary-text-color);
`;

export const Label = styled.label`
  font-family: 'Inter', serif;
  font-size: 12px;
  line-height: 1.2;
  display: flex;
  flex-direction: column;
  margin-bottom: 18px;;

  & > *:last-child {
    margin-bottom: 0;

  }

  @media ( min-width: 768px) {
    font-size: 14px;
    margin-bottom: 24px;
  }
`;

export const Input = styled.input`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.3;
  outline: none;
  border: var(--border);
  border-radius: 8px;
  width: 299px;
  height: 42px;
  padding: 14px;
  box-sizing: border-box;
  color: var(--primary-text-color);
  background-color: var(--primary-background-color);

  &::placeholder {
    font-family: var(--primary-font);
    font-size: 14px;
    line-height: 1.29;
    color: var(--auth-placeholder-color);

  }


  @media (min-width: 768px) {
    width: 354px;
    height: 46px;
    padding-left: 18px;
    font-size: 16px;
  }

  //&:hover,
  //:focus {
  //  border-color: var(--accent-background-color);
  //}


`;

export const AvatarBlock = styled.div`
  @media (min-width: 1440px) {
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
  width: 50%;
  height: 50%;
  position: relative;
  top: 25%;
  left: 25%;
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
  border: 2px solid var(--accent-background-color);
  width: 72px;
  height: 72px;

  display: block;
  margin: -36px auto 0 auto;
  overflow: hidden;
  background-color: var(--avatar-background-color);

  @media (min-width: 768px) {
    width: 124px;
    height: 124px;
    margin: 40px auto 0 auto;
  }

  @media (min-width: 1440px) {
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

  @media (min-width: 1440px) {
    top: 172px;
    right: 505px;
  }

  & span {
    //position: relative;
    vertical-align: middle;
    line-height: 0.5;
    // bottom: 3px;
    position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%)
  }
`;


export const Button = styled.button`
  font-family: 'Inter', sans-serif;
  margin: 40px auto;
  display: block;
  width: 100%;
  max-width: 195px;

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
    // margin-top: 16px;
    max-width: 262px;
    max-height: 48px;
    // margin-bottom: 40px;
  }

  @media (min-width: 1440px) {
    margin: 64px auto 60px auto;
  }
`;


export const TitleAvatar = styled.h3`
  font-weight: 700;
  font-size: 18px;
  line-height: 1;
  //color: #343434;
  margin: 14px 0 0 0;
  text-align: center;
  color: var(--primary-text-color);

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

  @media (min-width: 1440px) {
    margin-bottom: 44px;
  }
`;

export const Errors = styled.p`
  color: red;
  font-size: 10px;

`;

