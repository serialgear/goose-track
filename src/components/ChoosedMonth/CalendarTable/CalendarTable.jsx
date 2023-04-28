import { useSelector } from 'react-redux';
import {
  Calendar,
  Days,
  OtherMonthStyledLink,
  Wrapper,
  CurrentMonthStyledLink,
} from './CalendarTable.styled';
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  isSameMonth,
  parseISO,
  eachDayOfInterval,
  formatISO,
} from 'date-fns';
import {
  selectCurrentMonth,
  selectTasks,
} from 'redux/calendar/calendar.selectors';
import { CalendarTableItem } from './CalendarTableItem';

export const CalendarTable = () => {
  const currentMonth = parseISO(useSelector(selectCurrentMonth));
  
  const tasksOfMonth = useSelector(selectTasks)
  
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);

  const daysInMonth = eachDayOfInterval({
    start: startOfWeek(monthStart, { weekStartsOn: 1 }),
    end: endOfWeek(monthEnd, { weekStartsOn: 1 }),
  });

  return (
    <Calendar>
      {daysInMonth?.map((day, idx) => {
        
        const StyledLink = !isSameMonth(day, currentMonth)
          ? OtherMonthStyledLink
          : CurrentMonthStyledLink;
          
        const choosedDay = new Date(day)

        return (
          <Days key={idx}>
            <StyledLink to={`/calendar/day/${formatISO(new Date(choosedDay),
              { representation: 'date' })}`}>
              <Wrapper>
              {isSameMonth(day, currentMonth) && (
                    <CalendarTableItem day={day}
                      dayTasks={tasksOfMonth[Number(format(day, 'd'))]}
                    />
                )}
              </Wrapper>
            </StyledLink>
          </Days>
        );
      })}
    </Calendar>
  );
};
