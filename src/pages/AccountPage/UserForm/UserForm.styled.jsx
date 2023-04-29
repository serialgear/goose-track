import styled from 'styled-components';
import DatePicker from 'react-datepicker';

import { createGlobalStyle } from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';

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
    padding: 0;
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
  margin-bottom: 18px;

  & > *:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 768px) {
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
  &:focus {
    border: var(--border);
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
    transform: translate(-50%, -50%);
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
    margin: 20px 0 0 0;
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
export const GlobalStyles = createGlobalStyle`
  .react-datepicker__wrapper{
    position: relative;
  }
  .react-datepicker {
    
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-2.5%, 0%);
    font-family: (var--primary-font);
    Width: 327px;
    Height: auto;
    border-radius: 16px;
    background-color: var(--accent-background-color);
     @media screen and (min-width: 768px) {
    width: 373px;
  
  }
        
  }
  .react-datepicker__month-container {
    float: inherit;
    box-sizing: inherit;
}
  .react-datepicker__header {
    font-family: var(--primary-font);
    
    text-align: center;
    background-color: var(--accent-background-color);
 
    border-top-right-radius: 16px;
    border-top-left-radius: 16px;
    padding: 8px 0;
    position: relative;
}
.react-datepicker__day-names{
  display:flex;
   border-bottom: var(--border);
   padding-bottom:12px;
   margin: 18px 25px 0px 25px;
   justify-content: space-between;

}
.react-datepicker__header:not(.react-datepicker__header--has-time-select) {
    border-top-right-radius: 16px;
    border-bottom: 0px;
    padding: 0
}
.react-datepicker__current-month{
  font-family: Inter;
font-size: 24px;
font-weight: 600;
line-height: 28px;
letter-spacing: 0em;
text-align: center;
color: var(--btn-text-color);
margin-top: 18px;
}
.react-datepicker__day-name{
  font-family: Inter;
font-size: 18px;
font-weight: 600;
line-height: 24px;
letter-spacing: 0em;
text-align: center;
color: var(--btn-text-color)

}
.react-datepicker__navigation{
  margin-top: 18px;
}
.react-datepicker__week {
  display:flex;

margin: 12px 18px 18px 20px;
color: var(--btn-text-color);
justify-content: space-between;

}
.react-datepicker__day{
font-family: Inter;
font-size: 18px;
font-weight: 400;
letter-spacing: 0em;
text-align: center;
color: var(--btn-text-color);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  text-align: center;
  line-height: 30px;
}

.react-datepicker__month{
  display: flex;
  gap: 2px;
  flex-direction: column;
  justify-content: space-between;
  
}
.react-datepicker__day--selected{
  transform: scale(1.2);
      border-radius: 50%;
    background-color: var(--btn-text-color);
    color:var(--accent-background-color);
    font-size: 16px;
   }
.react-datepicker__day--selected:hover{
  border-radius: 50%;
      background-color: white;
     
}

.react-datepicker__day:hover{
   transform: scale(1.2);
   border-radius: 50%;
  background-color: white;
  color: var(--accent-background-color);
  font-size: 16px;
 
}
  .react-datepicker__day--keyboard-selected{
    border-radius: 50%;
      background-color: white;
      color:var(--accent-background-color);
  }
  .react-datepicker__day--weekend{
  opacity: 50%;
}
  .react-datepicker__day--outside-month{
    color: var(--accent-background-color);
  background-color: transparent;
   pointer-events: none;
  opacity: 0;
}
 
.react-datepicker__view-calendar-icon input {
    padding: 6px 10px 5px 13px;
}

  .react-datepicker__triangle {
    visibility: hidden
  }

  /* .react-datepicker-popper[data-placement^='bottom']
    .react-datepicker__triangle::before {
    transform-origin: top;
    transform: rotate(45deg) scale(0.707) translate(50%, 50%);
  } */
`;

export const StyledDatePick = styled(DatePicker)`
  width: 299px;
  height: 42px;
  padding-left: 18px;
  border: var(--border);
  border-radius: 8px;
  font-family: 'Inter';
  font-style: normal;
  &:focus-visible {
    outline: none;
    border: var(--border);
    border-radius: 8px;
  }
  position: relative;

  @media screen and (min-width: 768px) {
    width: 354px;
    height: 46px;
  }
`;
export const StyledIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  position: absolute;
  /* right: 10px;
  top: 50%; */
  transform: translate(860%, 94%);
  z-index: 1;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #ffffff;
  /* box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); */
  cursor: pointer;
  @media screen and (min-width: 768px) {
    transform: translate(1025%, 108%);
  }
`;
