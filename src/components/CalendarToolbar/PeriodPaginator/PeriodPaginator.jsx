import { useState } from 'react';
import { format, addMonths, subMonths, parseISO } from 'date-fns';
import {
  MonthName,
  Wrapper,
  MonthWrapper,
  ButtonLeft,
  ButtonRight,
  WrapperButton,
} from './PeriodPaginator.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addCurrentMonth } from 'redux/calendar/calendar.slice';
import { selectCurrentMonth } from 'redux/calendar/calendar.selectors';

export const PeriodPaginator = () => {
  const currentMonth = parseISO(useSelector(selectCurrentMonth));

  const dispatch = useDispatch();

  const handlePrevMonth = () => {
    dispatch(addCurrentMonth(subMonths(currentMonth, 1).toISOString()));
  };
  const handleNextMonth = () => {
    dispatch(addCurrentMonth(addMonths(currentMonth, 1).toISOString()));
  };

  return (
    <Wrapper>
      <MonthWrapper>
        <MonthName>{format(currentMonth, 'MMMM yyyy')}</MonthName>
      </MonthWrapper>
      <WrapperButton>
        <ButtonLeft type="button" onClick={handlePrevMonth}></ButtonLeft>
        <ButtonRight type="button" onClick={handleNextMonth}></ButtonRight>
      </WrapperButton>
    </Wrapper>
  );
};
