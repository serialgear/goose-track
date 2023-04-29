// import { useState } from 'react';
import {
  format,
  formatISO,
  addMonths,
  subMonths,
  parseISO,
  startOfMonth,
  subDays,
} from 'date-fns';
import {
  MonthName,
  Wrapper,
  MonthWrapper,
  ButtonLeft,
  ButtonRight,
  WrapperButton,
  Icon,
} from './PeriodPaginator.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addChoosedDay, addCurrentMonth } from 'redux/calendar/calendar.slice';
import { selectCurrentMonth } from 'redux/calendar/calendar.selectors';
import Icons from '../../../images/sprite.svg';

export const PeriodPaginator = ({choosedDay}) => {
  const currentMonth = parseISO(useSelector(selectCurrentMonth));

  const dispatch = useDispatch();

  const handlePrevMonth = () => {
    dispatch(addCurrentMonth(subMonths(currentMonth, 1).toISOString()));
  };
  const handleNextMonth = () => {
    dispatch(addCurrentMonth(addMonths(currentMonth, 1).toISOString()));
  };

  const handlePrevDay = () => {
    dispatch(addChoosedDay(subDays(choosedDay, 1).toISOString()))
  }

  return (
    <Wrapper>
      <MonthWrapper>
        <MonthName>{format(currentMonth, 'MMMM yyyy')}</MonthName>
      </MonthWrapper>
      <WrapperButton>
     {choosedDay ? 
     (<ButtonLeft to={`day/${formatISO( 
      new Date(subDays(new Date(choosedDay), 1)),
            { representation: 'date' }
          )}`}onClick={handlePrevDay} >
          <Icon width="20" height="20">
            <use href={`${Icons}#calendar-right-sf`}></use>
          </Icon>
        </ButtonLeft>) : 
        (
          <ButtonLeft
          to={`month/${formatISO(
            new Date(subMonths(startOfMonth(new Date(currentMonth)), 1)),
            { representation: 'date' }
          )}`}
          onClick={handlePrevMonth}
        >
          <Icon width="20" height="20">
            <use href={`${Icons}#calendar-right-sf`}></use>
          </Icon>
        </ButtonLeft>
        )}
        <ButtonRight
          to={`month/${formatISO(
            new Date(addMonths(startOfMonth(new Date(currentMonth)), 1)),
            { representation: 'date' }
          )}`}
          onClick={handleNextMonth}
        >
          <Icon>
            <use href={`${Icons}#calendar-left-sf`}></use>
          </Icon>
        </ButtonRight>
      </WrapperButton>
    </Wrapper>
  );
};
