import {
  MonthName,
  Wrapper,
  MonthWrapper,
  ButtonLeft,
  ButtonRight,
  WrapperButton,
} from './PeriodPaginator.styled';

export const PeriodPaginator = () => {
  return (
  
    <Wrapper>
      <MonthWrapper>
        <MonthName>April 2023</MonthName>
      </MonthWrapper>
      <WrapperButton>
        <ButtonLeft type="button"></ButtonLeft>
        <ButtonRight type="button"></ButtonRight>
      </WrapperButton>
    </Wrapper>
   
  
  );
};
