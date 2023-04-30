import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  width: 100%;
  margin-top: 51px;
  padding: 40px 20px;
  background-color: var(--primary-background-color);
  border-radius: 16px;
  position: relative;

  @media (min-width: 768px) {
    margin-top: 0;
    padding: 40px;
    position: static;
  }

  @media (min-width: 1280px) {
    gap: 60px;
    padding-top: 60px;
    padding-bottom: 60px;
  }
`;

export const FlexInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 18px;

  @media (min-width: 768px) {
    gap: 24px;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 732px;
  }

  @media (min-width: 876px) {
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
  @media (min-width: 768px) {
    font-size: 14px;
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
  height: 42px;
  padding: 12px 12px 12px 14px;
  box-sizing: border-box;
  color: var(--primary-text-color);
  background-color: var(--primary-background-color);

  &::placeholder {
    font-family: var(--primary-font);
    font-size: 14px;
    line-height: 1.29;
    color: var(--auth-placeholder-color);
  }

  @media (max-width: 374px) {
    max-width: 298px;
  }

  @media (min-width: 375px) {
    width: 299px;
  }

  @media (min-width: 768px) {
    width: 354px;
    height: 46px;
    padding-left: 14px 14px 14px 18px;
    font-size: 16px;
  }

  //&:hover,
  //:focus {
  //  border-color: var(--accent-background-color);
  //}
`;

export const AvatarBlock = styled.div`
  margin-top: -76px;

  @media (min-width: 768px) {
    margin-top: 0;
  }

  @media (min-width: 1280px) {
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
  border-radius: 50%;
  /* overflow: hidden; */
  object-fit: cover;
`;

export const LabelAva = styled.label`
  position: relative;
  border-radius: 50%;
  border: 2px solid var(--accent-background-color);
  width: 72px;
  height: 72px;

  display: block;
  /* margin: -36px auto 0 auto; */
  /* overflow: hidden; */
  background-color: var(--avatar-background-color);

  @media (min-width: 768px) {
    width: 124px;
    height: 124px;
  }
`;

export const ButtonPlus = styled.div`
  width: 14px;
  height: 14px;
  background-color: var(--accent-background-color);
  border-radius: 50%;
  color: var(--btn-text-color);

  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: -4px;
  right: 15px;

  @media (min-width: 768px) {
    bottom: -6px;
    right: 24px;
    width: 24px;
    height: 24px;
  }
`;

export const PlusSvg = styled.svg`
  fill: currentColor;
  stroke: currentColor;
  width: 8px;
  height: 8px;

  @media (min-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;

export const Button = styled.button`
  font-family: 'Inter', sans-serif;
  /* margin: 40px auto; */
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

  @media (min-width: 1280px) {
    /* margin: 64px auto 60px auto; */
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
  margin-top: 4px;
  /* margin: 4px 0 40px 0; */
  text-align: center;

  @media (min-width: 768px) {
    margin-top: 8px;
    /* margin: 8px 0 40px 0; */
  }
  /* 
  @media (min-width: 1280px) {
    margin-bottom: 44px;
  } */
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
